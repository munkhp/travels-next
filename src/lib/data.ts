import toursJson from "@/data/tours.json";
import destinationsJson from "@/data/destinations.json";
import itinerariesJson from "@/data/itineraries.json";
import activitiesJson from "@/data/activities.json";
import eventsJson from "@/data/events.json";
import { connectDb, hasDb } from "./db";
import type { Activity, Destination, Itinerary, Tour, TravelEvent } from "./types";

/**
 * Data access layer.
 * Reads from MongoDB when MONGODB_URI is set, otherwise serves the bundled
 * JSON snapshot exported from the same dump (src/data/*.json).
 */

const localTours = toursJson as unknown as Tour[];
const localDestinations = destinationsJson as unknown as Destination[];
const localItineraries = itinerariesJson as unknown as Itinerary[];
const localActivities = activitiesJson as unknown as Activity[];
const localEvents = eventsJson as unknown as TravelEvent[];

function slugify(tour: { path?: string; name: string }): string {
  const path = (tour.path ?? "").replace(/\/+$/, "");
  const seg = path.split("/").pop();
  if (seg) return seg;
  return tour.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function fromDb<T>(fn: () => Promise<T>): Promise<T | null> {
  if (!hasDb()) return null;
  try {
    await connectDb();
    return await fn();
  } catch (err) {
    console.error("MongoDB unavailable, falling back to bundled data:", err);
    return null;
  }
}

export async function getTours(): Promise<Tour[]> {
  const db = await fromDb(async () => {
    const { TourModel } = await import("./models");
    const docs = await TourModel.find().lean();
    return docs.map((d) => ({
      ...(JSON.parse(JSON.stringify(d)) as Tour),
      slug: slugify(d as { path?: string; name: string }),
    }));
  });
  return db ?? localTours;
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  const tours = await getTours();
  return tours.find((t) => t.slug === slug);
}

export async function getDestinations(): Promise<Destination[]> {
  const db = await fromDb(async () => {
    const { DestinationModel } = await import("./models");
    const docs = await DestinationModel.find().lean();
    return JSON.parse(JSON.stringify(docs)) as Destination[];
  });
  return db ?? localDestinations;
}

export async function getItineraries(): Promise<Itinerary[]> {
  const db = await fromDb(async () => {
    const { ItineraryModel } = await import("./models");
    const docs = await ItineraryModel.find().lean();
    return JSON.parse(JSON.stringify(docs)) as Itinerary[];
  });
  return db ?? localItineraries;
}

export async function getActivities(): Promise<Activity[]> {
  const db = await fromDb(async () => {
    const { ActivityModel } = await import("./models");
    const docs = await ActivityModel.find().lean();
    return JSON.parse(JSON.stringify(docs)) as Activity[];
  });
  return db ?? localActivities;
}

export async function getEvents(): Promise<TravelEvent[]> {
  const db = await fromDb(async () => {
    const { EventModel } = await import("./models");
    const docs = await EventModel.find().lean();
    return JSON.parse(JSON.stringify(docs)) as TravelEvent[];
  });
  return db ?? localEvents;
}

/* ---------- helpers ---------- */

export function minPrice(tour: Tour): number {
  const amounts = (tour.prices ?? []).map((p) => p.amount);
  return amounts.length ? Math.min(...amounts) : 0;
}

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

export async function getDestinationMap(): Promise<Record<string, string>> {
  const destinations = await getDestinations();
  return Object.fromEntries(destinations.map((d) => [d._id, d.title]));
}

export interface TourDay {
  label: string;
  itinerary?: Itinerary;
  activities: Activity[];
}

export async function getTourDays(tour: Tour): Promise<TourDay[]> {
  const [itineraries, activities] = await Promise.all([
    getItineraries(),
    getActivities(),
  ]);
  const itineraryMap = new Map(itineraries.map((i) => [i._id, i]));
  const activityMap = new Map(activities.map((a) => [a._id, a]));
  return (tour.itineraries ?? []).map((ref) => {
    const itinerary = itineraryMap.get(ref.itinerary);
    const acts = (itinerary?.activities ?? [])
      .map((id) => activityMap.get(id))
      .filter((a): a is Activity => Boolean(a));
    return { label: ref.label, itinerary, activities: acts };
  });
}

export const MEAL_LABELS: Record<number, string> = {
  1: "Breakfast",
  2: "Lunch",
  3: "Dinner",
};

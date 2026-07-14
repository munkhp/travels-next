import toursJson from "@/data/tours.json";
import destinationsJson from "@/data/destinations.json";
import itinerariesJson from "@/data/itineraries.json";
import activitiesJson from "@/data/activities.json";
import eventsJson from "@/data/events.json";
import { fromSanity, sanityFetch } from "@/sanity/client";
import {
  activitiesQuery,
  destinationsQuery,
  eventsQuery,
  itinerariesQuery,
  toursQuery,
} from "@/sanity/queries";
import type { Activity, Destination, Itinerary, Tour, TravelEvent } from "./types";

/**
 * Data access layer.
 * Reads from Sanity when NEXT_PUBLIC_SANITY_PROJECT_ID is set, otherwise
 * serves the bundled JSON snapshot (src/data/*.json). Run
 * `npm run sanity:migrate` once to import the snapshot into Sanity.
 */

const localTours = toursJson as unknown as Tour[];
const localDestinations = destinationsJson as unknown as Destination[];
const localItineraries = itinerariesJson as unknown as Itinerary[];
const localActivities = activitiesJson as unknown as Activity[];
const localEvents = eventsJson as unknown as TravelEvent[];

export async function getTours(): Promise<Tour[]> {
  const docs = await fromSanity(() => sanityFetch<Tour[]>(toursQuery));
  return docs ?? localTours;
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  const tours = await getTours();
  return tours.find((t) => t.slug === slug);
}

export async function getDestinations(): Promise<Destination[]> {
  const docs = await fromSanity(() => sanityFetch<Destination[]>(destinationsQuery));
  return docs ?? localDestinations;
}

export async function getItineraries(): Promise<Itinerary[]> {
  const docs = await fromSanity(() => sanityFetch<Itinerary[]>(itinerariesQuery));
  return docs ?? localItineraries;
}

export async function getActivities(): Promise<Activity[]> {
  const docs = await fromSanity(() => sanityFetch<Activity[]>(activitiesQuery));
  return docs ?? localActivities;
}

export async function getEvents(): Promise<TravelEvent[]> {
  const docs = await fromSanity(() => sanityFetch<TravelEvent[]>(eventsQuery));
  return docs ?? localEvents;
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

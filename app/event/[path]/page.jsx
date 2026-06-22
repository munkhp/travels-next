import EventPage from "../../_components/EventPage";
import apiUrl from "../../../utils/apiUrl";

export const dynamic = "force-dynamic";

async function getEvent(path) {
  const res = await fetch(`${apiUrl}/event/${path}/`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to load event");
  }

  const { data: event } = await res.json();
  return event;
}

async function getOtherEvents(path) {
  const res = await fetch(`${apiUrl}/other-events/${path}/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load other events");
  }

  const { data: otherEvents } = await res.json();
  return otherEvents;
}

export async function generateMetadata({ params }) {
  const { path } = await params;
  const event = await getEvent(path);

  return {
    title: `Travels in Mongolia - ${event.name}`,
    description: event.description,
    openGraph: {
      title: `Travels in Mongolia - ${event.name}`,
      description: event.description,
      url: `https://travelsinmongolia.com/event/${event.path}`,
      images: [event.mediaUrl],
    },
  };
}

export default async function Page({ params }) {
  const { path } = await params;
  const [event, otherEvents] = await Promise.all([
    getEvent(path),
    getOtherEvents(path),
  ]);

  return <EventPage event={event} otherEvents={otherEvents} />;
}

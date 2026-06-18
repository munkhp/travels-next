import TourPage from "../../_components/TourPage";
import apiUrl from "../../../utils/apiUrl";

export const dynamic = "force-dynamic";

async function getTour(slug) {
  const path = Array.isArray(slug) ? slug.join("/") : slug;
  const res = await fetch(`${apiUrl}/tour/${path}/`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to load tour");
  }

  const { data: tour } = await res.json();
  return tour;
}

export async function generateMetadata({ params }) {
  const tour = await getTour(params.slug);

  return {
    title: `Travels in Mongolia - ${tour.name}`,
    description: tour.summary,
    openGraph: {
      title: `Travels in Mongolia - ${tour.name}`,
      description: tour.summary,
      url: `https://travelsinmongolia.com/tour/${tour.path}`,
      images: [tour.mediaUrl],
    },
  };
}

export default async function Page({ params }) {
  const tour = await getTour(params.slug);
  return <TourPage tour={tour} />;
}

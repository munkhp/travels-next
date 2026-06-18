import GroupToursPage from "../_components/GroupToursPage";
import apiUrl from "../../utils/apiUrl";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Travels in Mongolia - Group Tours",
  description:
    "If would like to join other people and travel as a group, then group tours are for you.",
  openGraph: {
    title: "Travels in Mongolia - Group Tours",
    description:
      "If would like to join other people and travel as a group, then group tours are for you.",
    url: "https://travelsinmongolia.com/group-tours",
    images: [
      "https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359920/travels/group-tour-view_tt6cdl.jpg",
    ],
  },
};

async function getDestinationOptions() {
  const res = await fetch(`${apiUrl}/destinations`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to load destinations");
  }
  const { data: destinations } = await res.json();

  return destinations.map((destination) => ({
    value: destination._id,
    label: destination.title,
  }));
}

export default async function Page() {
  const destinationOptions = await getDestinationOptions();
  return <GroupToursPage destinationOptions={destinationOptions} />;
}

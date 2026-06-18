import TravelToolsPage from "../_components/TravelToolsPage";

export const metadata = {
  title: "Travels in Mongolia - Travel Tools",
  description: "All the basics you need before traveling to Mongolia",
  openGraph: {
    title: "Travels in Mongolia - Travel Tools",
    description: "All the basics you need before traveling to Mongolia",
    url: "https://travelsinmongolia.com/travel-tools",
    images: [
      "https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359919/travels/bg-banner-tools_gaz0w1.jpg",
    ],
  },
};

export default function Page() {
  return <TravelToolsPage />;
}

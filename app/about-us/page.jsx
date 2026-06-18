import AboutUsPage from "../_components/AboutUsPage";

export const metadata = {
  title: "Travels in Mongolia - About us",
  description:
    "Travels in Mongolia is a Mongolian tour operator with an 11 years of experience delivering safe and satifactory tours with the help of their responsible and well trained tour guides and drivers.",
  openGraph: {
    title: "Travels in Mongolia - About us",
    description:
      "Travels in Mongolia is a Mongolian tour operator with an 11 years of experience delivering safe and satifactory tours with the help of their responsible and well trained tour guides and drivers.",
    url: "https://travelsinmongolia.com/about-us",
    images: [
      "https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359928/travels/about-us-4_iaptzl.jpg",
    ],
  },
};

export default function Page() {
  return <AboutUsPage />;
}

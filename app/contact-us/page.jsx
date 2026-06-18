import ContactUsPage from "../_components/ContactUsPage";

export const metadata = {
  title: "Travels in Mongolia - Contact us",
  description:
    "If you are planning to travel to Mongolia and have lots of questions, feel free to contact one of our tour experts!",
  openGraph: {
    title: "Travels in Mongolia - Contact us",
    description:
      "If you are planning to travel to Mongolia and have lots of questions, feel free to contact one of our tour experts!",
    url: "https://travelsinmongolia.com/contact-us",
    images: [
      "https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359936/travels/bg-banner-contact-form_lpwmf0.jpg",
    ],
  },
};

export default function Page() {
  return <ContactUsPage />;
}

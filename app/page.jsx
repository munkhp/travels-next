import HomePage from "./_components/HomePage";

export const metadata = {
  title: "Travels in Mongolia - One of the leading tour operators in Mongolia",
  description:
    "Travels in Mongolia is a local tour operator which specializes in providing unforgettable Mongolian tour experience. We aim to develop the sustainable ecotourism, deliver overall satisfaction to our customers, fulfill their requirements & needs with our professional team and introduce Mongolian culture, history and wild nature to foreigners.",
  alternates: {
    canonical: "https://travelsinmongolia.com",
  },
  openGraph: {
    title: "Travels in Mongolia - One of the leading tour operators in Mongolia",
    description:
      "Travels in Mongolia is a local tour operator which specializes in providing unforgettable Mongolian tour experience. We aim to develop the sustainable ecotourism, deliver overall satisfaction to our customers, fulfill their requirements & needs with our professional team and introduce Mongolian culture, history and wild nature to foreigners.",
    url: "https://travelsinmongolia.com",
    siteName: "Travels in Mongolia",
    type: "website",
    images: [
      "https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359926/travels/homepage-default-banner-old_mqhjtd.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travels in Mongolia - One of the leading tour operators in Mongolia",
    description:
      "Travels in Mongolia is a local tour operator which specializes in providing unforgettable Mongolian tour experience. We aim to develop the sustainable ecotourism, deliver overall satisfaction to our customers, fulfill their requirements & needs with our professional team and introduce Mongolian culture, history and wild nature to foreigners.",
    images: [
      "https://res.cloudinary.com/dmyps1mg3/image/upload/f_auto/v1669359926/travels/homepage-default-banner-old_mqhjtd.jpg",
    ],
  },
};

export default function Page() {
  return <HomePage />;
}

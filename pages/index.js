import {
  HomeSlider,
  WhoWeAre,
  TourSection,
  Video,
  Testimonials,
  Events,
} from "../components/Home";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
const Home = ({ tours, events }) => {
  return (
    <div>
      <HomeSlider />
      <WhoWeAre />
      <TourSection tours={tours} />
      <Video />
      <Events events={events} />
      <Testimonials />
    </div>
  );
};

export async function getServerSideProps(context) {
  const url1 = `${apiUrl}/all-tours`;
  const res1 = await axios.get(url1);
  const { data: tours } = await res1.data;
  const url2 = `${apiUrl}/events`;
  const res2 = await axios.get(url2);
  const { data: events } = await res2.data;
  return { props: { tours, events } };
}
export default Home;

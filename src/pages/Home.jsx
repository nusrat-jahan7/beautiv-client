import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Faq from "../components/Faq";
import HotDeals from "../components/HotDeals";

const Home = () => {
  return (
    <div className="bg-pink-50">
      <Banner/>
      <Brands/>
      <HotDeals/>
      <Faq/>
    </div>
  );
};

export default Home;

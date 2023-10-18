import Banner from "../components/Banner";
import Brands from "../components/Brands";
import HotDeals from "../components/HotDeals";

const Home = () => {
  return (
    <div className="bg-pink-50">
      <Banner/>
      <Brands/>
      <HotDeals/>
    </div>
  );
};

export default Home;

import deals1 from "../../public/deals-2.jpg";
import deals2 from "../../public/deals-1.jpg";
import deals3 from "../../public/deals-3.jpg";
import deals4 from "../../public/deals-4.jpg";
const HotDeals = () => {
  return (
    <div>
        <div>
            <h1 className="text-center text-4xl font-semibold text-pink-700 py-12">Hot Deals</h1>
        </div>
      <div className="grid max-w-screen-xl gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto cursor-pointer">
        <img
          className="object-cover hover:shadow-xl hover:shadow-pink-700 w-full h-56 rounded shadow-lg"
          src={deals1}
          alt=""
        />

        <img
          className="object-cover hover:shadow-xl hover:shadow-pink-700 w-full h-56 rounded shadow-lg"
          src={deals2}
          alt=""
        />

        <img
          className="object-cover hover:shadow-xl hover:shadow-pink-700 w-full h-56 rounded shadow-lg"
          src={deals3}
          alt=""
        />

        <img
          className="object-cover hover:shadow-xl hover:shadow-pink-700 w-full h-56 rounded shadow-lg"
          src={deals4}
          alt=""
        />
      </div>
    </div>
  );
};

export default HotDeals;

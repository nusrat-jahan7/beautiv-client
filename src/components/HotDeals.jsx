import deals1 from "../../public/deals-2.jpg";
import deals2 from "../../public/deals-1.jpg";
import deals3 from "../../public/deals-3.jpg";
import deals4 from "../../public/deals-4.jpg";
const HotDeals = () => {
  return (
    <div className="pt-16">
      <div>
        <h1 className="text-center text-4xl font-semibold text-pink-700 lg:pt-10 pb-6">
          Hot Deals
        </h1>
        <p className="lg:block hidden mt-4 mb-12 w-6/12 mx-auto text-gray-500 text-center">
        Welcome to our Hot Deals section, where beauty meets unbeatable savings! Dive into a treasure trove of exclusive offers and limited-time discounts on your favorite beauty products.
        </p>
      </div>
      <div className="grid max-w-screen-xl gap-8 row-gap-5 md:mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto cursor-pointer p-3">
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

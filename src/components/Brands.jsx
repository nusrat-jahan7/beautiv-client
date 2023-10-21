import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://beautiv-server.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setBrands(data?.data);
      });
  }, []);

  return (
    <div className="pt-10">
      <h1 className="text-center text-2xl md:text-4xl font-semibold text-pink-700 lg:pt-12 pb-6">
        Our Top Brands
      </h1>
      <p className="hidden lg:block mt-4 mb-12 w-6/12 mx-auto text-gray-500 text-center">
      Explore a curated selection of the world's leading beauty brands at our store. From iconic classics to cutting-edge innovations, our Brands section is a beauty enthusiast's paradise. 
          </p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 container mx-auto p-3">
          {brands?.map((brand) => (
            <div className="flex justify-center" key={brand?._id}>
              <Link to={`/products/${brand?.slug}`} className="hover:cursor-pointer hover:scale-105 duration-100 border shadow-lg rounded-xl">
                <img className="rounded-t-xl" src={brand?.logo} alt="" />
                <h3 className="text-center md:text-xl font-semibold text-pink-700 py-3">
                  {brand?.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Brands;

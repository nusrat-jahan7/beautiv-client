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
      <h1 className="text-center text-4xl font-semibold text-pink-700 py-12">
        Brands
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 container mx-auto">
          {brands?.map((brand) => (
            <div className="flex justify-center" key={brand?._id}>
              <Link to={`/products/${brand?.slug}`} className="hover:cursor-pointer hover:scale-105 duration-100 border shadow-lg rounded-xl">
                <img className="rounded-t-xl" src={brand?.logo} alt="" />
                <h3 className="text-center text-xl font-semibold text-pink-700 py-3">
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

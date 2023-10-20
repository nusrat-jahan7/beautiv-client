import { Link, useLoaderData } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import Advertisement from "../components/Advertisement";

const Product = () => {
  const items = useLoaderData();
  const products = items?.data;

  //   const singleProduct = products.map(product => console.log(product))

  return (
    <div className="bg-pink-100">
      <Advertisement />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5 py-16 p-4">
        {products.map((product) => (
          <div
            key={product?._id}
            className="card relative bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-full h-72"
                src={product?.image}
                alt="Cosmetics"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title line-clamp-1">{product?.name}</h2>
              <div className="flex justify-between items-center">
                <p className=" text-gray-400">{product?.brand_name}</p>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-pink-400 text-right">
                    {product?.rating}
                  </p>{" "}
                  <BsStarFill className="text-amber-400"></BsStarFill>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="badge absolute top-3 right-3 bg-pink-600 text-white">
                    {product?.type}
                  </p>
                </div>
                <p className="text-2xl font-semibold text-pink-400 ">
                  ${product?.price}
                </p>
              </div>
              <Link to={`/products/${product?.brand_slug}/${product?._id}`} className="card-actions pt-4 justify-center">
                <div className="btn btn-sm hover:bg-pink-700 hover:text-white badge-outline text-pink-700 border-pink-700">
                  Update
                </div>
                <Link
                  to={`/products/${product?.brand_slug}/${product?._id}`}
                  className="btn btn-sm border border-purple-700 bg-purple-700 text-white hover:bg-pink-700 badge-outline"
                >
                  Details
                </Link>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

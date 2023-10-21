import { Link, useLoaderData } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import Advertisement from "../components/Advertisement";

function formatCompanyName(brandName) {
  const words = brandName.split("_");

  const formattedName = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName;
}

const Product = () => {
  const items = useLoaderData();
  const products = items?.data;

  return (
    <div>
      <Advertisement />
      {products.length === 0 ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-700 my-20">
            SORRY !! No Product Available!
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5 py-16 p-4">
          {products.map((product) => (
            <div
              key={product?._id}
              className="card relative bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="w-full h-72 object-cover"
                  src={product?.image}
                  alt="Cosmetics"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title line-clamp-1">{product?.name}</h2>
                <div className="flex justify-between items-center">
                  <p className=" text-gray-400">
                    {formatCompanyName(product?.brand_slug)}
                  </p>
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
                <div className="card-actions pt-4 justify-center">
                  <Link
                    to={`/edit-products/${product?.brand_slug}/${product?._id}`}
                    className="btn btn-sm hover:bg-pink-700 hover:text-white badge-outline text-pink-700 border-pink-700"
                  >
                    Update
                  </Link>
                  <Link
                    to={`/products/${product?.brand_slug}/${product?._id}`}
                    className="btn btn-sm border border-purple-700 bg-purple-700 text-white hover:bg-pink-700 badge-outline"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;

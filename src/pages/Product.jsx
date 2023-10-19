import { Link, useLoaderData } from "react-router-dom";
import { BsStarHalf } from "react-icons/bs";
import Advertisement from "../components/Advertisement";

const Product = () => {
  const items = useLoaderData();
  const products = items?.data;

  //   const singleProduct = products.map(product => console.log(product))

  return (
    <div className="bg-pink-100">
        <Advertisement/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5 py-16 p-4">
        {products.map((product) => (
          <div key={product?._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-72"
                src={product?.image}
                alt="Cosmetics"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title line-clamp-1">{product?.name}</h2>
              <div className="flex justify-between">
                <div>
                  <p className="badge bg-pink-600 text-white">
                    {product?.type}
                  </p>
                </div>
                <p className="text-xl font-semibold text-pink-400 text-right">
                  ${product?.price}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-400">
                  {product?.brand_name}
                </p>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-pink-400 text-right">
                    {product?.rating}
                  </p>
                  <p className="text-amber-500 text-lg">
                    <BsStarHalf></BsStarHalf>
                  </p>
                </div>
              </div>
              <div className="card-actions pt-4 justify-center">
                <div className="btn btn-sm bg-purple-700 text-white hover:bg-pink-700 badge-outline">
                  Update
                </div>
                <Link to={`/product-details/${product?._id}`} className="btn btn-sm bg-purple-700 text-white hover:bg-pink-700 badge-outline">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";

const ProductDetails = () => {
  const { data } = useLoaderData();

  const { name, image, type, price, rating, description } = data;

  return (
    <div>
      <div className="bg-pink-100">
        <div className="container mx-auto py-10 lg:flex items-center gap-20">
          <img className="relative w-fit h-96" src={image} alt="" />
          <div className="p-6">
            <div className="space-x-4">
              <button className="absolute top-50 left-52 btn btn-sm hover:bg-purple-700 border-0 bg-pink-700 text-white">
                {type}
              </button> 
            </div>
            <h1 className="text-3xl font-semibold text-gray-700 pt-2">
              {name}
            </h1>
            <p className="text-2xl pt-2 font-semibold text-pink-700">
                $ {price}
              </p>
            <Rating
            className="pt-3"
              readonly
              initialRating={rating}
              emptySymbol={
                  <AiOutlineStar className="text-yellow-500 text-2xl" />
              }
              fullSymbol={
                  <AiTwotoneStar className="text-yellow-500 text-2xl" />
              }
              fractions={2}
            />
            <p className="text-lg text-gray-600 pt-3">
              {description}
            </p>
            <button className="btn bg-purple-700 text-white mt-3 hover:bg-pink-700">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

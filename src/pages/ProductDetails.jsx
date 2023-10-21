/* eslint-disable react-hooks/rules-of-hooks */
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const { name, image, type, price, rating, description } = data;

  const { user } = useContext(AuthContext);

  const handleAddToCart = (productData) => {
    const bodyData = {
      email: user.email,
      product: productData,
    };
    fetch("https://beautiv-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
      });
  };

  return (
    <div>
      <div>
        <div className="container mx-auto py-10 lg:flex items-center gap-20">
          <img className="w-fit h-96" src={image} alt="" />
          <div className="p-6">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold text-pink-700">{name}</h1>
              <p className="badge font-medium text-pink-700">{type}</p>
            </div>
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
            <h2 className="text-2xl font-semibold text-pink-700">$ {price}</h2>
            <p className="text-lg text-gray-600 pt-3">
              {description}
            </p>
            <button
              onClick={() => handleAddToCart(data)}
              className="btn bg-purple-700 text-white mt-3 hover:bg-pink-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

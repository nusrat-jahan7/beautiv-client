import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";

const ProductDetails = () => {
  const { data } = useLoaderData();

  const { name, image, type, price, rating } = data;

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
              Cosmetics are constituted mixtures of chemical compounds derived
              from either natural sources, or synthetically created
              ones.Cosmetics have various purposes. Those designed for personal
              care and skin care can be used to cleanse or protect the body or
              skin. Cosmetics designed to enhance or alter ones appearance
              (makeup) can be used to conceal blemishes, enhance ones natural
              features (such as the eyebrows and eyelashes), add color to a
              persons face, or change the appearance of the face entirely to
              resemble a different person, creature or object.
            </p>
            <button className="btn bg-purple-700 text-white mt-3 hover:bg-pink-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import Rating from "react-rating";
import img from "../../public/concealer.jpeg";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

const Cart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
      <div className="relative shadow-lg bg-white rounded-xl p-4 mb-4 flex items-end justify-between">
        <div className="flex items-center">
          <img
            src={img}
            alt="Product"
            className="w-48 h-48 object-cover mr-4"
          />
          <div className="pl-4 flex items-start">
            <div>
              <h2 className="text-lg font-semibold">
                Radiant Creamy Concealer
              </h2>
              <p className="text-gray-500 text-2xl pt-3">$ 29.99</p>
              <p className="text-gray-500 text-2xl py-3">
                <Rating
                  readonly
                  //   initialRating={rating}
                  emptySymbol={
                    <AiOutlineStar className="text-yellow-500 text-2xl" />
                  }
                  fullSymbol={
                    <AiTwotoneStar className="text-yellow-500 text-2xl" />
                  }
                  fractions={2}
                />
              </p>
              <button className="badge hover:bg-purple-700 bg-pink-700 text-white">
                Concealer
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-3 mt-2 mr-2">
          <button className="text-2xl text-pink-700">
            <FiDelete></FiDelete>
          </button>
        </div>
        <div className="flex items-center">
          <div className="btn-group">
            <button className="btn text-xl text-white bg-purple-700 hover:bg-pink-600 border-0">-</button>
            <button className="btn text-xl text-white bg-purple-700 hover:bg-purple-700 border-0">1</button>
            <button className="btn text-xl text-white bg-purple-700 hover:bg-pink-600 border-0">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

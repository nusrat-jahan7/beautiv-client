/* eslint-disable react/prop-types */
import Rating from "react-rating";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import toast from "react-hot-toast";

const Cart = ({ cart, refetch }) => {
  const handleDelete = (id) => {
    fetch(`https://beautiv-server.vercel.app/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(data.message);
      });
  };

  return (
    <div className="p-3">
      <div className="relative shadow-lg bg-white rounded-xl p-2 lg:p-4 mb-4 flex items-end justify-between">
        <div className="flex items-center">
          <img
            src={cart?.product?.image}
            alt="Product"
            className="lg:w-48 w-36 h-36 lg:h-48 object-cover mr-4"
          />
          <div className="pl-4 flex items-start">
            <div>
              <h2 className="text-lg font-semibold line-clamp-1">
                {cart?.product?.name}
              </h2>
              <p className="text-gray-500 lg:text-2xl lg:pt-3">
                <Rating
                  readonly
                  initialRating={cart?.product?.rating}
                  emptySymbol={
                    <AiOutlineStar className="text-yellow-500 text-xs lg:text-2xl" />
                  }
                  fullSymbol={
                    <AiTwotoneStar className="text-yellow-500 text-xs lg:text-2xl" />
                  }
                  fractions={2}
                />
              </p>
              <p className="text-pink-700 lg:text-2xl font-bold pb-3">
                $ {cart?.product?.price}
              </p>
              <button className="badge hidden lg:block hover:bg-purple-700 bg-pink-700 text-white">
                {cart?.product?.type}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-3 mt-2 mr-2">
          <button
            onClick={() => handleDelete(cart?._id)}
            className="text-2xl text-pink-700"
          >
            <FiDelete></FiDelete>
          </button>
        </div>
        <div className="flex items-center">
          <div className="btn-group">
            <button className="btn btn-sm lg:text-xl text-white bg-purple-700 hover:bg-pink-600 border-0">
              -
            </button>
            <button className="btn btn-sm lg:text-xl text-white bg-purple-700 hover:bg-purple-700 border-0">
              {cart?.product?.quantity}
            </button>
            <button className="btn btn-sm lg:text-xl text-white bg-purple-700 hover:bg-pink-600 border-0">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

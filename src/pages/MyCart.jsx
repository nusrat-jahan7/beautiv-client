import { useQuery } from "@tanstack/react-query";
import Cart from "../components/Cart";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../components/Loader";
import { useContext } from "react";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const loadCartData = async () => {
    const response = await fetch(
      `https://beautiv-server.vercel.app/cart/${user?.email}`
    );
    return response.json();
  };

  const {
    data: cartData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getCart"],
    queryFn: loadCartData,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : cartData?.data?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-5 mt-5">
          {cartData?.data.map((cart) => (
            <Cart key={cart?._id} cart={cart} refetch={refetch} />
          ))}
        </div>
      ) : (
        <div className="text-center min-h-screen">
          <h1 className="text-4xl font-bold text-pink-700 mt-20">
            Your Cart is Empty
          </h1>
        </div>
      )}
    </>
  );
};

export default MyCart;

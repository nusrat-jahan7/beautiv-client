import { Link } from "react-router-dom";
import img from "../../public/404-page.jpg";

const ErrorPage = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="text-center absolute -bottom-36 mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">OOPPS!! We Can't Find The Page</h1>
        <Link to="/" className="btn bg-purple-700 hover:bg-pink-700 text-white">
          Back To Home
        </Link>
      </div>
      <img className="w-7/12 mx-auto" src={img} alt="" />
    </div>
  );
};

export default ErrorPage;

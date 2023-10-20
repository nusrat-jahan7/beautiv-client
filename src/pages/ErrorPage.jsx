import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-600 to-purple-600">
            <div>
            <h1 className="text-9xl text-white font-bold text-center border-b pb-2">404</h1>
            <p className="text-5xl text-white font-semibold text-center pt-6">SORRY !!</p>
            <p className="text-3xl text-white text-center pt-6">The Page You Are Looking For Was Not Found</p>
            <div className="flex justify-center mt-10">
            <Link to="/" className="btn bg-purple-800 hover:bg-pink-800 border-4 text-white border-pink-500 hover:border-pink-500">Back To Home</Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;
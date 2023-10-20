import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
            <h1 className="text-6xl text-center">404 Page not found</h1>
            <div className="flex justify-center mt-10">
            <Link to="/" className="btn bg-cyan-700 hover:bg-cyan-900 text-white">Back To Home</Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;
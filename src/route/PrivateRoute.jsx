/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <span className="loading loading-dots loading-lg text-cyan-700"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return children;
};

export default PrivateRoute;

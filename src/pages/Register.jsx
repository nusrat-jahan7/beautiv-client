import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { formatFirebaseAuthErrorMessage } from "../helpers";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signUp, loading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordErrors, setPasswordErrors] = useState({
    length: false,
    capital: false,
    specialCharacter: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Password validation
    if (name === "password") {
      const errors = {
        length: value.length < 6,
        capital: !/[A-Z]/.test(value),
        specialCharacter: !/[!@#$%^&*(),.?":{}|<>]/.test(value),
      };

      setPasswordErrors(errors);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    if (
      passwordErrors.length ||
      passwordErrors.capital ||
      passwordErrors.specialCharacter
    ) {
      toast.error("Invalid password. Please check the password requirements.");
      return;
    }

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      })
      .catch((error) => {
        const errorMessage = formatFirebaseAuthErrorMessage(error);
        toast.error(errorMessage);
      });

    // Reset the form
    setFormData({
      email: "",
      password: "",
    });
    setPasswordErrors({
      length: false,
      capital: false,
      specialCharacter: false,
    });
  };

  return (
    <div className="bg-gradient-to-r from-pink-400 to-purple-400 py-20 ">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="px-6 py-4">
          <div >
            <h1 className="text-lg text-center text-pink-600">Do'nt Have An Account?</h1>
          </div>

          <h3 className="mt-3 text-4xl font-bold text-pink-600 text-center">
            Register
          </h3>

          <form onSubmit={handleRegister}>
            <div className="w-full mt-4">
              <h3 className="text-gray-600">Email</h3>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full mt-4">
              <h3 className="text-gray-600">Password</h3>
              <input
                className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 ${
                  passwordErrors.length ||
                  passwordErrors.capital ||
                  passwordErrors.specialCharacter
                    ? "border-red-500"
                    : ""
                }`}
                type="password"
                name="password"
                id="password"
                placeholder="•••••••••"
                value={formData.password}
                onChange={handleInputChange}
              />
              <ul className="list-disc list-inside mt-3 space-y-2">
                {passwordErrors.length && (
                  <li className="text-red-500 text-xs">
                    Password must be at least 6 characters.
                  </li>
                )}
                {passwordErrors.capital && (
                  <li className="text-red-500 text-xs">
                    Include at least one capital letter.
                  </li>
                )}
                {passwordErrors.specialCharacter && (
                  <li className="text-red-500 text-xs">
                    Include at least one special character.
                  </li>
                )}
              </ul>
            </div>

            <div className="flex items-center justify-end mt-4">
            <button
            disabled={loading}
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-700 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 disabled:bg-purple-700/50"
            >
              {
                loading ? "Loading" : "Register"
              }
              
            </button>
            </div>
          </form>
          <p className="mt-4 text-sm font-light text-center text-gray-500">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-pink-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

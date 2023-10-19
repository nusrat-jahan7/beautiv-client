import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/add-product",
            element: <AddProduct/>,
        },
        {
            path: "/my-cart",
            element: <MyCart/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/products/:slug",
            loader: ({params}) => fetch(`https://beautiv-server.vercel.app/products/${params.slug}`),
            element: <Product/>,
        },
        {
            path: "/product-details/:_id",
            loader: ({params}) => fetch(`https://beautiv-server.vercel.app/products/${params._id}`),
            element: <ProductDetails/>
        }
    ]
  },
]);

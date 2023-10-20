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
import UpdateProduct from "../pages/UpdateProduct";

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
            path: "/products/:slug/:id",
            loader: ({params}) => fetch(`https://beautiv-server.vercel.app/products/${params.slug}/${params.id}`),
            element: <ProductDetails/>
        },
        {
            path: "/products/:slug/:id",
            loader: ({params}) => fetch(`https://beautiv-server.vercel.app/products/${params.slug}/${params.id}`),
            element: <UpdateProduct/>
        }
    ]
  },
]);

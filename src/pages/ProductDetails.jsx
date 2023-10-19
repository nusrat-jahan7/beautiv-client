import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const getItems = useLoaderData();
    // const items = getItems.data;
    console.log(getItems);
    // const item = window.location.pathname.split("/");
    // console.log(item);

    // const itemId = item[item?.length-1];
    // console.log(itemId);

    // const currentItem = getItems?.data?.find((item) => item?._id === itemId);
    // console.log(currentItem);

    

    return (
        <div>
            <h1>This is Product Details Page</h1>
        </div>
    );
};

export default ProductDetails;
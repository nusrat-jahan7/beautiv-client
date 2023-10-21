import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const { data } = useLoaderData();

  const { _id, name, image, brand_slug, type, price, rating } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const brand_slug = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const data = {
      name,
      image,
      brand_slug,
      type,
      price,
      rating,
      description,
    };

    fetch(`https://beautiv-server.vercel.app/products/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data?.message);
      });
  };
  return (
    <div>
      <section className="p-6">
        <h1 className="text-center text-xl lg:text-4xl lg:border-b-2 lg:border-pink-700 lg:w-96 mx-auto font-semibold text-pink-700 py-3">
          Update Product
        </h1>
        <form
          onSubmit={handleSubmit}
          action=""
          className="container flex flex-col mx-auto mt-4 space-y-12"
        >
          <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-xl">
            <div className="grid grid-cols-6 gap-4 w-full mx-auto col-span-full ">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="name"
                  className="lg:text-lg lg:font-semibold text-pink-700"
                >
                  Name
                </label>
                <input
                  defaultValue={name}
                  required
                  id=""
                  name="name"
                  type="text"
                  placeholder="Ex- Serum Foundation"
                  className="w-full my-3 rounded-md p-3"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="website"
                  className="lg:text-lg lg:font-semibold text-pink-700"
                >
                  Image
                </label>
                <input
                  defaultValue={image}
                  required
                  id=""
                  name="image"
                  type="text"
                  placeholder="https://"
                  className="w-full p-3 my-3 rounded-md"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="lg:text-lg lg:font-semibold text-pink-700"
                >
                  Select Brand
                </label>
                <select
                  defaultValue={brand_slug}
                  required
                  name="brand"
                  className="select my-3 w-full rounded-md"
                >
                  <option value={""} disabled selected>
                    Select a brand
                  </option>
                  <option value={"luxe_beauty"}>Luxe Beauty</option>
                  <option value={"loreal"}>{"L'Oreal"}</option>
                  <option value={"estee_lauder"}>Estée Lauder</option>
                  <option value={"mac_cosmetics"}>MAC Cosmetics</option>
                  <option value={"maybelline"}>Maybelline</option>
                  <option value={"nars_cosmetics"}>NARS Cosmetics</option>
                  <option value={"revlon"}>Revlon</option>
                  <option value={"clinique"}>Clinique</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="type"
                  className="lg:text-lg lg:font-semibold text-pink-700"
                >
                  Type of Makeup
                </label>
                <select
                  defaultValue={type}
                  required
                  name="type"
                  className="select my-3 w-full rounded-md"
                >
                  <option value={""} disabled selected>
                    Pick your makeup type
                  </option>
                  <option>Foundation</option>
                  <option>Mascara</option>
                  <option>Concealer</option>
                  <option>Lipstick</option>
                  <option>Blush</option>
                  <option>Serum</option>
                  <option>Highlighter</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="lg:text-lg lg:font-semibold text-pink-700">
                  Price
                </label>
                <input
                  defaultValue={price}
                  required
                  id=""
                  name="price"
                  type="text"
                  placeholder="$"
                  className="w-full p-3 my-3 rounded-md"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="lg:text-lg lg:font-semibold text-pink-700">
                  Rating
                </label>
                <input
                  defaultValue={rating}
                  required
                  id=""
                  name="rating"
                  type="text"
                  placeholder="5"
                  className="w-full p-3 my-3 rounded-md"
                />
              </div>

              <div className="col-span-full">
                <label className="lg:text-lg lg:font-semibold text-pink-700">
                  Short Description
                </label>
                <input
                  defaultValue={data?.description}
                  id=""
                  name="description"
                  type="text"
                  placeholder=""
                  className="w-full p-3 my-3 py-6 rounded-md-pink-700"
                />
              </div>
            </div>
            <button
              type="submit"
              className="col-span-full lg:w-80 mx-auto btn bg-purple-700 text-white hover:bg-pink-700"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateProduct;

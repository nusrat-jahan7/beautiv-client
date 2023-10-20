const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const data = {
      name,
      image,
      brandName,
      type,
      price,
      rating,
      description,
    };

    fetch("https://beautiv-server.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
  };

  return (
    <div>
      <section className="p-6 bg-pink-100">
        <h1 className="text-center text-4xl border-b-2 border-pink-700 w-96 mx-auto font-semibold text-pink-700 py-3">
          Add Makeup Products
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
                  htmlFor="firstname"
                  className="lg:text-lg lg:font-semibold text-pink-700"
                >
                  Name
                </label>
                <input
                  id=""
                  name="name"
                  type="text"
                  placeholder="Ex- Serum Foundation"
                  className="w-full my-3 rounded-md p-3 focus:ring"
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
                  id=""
                  name="image"
                  type="text"
                  placeholder="https://"
                  className="w-full p-3 my-3 rounded-md focus:ring"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="city"
                  className="lg:text-lg lg:font-semibold text-pink-700"
                >
                  Brand Name
                </label>
                <input
                  id=""
                  name="brandName"
                  type="text"
                  placeholder="ex- Mac Cosmetics"
                  className="w-full p-3 my-3 rounded-md focus:ring"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="state"
                  className="lg:text-lg lg:font-semibold text-pink-700"
                >
                  Type of Makeup
                </label>
                <select
                  name="type"
                  className="select my-3 w-full rounded-md focus:ring"
                >
                  <option disabled selected>
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
                  id=""
                  name="price"
                  type="text"
                  placeholder="$"
                  className="w-full p-3 my-3 rounded-md focus:ring"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="lg:text-lg lg:font-semibold text-pink-700">
                  Rating
                </label>
                <input
                  id=""
                  name="rating"
                  type="text"
                  placeholder="5"
                  className="w-full p-3 my-3 rounded-md focus:ring"
                />
              </div>

              <div className="col-span-full">
                <label className="lg:text-lg lg:font-semibold text-pink-700">
                  Short Description
                </label>
                <input
                  id=""
                  name="description"
                  type="text"
                  placeholder=""
                  className="w-full p-3 my-3 py-6 rounded-md focus:ring-pink-700"
                />
              </div>
            </div>
            <button
              type="submit"
              className="col-span-full w-80 mx-auto btn bg-purple-700 text-white hover:bg-pink-700"
            >
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;

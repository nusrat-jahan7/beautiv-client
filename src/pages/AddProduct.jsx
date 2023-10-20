const AddProduct = () => {
  return (
    <section className="p-6 bg-pink-100">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-xl">
          <div className="grid grid-cols-6 gap-4 w-full mx-auto col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="firstname"
                className="lg:text-lg lg:font-semibold text-pink-700"
              >
                Name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="Ex- Serum Foundation"
                className="w-full my-3 rounded-md p-3 focus:ring"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="lg:text-lg lg:font-semibold text-pink-700">
                Image
              </label>
              <input
                id="website"
                type="text"
                placeholder="https://"
                className="w-full p-3 my-3 rounded-md focus:ring"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="city" className="lg:text-lg lg:font-semibold text-pink-700">
                Brand Name
              </label>
              <input
                id="city"
                type="text"
                placeholder="ex- Mac Cosmetics"
                className="w-full p-3 my-3 rounded-md focus:ring"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="state" className="lg:text-lg lg:font-semibold text-pink-700">
                Type of Makeup
              </label>
              <select className="select my-3 w-full rounded-md focus:ring">
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
              <label htmlFor="zip" className="lg:text-lg lg:font-semibold text-pink-700">
                Price
              </label>
              <input
                id="zip"
                type="text"
                placeholder="$"
                className="w-full p-3 my-3 rounded-md focus:ring"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="zip" className="lg:text-lg lg:font-semibold text-pink-700">
                Rating
              </label>
              <input
                id="zip"
                type="text"
                placeholder="5"
                className="w-full p-3 my-3 rounded-md focus:ring"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="lg:text-lg lg:font-semibold text-pink-700">
                Short Description
              </label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="w-full p-3 my-3 py-6 rounded-md focus:ring-pink-700"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddProduct;

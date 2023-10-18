import bannerImg from "/banner.jpg";

const Banner = () => {
  return (
    <div
      className="w-full bg-center bg-cover min-h-screen"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className=" text-center">
        <div className="max-w-2xl pt-10 md:pt-5 lg:pt-52 lg:pl-32 ">
          <div className="space-y-2">
            <h1 className="text-3xl text-pink-600 ">EXCLUSIVE</h1>
            <h1 className="md::pb-3 text-4xl md:text-7xl font-bold md:border-b-2 border-pink-700  text-pink-600">
              COSMETICS
            </h1>
            <h1 className="pt-2 lg:tracking-widest text-xl lg:text-3xl text-pink-600 ">
              KEEP YOURSELF BEAUTIFUL
            </h1>
          </div>

          <div className="md:mt-5 md:flex text-pink-600 items-center justify-center space-y-3 md:gap-4 md:border-2 md:border-pink-700 py-4 rounded-xl w-4/5 mx-auto">
            <p className="text-2xl font-semibold">
              Discount <br /> Up to
            </p>
            <p className="text-5xl font-bold">50%</p>
            <button className="btn bg-pink-600 border-none text-white">
              Cash On Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

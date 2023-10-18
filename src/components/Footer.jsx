import {
  FaFacebookF,
  FaFacebookMessenger,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import img from "../../public/payment-logo.png"
const Footer = () => {
  return (
    <div className="p-8 bg-purple-700">
      <footer className="footer p-10 text-white container mx-auto">
        <nav>
          <header className="text-lg font-semibold border-b w-28 text-white">
            About
          </header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Refund & Returns</a>
        </nav>
        <nav>
          <header className="text-lg font-semibold border-b w-32 text-white">
            Useful Links
          </header>
          <a className="link link-hover">Become a Reseller</a>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Carrer</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header className="text-lg font-semibold border-b w-32 text-white">
            Categories
          </header>
          <a className="link link-hover">Skin Care</a>
          <a className="link link-hover">Makeups</a>
          <a className="link link-hover">Hair</a>
          <a className="link link-hover">Men</a>
          <a className="link link-hover">Baby & Mom</a>
        </nav>
        <nav>
          <header className="text-lg font-semibold border-b w-32">
            Our Outlets
          </header>
          <p className="font-semibold">Bashundhara Branch</p>
          <p className="pb-3">
            Shop-38, Level-04, Block-D, <br /> Bashundhara City Shopping Mall
          </p>
          <div className="grid grid-cols-2 md:grid-flow-col gap-4 text-2xl text-white">
            <a className="w-full rounded-full border-2 border-pink-600 p-2 hover:bg-pink-600 cursor-pointer">
              <FaFacebookF></FaFacebookF>
            </a>
            <a className="w-full rounded-full border-2 border-pink-600 p-2 hover:bg-pink-600 cursor-pointer">
              <FaFacebookMessenger></FaFacebookMessenger>
            </a>
            <a className="w-full rounded-full border-2 border-pink-600 p-2 hover:bg-pink-600 cursor-pointer">
              <FaInstagram></FaInstagram>
            </a>
            <a className="w-full rounded-full border-2 border-pink-600 p-2 hover:bg-pink-600 cursor-pointer">
              <FaPinterestP></FaPinterestP>
            </a>
          </div>
        </nav>
      </footer>
         <div className="text-white lg:flex justify-between items-center container mx-auto pt-10 pl-9">
         <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
         <img className="lg:pr-36" src={img} alt="" />
         </div>
    </div>
    
  );
};

export default Footer;

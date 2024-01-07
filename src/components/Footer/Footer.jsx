import {
  FaArrowRight,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import footerImage from "../../assets/Image2.png";

export default function Footer() {
  return (
    <div className="bg-primary flex pb-20 px-5 md:px-10 xl:px-0">
      <div className="flex-1 lg:pl-[22rem] mt-[5rem]">
        <div className="bg-white lg:w-[45rem] px-1 rounded-xl flex items-center justify-between">
          <input
            className="outline-none font-medium px-6 md:px-3 py-5 md:py-3 rounded-xl"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="flex gap-2 items-center md:bg-secondary rounded-xl px-5 py-2 font-medium text-secondary md:text-white">
            Subscribe <FaArrowRight />
          </button>
        </div>
        <div className="gap-3 items-center flex md:hidden mt-10 justify-center">
          <FaGoogle
            size={50}
            className="px-3 rounded-full bg-secondary text-white"
          />
          <FaTwitter
            size={50}
            className="px-3 rounded-full bg-secondary text-white"
          />
          <FaInstagram
            size={50}
            className="px-3 rounded-full bg-secondary text-white"
          />
        </div>
        <div className=" mt-20 lg:mt-32">
          <h2 className="text-black text-center lg:text-left font-secondary text-4xl font-black">
            pti<span className="text-secondary">.</span>
          </h2>
          <div className="flex flex-row md:flex-col lg:flex-row items-center justify-center mt-5 lg:mt-0 lg:justify-between">
            <p className="text-center md:text-left font-bold">
              Copyright© Tripp. All Right Reserved
            </p>
            <div className="hidden md:block mt-5 lg:mt-0">
              <div className="flex gap-5 items-center">
                <FaGoogle
                  size={40}
                  className="px-3 rounded-full bg-gray-200 text-secondary"
                />
                <FaTwitter
                  size={40}
                  className="px-3 rounded-full bg-gray-200 text-secondary"
                />
                <FaInstagram
                  size={40}
                  className="px-3 rounded-full bg-gray-200 text-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        <img src={footerImage} alt="" />
      </div>
    </div>
  );
}

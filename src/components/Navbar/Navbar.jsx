import { IoSearch } from "react-icons/io5";
import { FaAngleUp, FaChevronDown, FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex items-center justify-between py-10 px-5 md:px-10 lg:px-0">
      <div>
        <h2 className="text-black font-secondary text-3xl md:text-4xl font-extrabold">
          pti<span className="text-secondary">.</span>
        </h2>
      </div>
      <div className="flex gap-3 lg:gap-5">
        <div className="flex items-center h-[2.5rem] md:h-[3rem] px-3 md:px-5 bg-white rounded-xl">
          <IoSearch className="text-secondary text-xl mr-3 md:mr-5 cursor-pointer" />
          <input
            type="text"
            placeholder="Search Food Items"
            name="search"
            className="outline-none font-medium w-[9rem] md:w-[16rem] lg:w-[35rem]"
          />
        </div>
        <div className="w-[6rem] md:w-[8rem] lg:w-[12rem] relative">
          <div
            onClick={() => setMenu(!menu)}
            className="flex h-[2.5rem] md:h-[3rem] items-center justify-between bg-white rounded-xl px-3 md:px-5 cursor-pointer font-semibold"
          >
            <h2 className="">Menu</h2>
            {menu ? (
              <FaAngleUp className="text-secondary md:text-xl" />
            ) : (
              <FaChevronDown className="text-secondary md:text-xl" />
            )}
          </div>
          {menu && (
            <div className="rounded-xl right-0 shadow-md w-[10rem] lg:w-[12rem] flex flex-col font-medium bg-white mt-3 absolute">
              <NavLink
                className={
                  "px-5 py-3 rounded-t-xl hover:bg-gray-200 hover:text-secondary"
                }
              >
                Home
              </NavLink>
              <NavLink
                className={"px-5 py-3 hover:bg-gray-200 hover:text-secondary"}
              >
                Details
              </NavLink>
              <NavLink
                className={"px-5 py-3 hover:bg-gray-200 hover:text-secondary"}
              >
                Category
              </NavLink>
              <NavLink
                className={"px-5 py-3 hover:bg-gray-200 hover:text-secondary"}
              >
                My Favorites
              </NavLink>
              <NavLink
                className={"px-5 py-3 hover:bg-gray-200 hover:text-secondary"}
              >
                Profile
              </NavLink>
              <NavLink
                className={
                  "px-5 py-3 rounded-b-xl hover:bg-gray-200 hover:text-secondary"
                }
              >
                LogIn / Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="bg-secondary hidden md:block p-3 rounded-full text-white text-xl cursor-pointer">
        <FaRegUser />
      </div>
    </div>
  );
}

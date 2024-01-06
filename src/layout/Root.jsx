import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

export default function Root() {
  return (
    <div className="bg-gray-200 ">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Outlet />
      </div>
    </div>
  );
}

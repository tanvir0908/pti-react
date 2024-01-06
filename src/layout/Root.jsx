import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Foods from "../components/Foods/Foods";
import Footer from "../components/Footer/Footer";

export default function Root() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Foods />
      </div>
      <Footer />
    </div>
  );
}

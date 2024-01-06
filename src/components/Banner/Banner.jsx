import bannerImage from "../../assets/Image1.png";

export default function Banner() {
  return (
    <div className="pt-10 pb-20 mx-5 md:mx-10 xl:mx-0">
      <div className="md:bg-primary flex flex-col md:flex-row items-center gap-10 rounded-3xl">
        <div className="flex-1 md:text-white md:pl-16">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Deliver Food To Your <br /> Door Step
          </h2>
          <p className="lg:text-xl mt-3 lg:mt-10 md:text-gray-100 font-medium">
            Authentic Food, Quick Service, Fast Delivery.
          </p>
        </div>
        <div className="flex-1 bg-primary md:bg-transparent rounded-3xl md:rounded-none">
          <img className="md:pr-10 w-full" src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

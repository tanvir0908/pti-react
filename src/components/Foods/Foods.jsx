import axios from "axios";
import { useEffect, useState } from "react";
import FoodSlider from "../FoodSlider/FoodSlider";

export default function Foods() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      )
      .then((data) => setData(data.data.Items));
  }, []);

  const popular = data.filter((item) => item.IsPopular == true);
  const recommended = data.filter((item) => item.IsRecommended == true);

  return (
    <div className="py-10 px-5 md:px-10 xl:px-0">
      <div>
        <h2 className="text-3xl font-semibold mb-5">Popular</h2>
        <FoodSlider data={popular} />
      </div>
      <div className="mt-20">
        <h2 className="text-3xl font-semibold mb-5">Recommended</h2>
        <FoodSlider data={recommended} />
      </div>
    </div>
  );
}

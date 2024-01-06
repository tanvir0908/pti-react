import axios from "axios";
import { useEffect, useState } from "react";
import FoodSlider from "../FoodSlider/FoodSlider";
import Modal from "../Modal/Modal";

export default function Foods() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

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
    <div className="py-10 px-5 md:px-10 xl:px-0 mb-20">
      <div>
        {modal && <Modal onClose={() => setModal(true)} />}
        <div className="flex items-center justify-between mr-[6rem]">
          <h2 className="text-3xl font-semibold mb-5">Popular</h2>
          <button
            onClick={() => setModal(true)}
            className="text-lg font-semibold mb-4 text-secondary "
          >
            Add More
          </button>
        </div>
        <FoodSlider data={popular} />
      </div>
      <div className="mt-20">
        {modal && <Modal onClose={() => setModal(false)} />}
        <div className="flex items-center justify-between mr-[6rem]">
          <h2 className="text-3xl font-semibold mb-5">Recommended</h2>
          <button
            onClick={() => setModal(true)}
            className="text-lg font-semibold mb-4 text-secondary "
          >
            Add More
          </button>
        </div>
        <FoodSlider data={recommended} />
      </div>
    </div>
  );
}

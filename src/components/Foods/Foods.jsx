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

  const popular = data.filter(
    (item) => item.IsPopular == true || item.IsPopular == "true"
  );
  const recommended = data.filter(
    (item) => item.IsRecommended == true || item.IsRecommended == "true"
  );

  const parentFunction = (newData) => {
    console.log(newData);
    data.push(newData);
    console.log(data);
  };

  return (
    <div className="py-10 px-5 md:px-10 xl:px-0 mb-20">
      <div>
        {modal && (
          <Modal
            onClose={() => setModal(false)}
            parentFunction={parentFunction}
          />
        )}
        <div className="flex items-center justify-between mr-[6rem]">
          <h2 className="text-3xl font-bold mb-5">Popular</h2>
          <button
            onClick={() => setModal(true)}
            className="text-lg hidden lg:block font-semibold mb-4 text-secondary "
          >
            Add More
          </button>
        </div>
        <FoodSlider data={popular} />
      </div>
      <div className="mt-20">
        {modal && (
          <Modal
            onClose={() => setModal(false)}
            parentFunction={parentFunction}
          />
        )}
        <div className="flex items-center justify-between mr-[6rem]">
          <h2 className="text-3xl font-bold mb-5">Recommended</h2>
          <button
            onClick={() => setModal(true)}
            className="text-lg font-semibold mb-4 hidden lg:block text-secondary "
          >
            Add More
          </button>
        </div>
        <FoodSlider data={recommended} />
      </div>
    </div>
  );
}

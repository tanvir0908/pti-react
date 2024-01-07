/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";

export default function Modal({ onClose, parentFunction }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      Name: data.Name,
      ImageUrl: data.ImageUrl,
      Price: Number(data.Price),
      IsPopular: data.IsPopular,
      IsRecommended: data.IsRecommended,
    };
    parentFunction(newData);
    toast.success("Item added successfully");
    reset();
    onClose();
  };

  return (
    <div className="fixed z-10  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-primary w-[40rem] p-3 rounded-xl relative">
        <button className="absolute right-3" onClick={onClose}>
          <IoClose className="text-3xl border-2 rounded-full text-red-500 border-red-500" />
        </button>
        <div className="p-10 space-y-5">
          <h2 className="text-3xl pb-5 font-semibold text-center">
            Add New Item
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <span className="font-medium">
                Item Name<span className="text-red-500">*</span>
              </span>
              <input
                {...register("Name", { required: true })}
                type="text"
                name="Name"
                placeholder="Enter item name"
                className="px-4 py-3 rounded-xl font-medium outline-none"
              />
              {errors.Name && (
                <span className="text-center text-red-500 mt-2 font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col my-3">
              <span className=" font-medium">
                Photo URL<span className="text-red-500">*</span>
              </span>
              <input
                {...register("ImageUrl", { required: true })}
                type="text"
                name="ImageUrl"
                placeholder="Enter item photo URL"
                className="px-4 py-3 rounded-xl font-medium outline-none border-2 border-primary"
              />
              {errors.ImageUrl && (
                <span className="text-center text-red-500 mt-2  font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col my-3">
              <span className=" font-medium">
                Price<span className="text-red-500">*</span>
              </span>
              <input
                {...register("Price", { required: true })}
                type="number"
                name="Price"
                placeholder="Enter price"
                className="px-4 py-3 rounded-xl font-medium outline-none border-2 border-primary"
              />
              {errors.Price && (
                <span className="text-center text-red-500 mt-2  font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <span className="font-medium">
                Popular<span className="text-red-500">*</span>
              </span>
              <select
                defaultValue={""}
                {...register("IsPopular", { required: true })}
                className="px-4 py-3 rounded-xl font-medium outline-none border-2 border-primary"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.IsPopular && (
                <span className="text-center text-red-500 mt-2 font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex mt-3 flex-1 flex-col gap-1">
              <span className="font-medium">
                Recommended<span className="text-red-500">*</span>
              </span>
              <select
                defaultValue={""}
                {...register("IsRecommended", { required: true })}
                className="px-4 py-3 rounded-xl font-medium outline-none border-2 border-primary"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.IsRecommended && (
                <span className="text-center text-red-500 mt-2 font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-6 ">
              <button className="bg-primary w-full font-semibold py-3 rounded-xl border-2 border-black">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

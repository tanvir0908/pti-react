/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";

export default function Modal({ onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully");
    reset();
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
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Enter item name"
                className="px-4 py-3 rounded-xl font-medium outline-none"
              />
              {errors.name && (
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
                {...register("photo", { required: true })}
                type="text"
                name="photo"
                placeholder="Enter item photo URL"
                className="px-4 py-3 rounded-xl font-medium outline-none border-2 border-primary"
              />
              {errors.photo && (
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
                {...register("price", { required: true })}
                type="number"
                name="price"
                placeholder="Enter price"
                className="px-4 py-3 rounded-xl font-medium outline-none border-2 border-primary"
              />
              {errors.price && (
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
                defaultValue={"default"}
                {...register("isPopular", { required: true })}
                className="px-4 py-3 rounded-xl font-medium outline-none border-2 border-primary"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.isPopular && (
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
                defaultValue={"default"}
                {...register("isRecommended", { required: true })}
                className="px-4 py-3 rounded-xl font-medium outline-none border-2 border-primary"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.isRecommended && (
                <span className="text-center text-red-500 mt-2 font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control mt-6 ">
              <button className="bg-primary text-white w-full font-semibold py-3 rounded-xl border-2 border-white">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

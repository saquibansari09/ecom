import React from "react";
import img from "../Components/images/background_11_nQJIc9J.normal.jpeg";

const image = () => {
  return (
    <div className="">
      <div className="relative">
        <img className="w-[100%] h-[90vh]" src={img} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="absolute top-1/3">
          <h1 className=" mt-5 text-6xl text-white font-bold">
            Do you want to
            <br /> change the world?
          </h1>
          <p className="text-center mt-10 text-base flex justify-center text-gray-400">
            Lorem Ipsum is simply dummy text of the printing & typesetting
            <br /> industry. Lorem Ipsum has been the industry's standard dummy.
            <br /> Lorem Ipsum is simply dummy text.
          </p>
          <div className="flex justify-center gap-10 mt-5">
            <button className="px-10 py-3 rounded-full bg-white hover:bg-slate-400">
              OUR SERVICES
            </button>
            <button className="px-10 py-3 rounded-full bg-white hover:bg-slate-400">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default image;

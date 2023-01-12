import React from "react";
import image from "../Components/images/content-50.jpg";
import { BsArrowRight } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="h-[100vh] w-[100%] grid lg:grid-cols-2 justify-center gap-5 mt-10">
      <img className="h-[70vh] w-[100%]" src={image} alt="" />
      <div className="">
        <h1 className="text-5xl font-semibold mt-16">
          Our experience, skills and
          <br /> expertise. Your profit.
        </h1>

        <p className="text-2xl text-gray-500 mt-10 mb-5">
          Above all, we believe that real change is possible and that
          <br /> tomorrow doesn't have to be like today.
        </p>
        <p className="text-gray-500 text-base">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          <br /> when an unknown printer took a galley of type scrambled <br />
          it to make a type specimen book. Lorem Ipsum has been the industry's
          standard dummy text
          <br />
          ever since the when an unknown printer took a galley of type
          scrambled.
        </p>
        <button className=" mt-10 bg-black text-white px-10 py-2 rounded-full">
          EXPLORE SERVICES
          <span className="">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Experience;

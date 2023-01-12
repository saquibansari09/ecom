import React from "react";
// import img from "../Components/images/laptop.jpg";
const Card = () => {
  return (
    <div className="h-[60vh] w-[100%] lg:flex justify-center gap-5">
      <div className="h-[50vh] w-[400px] bg-black rounded-2xl">
        <p className="text-white text-center mt-10">FINANCIAL SERVICES</p>
        <h1 className="text-green-500 text-center text-3xl mt-10">
          Leading consumer
          <br /> products companies.
        </h1>
        <p className=" mt-5 text-center text-base text-gray-400">
          Lorem Ipsum is simply text of the
          <br /> printing and typesetting industry.
          <br />
          Lorem Ipsum has been industry's
          <br /> standard dummy text ever since.
          <br /> Lorem Ipsum is simply text.
        </p>
      </div>

      <div className="h-[50vh] w-[400px] bg-black rounded-2xl">
        <p className="text-white text-center mt-10">TRANSPORT & LOGISTICS</p>
        <h1 className="text-green-500 text-center text-3xl mt-10">
          Focus on delivers
          <br /> growth trading.
        </h1>
        <p className=" mt-5 text-center text-base text-gray-400">
          Lorem Ipsum is simply text of the
          <br /> printing and typesetting industry.
          <br />
          Lorem Ipsum has been industry's
          <br /> standard dummy text ever since.
          <br /> Lorem Ipsum is simply text.
        </p>
      </div>

      <div className="h-[50vh] w-[400px] bg-black rounded-2xl">
        <p className="text-white text-center mt-10">ENERGY & ENVIRONMENT</p>
        <h1 className="text-green-500 text-center text-3xl mt-10">
          Developing a strategy
          <br /> and roadmap.
        </h1>
        <p className=" mt-5 text-center text-base text-gray-400">
          Lorem Ipsum is simply text of the
          <br /> printing and typesetting industry.
          <br />
          Lorem Ipsum has been industry's
          <br /> standard dummy text ever since.
          <br /> Lorem Ipsum is simply text.
        </p>
      </div>
    </div>
  );
};

export default Card;

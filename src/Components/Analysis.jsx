import React from "react";
import { GiHistogram } from "react-icons/gi";
import { RiLineChartLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";

const Analysis = () => {
  return (
    <div className="bg-green-300 h-[50vh] w-[100%] lg:flex justify-center gap-20">
      <div className="mt-28">
        <div className="flex gap-5">
          <div>
            <span className="text-5xl text-white">
              <GiHistogram />
            </span>
          </div>
          <div>
            <p>Business Planing</p>
            <h1 className="text-xl float-right">Strategy and Execution</h1>
          </div>
        </div>
        <p className="mt-5">
          Lorem Ipsum is simply dummy text of the printing
          <br /> and typesetting industry. Lorem Ipsum has been he
          <br /> industry's standard dummy text ever since.
        </p>
      </div>

      <div className="mt-28">
        <div className="flex gap-5">
          <div>
            <span className="text-5xl text-white">
              <RiLineChartLine />
            </span>
          </div>
          <div>
            <p>Business Planing</p>
            <h1 className="text-xl float-right">Strategy and Execution</h1>
          </div>
        </div>
        <p className="mt-5">
          Lorem Ipsum is simply dummy text of the printing
          <br /> and typesetting industry. Lorem Ipsum has been he
          <br /> industry's standard dummy text ever since.
        </p>
      </div>

      <div className="mt-28">
        <div className="flex gap-5">
          <div>
            <span className="text-5xl text-white">
              <TfiWorld />
            </span>
          </div>
          <div>
            <p>Business Planing</p>
            <h1 className="text-xl float-right">Strategy and Execution</h1>
          </div>
        </div>
        <p className="mt-5">
          Lorem Ipsum is simply dummy text of the printing
          <br /> and typesetting industry. Lorem Ipsum has been he
          <br /> industry's standard dummy text ever since.
        </p>
      </div>
    </div>
  );
};

export default Analysis;

import React from "react";
import { ImProfile } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { GiHistogram } from "react-icons/gi";
import img1 from "./images/TT-9-Aug-Best-Mutual-Funds-01.jpg";
import img3 from "./images/stock-m.png";
import img2 from "./images/content-05.jpg";
import img5 from "./images/content-04.jpg";

const Services = () => {
  return (
    <div className="h-[100vh] w-[100%]">
      <h1 className="text-center text-3xl font-medium">EXPERTISE & SERVICES</h1>
      <p className="text-center mt-5 text-base text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
        <br /> industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type
        <br /> and scrambled it to make a type specimen book.
      </p>
      <div className="lg:flex justify-center gap-5 mt-10">
        <div className="text-center h-[60vh] w-[300px] ">
          <div className="bg-gray-200 h-[40vh] w-[300px] rounded-xl">
            <div className="flex justify-center items-center text-6xl text-green-500">
              <span className="mt-5">
                <ImProfile />
              </span>
            </div>
            <h1 className="mt-10 font-mono">INVESTMENT PLANNING</h1>
            <p className="mt-5 text-gray-500">
              Lorem Ipsum is simply
              <br /> dummy text of the printing
              <br /> typesetting industry.
            </p>
          </div>
        </div>

        <div className="text-center h-[60vh] w-[300px] ">
          <div className="bg-gray-200 h-[40vh] w-[300px] rounded-xl">
            <div className="flex justify-center items-center text-6xl text-green-500">
              <span className="mt-5">
                <FaHeartbeat />
              </span>
            </div>
            <h1 className="mt-10 font-mono">INDUSTRIAL INSURANCE</h1>
            <p className="mt-5 text-gray-500">
              Lorem Ipsum is simply
              <br /> dummy text of the printing
              <br /> typesetting industry.
            </p>
          </div>
        </div>

        <div className="text-center h-[60vh] w-[300px] ">
          <div className="bg-gray-200 h-[40vh] w-[300px] rounded-xl">
            <div className="flex justify-center items-center text-6xl text-green-500">
              <span className="mt-5">
                <MdOutlineMessage />
              </span>
            </div>
            <h1 className="mt-10 font-mono">WEALTH MANAGEMENT</h1>
            <p className="mt-5 text-gray-500">
              Lorem Ipsum is simply
              <br /> dummy text of the printing
              <br /> typesetting industry.
            </p>
          </div>
        </div>

        <div className="text-center h-[60vh] w-[300px] ">
          <div className="bg-gray-200 h-[40vh] w-[300px] rounded-xl">
            <div className="flex justify-center items-center text-6xl text-green-500">
              <span className="mt-5">
                <GiHistogram />
              </span>
            </div>

            <h1 className="mt-10 font-mono">FINANCIAL SERVICES</h1>
            <p className="mt-5 text-gray-500">
              Lorem Ipsum is simply
              <br /> dummy text of the printing
              <br /> typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[25vh] w-[100%] bg-green-400 flex justify-center">
        <h1 className="text-white text-2xl font-medium mt-16">
          Looking for a premium finance firm for your business?
          <button className="rounded-3xl bg-white px-5 py-3 text-black text-base ml-10 hover:text-gray-400">
            REQUEST A QUOTE
          </button>
        </h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-20">INVESTMENTS</h1>
        <p className="text-center text-base text-gray-400 mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
          <br /> the industry's standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type
          <br /> and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="lg:flex justify-center gap-5 mt-20">
        <div className="h-[30vh] w-[20%]">
          <img className="hover:scale-110" src={img5} alt="" />
          <h1 className="font-mono mt-5 text-center font-bold">
            PLAN FOR HOUSING
          </h1>
          <p className="mt-3 text-center text-gray-400">
            Lorem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry.
            <br /> Lorem been the industry's.
          </p>
        </div>

        <div className="h-[30vh] w-[20%]">
          <img className="hover:scale-110" src={img3} alt="" />
          <h1 className="font-mono mt-5 text-center font-bold">STOCK MARKET</h1>
          <p className="mt-3 text-center text-gray-400">
            Lorem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry.
            <br /> Lorem been the industry's.
          </p>
        </div>

        <div className="h-[30vh] w-[20%]">
          <img className="hover:scale-110" src={img2} alt="" />
          <h1 className="font-mono mt-5 text-center font-bold">
            THE RISK APPETITE
          </h1>
          <p className="mt-3 text-center text-gray-400">
            Lorem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry.
            <br /> Lorem been the industry's.
          </p>
        </div>

        <div className="h-[30vh] w-[20%]">
          <img
            className=" hover:scale-110 h-[27vh] w-[100%]"
            src={img1}
            alt=""
          />
          <h1 className="font-mono mt-5 text-center font-bold">MUTUAL FUNDS</h1>
          <p className="mt-3 text-center text-gray-400">
            Lorem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry.
            <br /> Lorem been the industry's.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

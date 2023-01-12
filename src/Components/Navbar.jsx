import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="h-20 mx-w-[100%] bg-black text text-white flex justify-around sticky top-0">
      <h1 className=" text-3xl mt-5 hover:text-orange-600">LeadGen</h1>
      <ul className="flex justify-around gap-5 mt-6 font-thin ">
        <li>
          <a className="hover:text-slate-400 border-b-2" href="about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="hover:text-slate-400 border-b-2" href="#">
            SERVICES
          </a>
        </li>
        <li>
          <a className="hover:text-slate-400 border-b-2" href="#">
            INVESTMENTS
          </a>
        </li>
        <li>
          <a className="hover:text-slate-400 border-b-2" href="#">
            TEAM
          </a>
        </li>
        <li>
          <a className="hover:text-slate-400 border-b-2" href="#">
            NEWS
          </a>
        </li>
        <li>
          <a className="hover:text-slate-400 border-b-2" href="#">
            CONTACT
          </a>
        </li>
      </ul>
      <div className="flex justify-around gap-6 mt-6 hover:text-slate-400">
        <FaInstagram />
        <FaFacebookF />
        <IoLogoTwitter />
      </div>
    </nav>
  );
};

export default Navbar;

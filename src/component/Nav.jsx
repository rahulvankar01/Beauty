import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-[white]">
      <div className="main">
      <div className="p-5" id="frist">
        <div className="logo flex justify-center items-center">
          <ul className="flex gap-5  justify-center items-center">
            <li className="w-10 h-10 border-solid border-2  border-[#555555] rounded-full flex justify-center items-center">
              <i className="fa fa-home text-xl "></i>
            </li>
            <h1>Beautyness</h1>
            <li className="w-10 h-10 border-solid border-2  border-[#555555] rounded-full flex justify-center items-center">
              <i className="fa fa-phone text-xl "></i>
            </li>
            <h1>Call Us - (+22) 123 456 7890</h1>
          </ul>
        </div>

        <div className="menu flex justify-center items-center">
          <ul className="flex gap-5  justify-center items-center text-[#555555]">
            <li>
              
             <NavLink to="/home">home</NavLink>
            

            </li>
            <li>
            <NavLink to="/pages">Pages</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/ser">Services</NavLink>
            </li>
            <li>
            <NavLink to="/con">Contact</NavLink>
            </li>
            <li>
              <a href="">
                <i className="fa fa-facebook text-black"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter text-black"></i>
              </a>
            </li>
            <li>
              <button className="bg-[#7A9CA5] p-2 text-white rounded-md">
                <i className="fa fa-calendar pr-1"></i>
                RESERVATION
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Nav;

import React from "react";
import Footend from "./Footend";

const Footer = () => {
  return (
    <div>
       <div className="bg-[#1E2C30] ">
      <div className="main text-[white]">
        <div className="p-5 border-b-2 border-solid border-[white]" id="frist">
          <div className="logo flex justify-center items-center">
           <ul>
           <li className="w-10 h-10 border-solid border-2  border-[#ffffff] rounded-full flex justify-center items-center">
              <i className="fa fa-home text-xl "></i>
            </li>
           </ul>
          </div>

          <div className="menu flex justify-center items-center">
            <ul className="flex gap-5  justify-center items-center text-[#555555]">
              <li className="w-10 h-10 border-solid border-2 border-white flex justify-center items-center">
                <i className="fa fa-facebook text-xl text-[white]"></i>
              </li>
              <li className="w-10 h-10 border-solid border-2 border-white flex justify-center items-center">
                <i className="fa fa-twitter text-xl text-[white]"></i>
              </li>
              <li className="w-10 h-10 border-solid border-2 border-white flex justify-center items-center">
                <i className="fa fa-instagram text-xl text-[white]"></i>
              </li>
              <li className="w-10 h-10 border-solid border-2 border-white flex justify-center items-center">
                <i className="fa fa-info text-xl text-[white]"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main py-5">
        <div className="flex justify-evenly text-white">
          <div className="w-1/5">
            <h1 className="text-xl py-2">Explore</h1>
            Home <br /> About Us
            <br /> Services
            <br /> Appointments
            <br /> Blog Contact Us
          </div>
          <div className="w-1/5">
            <h1 className="text-xl py-2">Utility Pages</h1>
            Start here <br />
            Style guide <br />
            404 not found <br />
            Password protected <br />
            Licenses <br />
            Changelog
          </div>
          <div className="w-1/5">
            <h1 className="text-xl py-2">Keep in Touch</h1>
            Address : 24A Kingston St, Los Vegas NC 28202, USA. <br />
            Mail : support@doctors.com
            <br />
            Phone : (+22) 123 - 4567 - 900
          </div>
          <div className="w-1/5">
            <h1 className="text-xl py-2">Working Hours</h1>
            Mon to Fri: 7am - 6pm <br />Sat: 9am - 7pm <br />Sun: 9am - 6pm
          </div>
        </div>
      </div>
     
    </div>
    <Footend></Footend>
    </div>
   

    
  );
};

export default Footer;

import React from "react";
import Footer from "./Footer";

const Appointment = () => {
  return (
    <div>
       <div className="bg-[#EDF5F7] py-12">
      <div className="main flex">
        <div className="w-1/2 m-auto">
          <p className="text-sm text-[#1E2C30]">Flat Discount </p>
          <h1 className="font-bold font-serif Playfair py-3 text-2xl/[40px]">
            Claim upto 50% offeron ‍<br /> the most popular <br />
            services...
          </h1>
          <p className="text-[#1E2C30]">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br />, but the majority have suffered alteration in some form,
            buying to <br /> injected humour, or randomised words.
          </p>
          <div className="flex mt-5">
            <div className="bg-[white] p-3 border-2 border-[#95BFCB] border-solid">
              <h1 className="font-bold">MAIL US :</h1>
              <p className="text-[#1E2C30] font-sans">info@beautyness.com</p>

              <h1 className="font-bold mt-2">CALL US :</h1>
              <p className="font-sans text-[#1E2C30]">
                CALL US :(+22) 123 4568 009
              </p>
            </div>
            <div className="bg-[#1E2C30] p-3 border-2 border-[#1E2C30] border-solid text-[white] text-center">
              <h3 className="font-bold">-Get Flat-</h3>
              <span className="font-bold text-5xl">50%</span>
              <h3 className="font-bold">Discount</h3>
            </div>
          </div>
        </div>
        <div className="bg-[white] p-10 text-[black]">
         <label>
          Name :
          <br />
          <input type="text"  className="border-2"/>
         </label>
         <br />
         <label>
          Email :
          <br />
          <input type="text"  className="border-2"/>
         </label>
         <br />
         <label>
          Phone :
          <br />
          <input type="number"  className="border-2"/>
         </label>
         <br />
         <label>
         Service You Need :
          <br />
          <input type="text"  className="border-2"/>
         </label>
         <br />
         <label>
         Any Note For Us :
          <br />
          <input type="text"  className="border-2 p-10"/>
         </label>
         <br />
         <label>
              <button className='hover:bg-[black] mt-5 w-full hover:text-[white] text-[black] border-solid border-2 border-black p-2 rounded-md'>
              GET AN APPOINTMENT </button>
              </label>

        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
   
  );
};

export default Appointment;

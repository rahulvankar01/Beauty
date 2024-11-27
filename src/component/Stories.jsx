import React from "react";

const stories = () => {
  return (
    <div className="main p-5">
      <div className="text-center">
        <p className="text-[#555555] ">Our Blog</p>
        <h1 className="font-serif Playfair py-6 text-3xl/[40px]">
          Latest Updates
        </h1>
      </div>
      <div className="main ">
        <div className="py-5 w-10/12 gap-5 m-auto flex justify-between">
          <div className="box bg-[#EDF5F7] w-4/12">
            <img src="storie.png" alt="" />
            <p className="px-3 text-[#555555] text-sm py-3">
              11TH AUGUST 2021 <span></span>BY PETER BERGSON
            </p>
            <h1 className="px-3 font-serif Playfair py-3  text-2xl/[40px]">
              The energy efficiency of the <br /> hydrotherapy or swim
            </h1>
            <p className="px-3 pb-7 text-[#555555] text-lg">
              The point of using Lorem Ipsum hiter <br /> that using making it
              look like others <br /> readable will get end.
            </p>
          </div>
          <div className="box bg-[#EDF5F7] w-4/12">
            <img src="storie1.png" alt="" />
            <p className="px-3 text-[#555555] text-sm py-3">
              11TH AUGUST 2021 <span></span>BY PETER BERGSON
            </p>
            <h1 className="px-3 font-serif Playfair py-3  text-2xl/[40px]">
              The energy efficiency of the <br /> hydrotherapy or swim
            </h1>
            <p className="px-3 pb-7 text-[#555555] text-lg">
              The point of using Lorem Ipsum hiter <br /> that using making it
              look like others <br /> readable will get end.
            </p>
          </div>
          <div className="box bg-[#EDF5F7] w-4/12">
            <img src="storie2.png" alt="" />
            <p className="px-3 text-[#555555] text-sm py-3">
              11TH AUGUST 2021 <span></span>BY PETER BERGSON
            </p>
            <h1 className="px-3 font-serif Playfair py-3  text-2xl/[40px]">
              The energy efficiency of the <br /> hydrotherapy or swim
            </h1>
            <p className="px-3 pb-7 text-[#555555] text-lg">
              The point of using Lorem Ipsum hiter <br /> that using making it
              look like others <br /> readable will get end.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
      <label >
              <button className='hover:bg-[black] mt-5  hover:text-[white] text-[black] border-solid border-2 border-black p-2 rounded-md'>
              VIEW MORE STORIES </button>
              </label>
      </div>
      
    </div>
  );
};

export default stories;

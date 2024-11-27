import React from 'react'

const About = () => {
  return (

    <div className='bg-[#EBF3F5]'>
      <div className="main ">
      <div className='py-12 w-7/12  m-auto flex justify-center items-center '>
        <div className=" ml-auto w-6/12">
      <p className='text-[#555555]'>About Us</p>
      <h1 className='font-serif Playfair py-2 text-4xl/[40px]'>The Beauty is about <br /> being Comfortable <br /> in your own skin!</h1>
      <p className='pb-7 text-[#555555] text-sm'>If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.</p>

        <div className='flex justify-between gap-2'>
        <div className=" box w-4/12 py-4 border-solid border-2 border-[black]">
        <h1 className='text-[#555555]'>
        <img src="about-Icon.png" className='m-auto' alt="" />
        </h1>
       
      <h1 className='font-serif Playfair py-2 text-center text-2xl/[20px]'>Beauty Experts
      </h1>
       </div>
       <div className="box w-4/12 py-4 border-solid border-2 border-[black]">
       <h1 className='text-[#555555]'>
        <img src="about-Icon1.png" className='m-auto' alt="" />
        </h1>
       
      <h1 className='font-serif py-2 text-center text-2xl/[20px]'>Great
      Services</h1>
       </div>
       <div className="box w-4/12 py-4 border-solid border-2 border-[black]">
       <h1 className='text-[#555555]'>
        <img src="about-Icon2.png" className='m-auto' alt="" />
        </h1>
       
      <h1 className='font-serif py-2 text-center text-2xl/[20px]'>100%
      Genuine</h1>
       </div>


        </div>
      </div>
     
      
      
      
      <div className="ml-5 img w-6/12  ">
           <img className='shadow-lg p-4 border-solid border-2' src="about.png" alt="" />
        </div>
      
        </div>
        </div>
    </div>
  )
}

export default About

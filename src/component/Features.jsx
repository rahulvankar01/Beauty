import React from 'react'
import About from './About'

const Features = () => {
  return (
   <div>
    <div className='main py-12'>
        <div className='py-5 w-10/12 gap-5 m-auto flex justify-between'>
        <div className="box w-4/12">
      <img src="box1.png" alt="" />
      <h1 className='font-serif Playfair py-2 text-4xl/[40px]'>Spa & Massage</h1>
      <p className='pb-7 text-[#555555] text-sm'>If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.</p>
      <button className='hover:bg-[black] hover:text-[white] text-[black] border-solid border-2 border-black p-2 rounded-md'>
              
              Make a reservation
            </button>
      </div>
      <div className="box w-4/12">
      <img src="box2.png" alt="" />
      <h1 className='font-serif Playfair py-2 text-4xl/[40px]'>Hair & Beauty</h1>
      <p className='pb-7 text-[#555555] text-sm'>If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.</p>
      <button className='hover:bg-[black] hover:text-[white] text-[black] border-solid border-2 border-black p-2 rounded-md'>
              
              Make a reservation
            </button>
      </div>
      <div className="box w-4/12 ">
      <img src="box3.jpg" alt="" />
      <h1 className='font-serif Playfair py-2 text-4xl/[40px]'>Body Treatments</h1>
      <p className='pb-7 text-[#555555] text-sm'>If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.</p>
      <button className='hover:bg-[black] hover:text-[white] text-[black] border-solid border-2 border-black p-2 rounded-md'>
              
              Make a reservation
            </button>
      </div>
        </div>
      
    </div>
    <About></About>
   </div>
    
  )
}

export default Features

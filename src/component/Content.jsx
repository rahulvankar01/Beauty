import React from 'react'

const Content = () => {
  return (
    
    <div className='flex   bg-[#EBF3F5]'>
      
        <div className="w-6/12 main bg-[#EBF3F5] flex justify-end items-center ">
        <div className="w-6/12">
        <h3 className=' Manrope text-[#5C8692] py-2'>Welcome to Beautyness!!!</h3>
        <h1 className='font-serif Playfair text-4xl/[40px]'>Beauty is power <br />a smile is its <br />sword.</h1>
        <p className='py-2 text-[#555555] text-sm'>There are many variation of passages are Ipsum available majority have suffered alteration in some form.</p>
        <button className='bg-[#7A9CA5] p-2 text-white rounded-md'>
              
              Make a reservation
            </button></div>
       
        </div>
        <div className="p-5 h-dvh w-6/12 bg-[#1E2C30] flex  items-center">
        <div className="img w-6/12  ">
           <img className='shadow-lg p-4 border-solid border-2' src="header-girl.jpg" alt="" />
        </div>
        </div>
    </div>
    
    
        
    
  )
}

export default Content

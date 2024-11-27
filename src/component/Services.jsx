import React from 'react'
import Testimonials from './Testimonials'

const Services = () => {
  return (
    <div>
       <div className='main py-12'>
        <div className='text-center'>
        <p className='text-[#555555]'>Our Services</p>
        <h1 className='font-serif Playfair py-4 text-3xl/[40px]'>We are Experienced in making <br /> you very Beautiful</h1>
        </div>
        <div>
        <div className='flex '>
            <div className='service flex justify-end w-1/2'>
              <img className='w-30' src="service-1.jpg" alt="" />
            </div>
            <div className='w-1/2 p-5'>
            <label className='text-lg border-b-4 pb-7 mb-3 leading-15 '>
              Face masks   ....................................... <span className='text-[#555555]'>from</span> $48.00
              <p className='text-sm text-[#555555] pb-5'>The versions have evolved over the sometimes by accident.</p>
              </label>
              <label className='text-lg border-b-4 pb-7 mb-3 leading-15'>
              Full body massage  ............................. <span className='text-[#555555]'>from</span>  $54.00
              <p className='text-sm text-[#555555] pb-5'>The versions have evolved over the sometimes by accident.</p>
              </label>
              <label className='text-lg border-b-4 pb-7 mb-3 leading-15'>
              Geothermal spa  ................................. <span className='text-[#555555]'>from</span> $54.00
              <p className='text-sm text-[#555555] pb-5'>The versions have evolved over the sometimes by accident.</p>
              </label>
              <label className='text-lg border-b-4 pb-7 mb-3 leading-15'>
              Sauna relax  ....................................... <span className='text-[#555555]'>from</span>  $73.00
              <p className='text-sm text-[#555555] pb-5'>The versions have evolved over the sometimes by accident.</p>
              </label>
              <label>
              <button className='hover:bg-[black] hover:text-[white] text-[black] border-solid border-2 border-black p-2 rounded-md'>
              GET AN APPOINTMENT </button>
              </label>
            </div>
               
        </div>

        <div className='flex '>
          <div></div>
            <div className='w-1/2 p-5 text-end'>
            <label className='text-lg border-b-4 pb-7 mb-3 leading-15 '>
              Face masks   ....................................... <span className='text-[#555555]'>from</span> $48.00
              <p className='text-sm text-[#555555] pb-5'>The versions have evolved over the sometimes by accident.</p>
              </label>
              <label className='text-lg border-b-4 pb-7 mb-3 leading-15'>
              Full body massage  ............................. <span className='text-[#555555]'>from</span>  $54.00
              <p className='text-sm text-[#555555] pb-5'>The versions have evolved over the sometimes by accident.</p>
              </label>
              <label className='text-lg border-b-4 pb-7 mb-3 leading-15'>
              Geothermal spa  ................................. <span className='text-[#555555]'>from</span> $54.00
              <p className='text-sm text-[#555555] pb-5'>The versions have evolved over the sometimes by accident.</p>
              </label>
              <label className='text-lg border-b-4 pb-7 mb-3 leading-15'>
              Sauna relax  ....................................... <span className='text-[#555555]'>from</span>  $73.00
              <p className='text-sm text-[#555555] pb-5'>The versions have evolved over the sometimes by accident.</p>
              </label>
              <label>
              <button className='hover:bg-[black] hover:text-[white] text-[black] border-solid border-2 border-black p-2 rounded-md'>
              GET AN APPOINTMENT </button>
              </label>
            </div>
            <div className='service flex justify-star w-1/2'>
              <img className='w-30' src="service-2.jpg" alt="" />
            </div>
               
        </div>
        
        </div>
        
    

     
    </div>
    <Testimonials></Testimonials>
    </div>
   
  )
}

export default Services

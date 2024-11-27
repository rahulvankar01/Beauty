import React from 'react'

const Testimonials = () => {
  return (
    <div className='bg-[#EDF5F7]'>
     <div className="main p-12">
     <div className='text-center'>
        <p className='text-[#555555] '>Testimonials</p>
        <h1 className='font-serif Playfair py-4 text-3xl/[40px]'>What our Customers says...</h1>
        </div>
        <div className='flex gap-2'>
            <div className='w-1/2'>
                <p className='bg-[white] p-7'>“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “</p>
                <div className='bg-[#1E2C30] p-3 flex text-white'>
                    <div>
                        <img src="testi1.png" alt="" />
                    </div>
                    <div>
                        <label className=''>
                            <i className='fa fa-star ml-2'></i>
                            <i className='fa fa-star ml-2'></i>
                            <i className='fa fa-star ml-2'></i>
                            <i className='fa fa-star ml-2'></i>
                            <i className='fa fa-star ml-2'></i>
                        </label>
                        <h2 className='ml-2'>James Williams</h2>
                        <p className='ml-2 text-sm'>United States</p>

                    </div>
                    <div className="ml-auto text-4xl flex justify-center items-center ">
                        <label className='' >
                            <i className='fa fa-bookmark-o mr-2'></i>
                            <i className='fa fa-bookmark-o mr-2'></i>
                        </label>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <p className='bg-[white] p-7'>“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “</p>
                <div className='bg-[#1E2C30] p-3 flex text-white'>
                    <div>
                        <img src="testi2.png" alt="" />
                    </div>
                    <div>
                        <label className=''>
                            <i className='fa fa-star ml-2'></i>
                            <i className='fa fa-star ml-2'></i>
                            <i className='fa fa-star ml-2'></i>
                            <i className='fa fa-star ml-2'></i>
                            <i className='fa fa-star ml-2'></i>
                        </label>
                        <h2 className='ml-2'>James Williams</h2>
                        <p className='ml-2 text-sm'>United States</p>

                    </div>
                    <div className="ml-auto text-4xl flex justify-center items-center ">
                        <label className='' >
                            <i className='fa fa-bookmark-o mr-2'></i>
                            <i className='fa fa-bookmark-o mr-2'></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Testimonials

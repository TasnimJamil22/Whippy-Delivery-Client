import React from 'react';

import img1 from '../../../images/img-1.png'
import img2 from '../../../images/img-2.png'

const Banner = () => {
    return (
        <div className="carousel w-full h-96 relative   "> 


        {/* slide-1 */}
        <div id="slide1" className="carousel-item relative w-full ">

    <div className="w-full"></div>

    
     
    <div className='absolute  flex justify-end  transform   -translate-y-1/2 lg:left-20 lg:top-2/4    sm:left-16 sm:top-2/4'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4eZb9D43GL4YPeU_fWM2sgzheyC7iifISt29oINZAWGXsJaEvaID3V9BcAAjASRN-kTY&usqp=CAU" className='lg:w-64 sm:w-32   '/>

       
      </div>
     <div className='absolute  flex justify-end transform -translate-y-1/2 right-24 top-2/4 '>
     <h1 className=' font-bold  lg:text-5xl md:text-3xl sm:text-2xl text-[#14b8a6] '>Fastest Delivery<br />Ever...</h1>
     </div>
    <div className='absolute  flex justify-end transform -translate-y-1/2 right-28 top-3/4 '>
      <button className='btn btn-outline btn-accent'>Call Now..</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> 
     
  </div>
        {/* <div id="slide1" className="carousel-item relative w-full ">

    <div className="w-full bg-gradient-to-r from-emerald-100 to-zinc-50"></div>

    
    <div className='absolute flex justify-end transform -translate-y-1/2 lg:left-24 lg:top-2/4 sm:top-1/4  '>
      <div className='relative lg:w-4/5 sm:w-2/5 border border-zinc-500 rounded-lg '>
           <img src={img2} alt="" className='w-96 ' />
      </div>
      </div>
     <div className='absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4 '>
     <h1 className=' font-bold lg:text-5xl md:text-3xl sm:text-2xl text-[#14b8a6] '>Fastest Delivery   <br />Ever...</h1>
     </div>
    <div className='absolute flex justify-end transform -translate-y-1/2 right-28 top-3/4 '>
      <button className='btn btn-outline btn-accent'>Call Now..</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> 
     
  </div> */}


   {/* slide-2 */}
  <div id="slide2" className="carousel-item relative w-full">
    <div>
      <div className='absolute flex justify-end transform -translate-y-1/2 lg:left-24 lg:top-2/4 sm:top-1/4  '>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQCJUac_cMlAnZlZ3qTSBcFbHAC_fAbcdxuSNodtKDALkND7wRIg_3c_rLa_Gesb3Py8&usqp=CAU" className='w-64'/>

      </div>
    <div className='absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4 '>
      <h1 className='text-4xl text-rose-500'>Get Your things on <br /> Time and save your time <br /> with us..</h1>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
   




  <div id="slide3" className="carousel-item relative w-full">
  <div>
      <div className='absolute flex justify-end transform -translate-y-1/2 lg:left-24 lg:top-2/4 sm:top-1/4  '>
    <img src="https://i.ibb.co/Z2vG2CY/pngtree-delivery-boy-with-three-boxes-flat-illustration-png-png-image-3961848-removebg-preview.png" className='w-64'/>

      </div>
    <div className='absolute flex justify-end transform -translate-y-1/2 right-24 top-2/4 '>
      <h1 className='text-4xl text-rose-500'>Get Your things on <br /> Time and save your time <br /> with us..</h1>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;
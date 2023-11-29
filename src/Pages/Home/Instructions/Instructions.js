import React from 'react';

const Instructions = () => {
    return (
        <div className=''>
            <h1 className='text-4xl font-bold text-center py-24 text-[#0f766e]'><span className='text-[#14b8a6]'>Whippy</span> Platform</h1>
            <div className="hero min-h-screen ">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='w-96' src="https://media.istockphoto.com/id/1165076267/vector/connected-car-parking-sharing-service-remote-controlled-via-smartphone-app.jpg?s=170667a&w=0&k=20&c=ZwMQrsGArsaKX8mqZuZmcbEykAG8U3Dox-3Ao2Nbj5A=" />
    {/* <img className='w-96 h-3/4' src="https://i.ibb.co/HK2KJkn/mobile-phone-with-digital-gps-navigation-map-with-point-mobile-gps-navigation-app-touch-screen-smart.png" /> */}
    <div>
      <div>
      <h1 className="text-2xl font-bold text-[#0f766e]">Choose your preferred option</h1>
      <p className="py-6">Budget tight? Use Send Car Light! <br /> AC who wants to travel? Use Send Car Plus.
</p>
       
      </div>
      <div>
      <h1 className="text-2xl font-bold text-[#0f766e]">Comfortable and affordable</h1>
      <p className="py-6"> Whippy car Plus offers you <br /> the convenience of traveling in a comfortable <br /> and affordable AC vehicle.</p>
       
      </div>
      <div>
      <h1 className="text-2xl font-bold text-[#0f766e]">Hassle free and fast</h1>
      <p className="py-6">You will get your car ride <br /> very quickly without any hassle with <br /> just a few clicks. </p>
      <button className="btn bg-[#0f766e] text-white">View Details</button>
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Instructions;
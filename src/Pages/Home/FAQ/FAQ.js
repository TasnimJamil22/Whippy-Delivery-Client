import React from 'react';

const FAQ = () => {
    return (
        <div className='py-20 px-10 bg-teal-50 rounded-lg'>
            <h1 className='text-4xl text-center p-10 font-bold text-[#14b8a6]'>Our <span className='text-[#0f766e]'>Facilities</span></h1>
             <div className="join join-vertical w-full grid lg:grid-cols-2 gap-6">
  <div className="collapse collapse-arrow join-item border border-base-300 shadow-lg bg-teal-100">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    Daily Pick up, No limitations
    </div>
    <div className="collapse-content"> 
      <p>Whippy Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300 bg-teal-100">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Cash on Delivery
    </div>
    <div className="collapse-content"> 
      <p>At Whippy Delivery Courier we will collect the cash on behalf of you. Our trusted delivery man will deliver your parcel to your customer and collect the money. And then with our various payment methods we will give your money back to you. Also we are giving you the opportunity of sending a non-conditioned parcel to delivery as well.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300 bg-teal-100">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Online Management
    </div>
    <div className="collapse-content"> 
      <p>With our simple and easy to use user interface you can get all the information you need in your own user dashboard. You can view your user dashboard to stay updated. Whether it’s about a parcel or payment, you can get all of your information with just simple clicks.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300 bg-teal-100">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Advanced Customer Service
    </div>
    <div className="collapse-content"> 
      <p>Our Call Center Executives are always ready 24/7 to help you with your problems. They are fast, well trained, reliable and always ready to solve your problems. Also you can contact us on our Facebook page as well. Our Facebook page admins are always active to give you feedbacks.</p>
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default FAQ;
import React, { useState } from 'react';

const AddService = () => {
    const [addService,setAddService] = useState([]);
    

    const handleAddService = event =>{
        
        const form = event.target;
        const service = form.service.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        console.log(service,price,image,description);
        const newService = {service,price,image,description};
         
        fetch('https://node-server-iatejyv2i-tasnimjamil22.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(newService)
            
        })
        event.preventDefault();
        form.reset();
        
       

    }
    return (
        <div className='bg-emerald-50'>
           <h1 className='text-4xl font-bold text-[#14b8a6] text-center p-5'>Add a Service</h1>
            <div className="hero min-h-screen ">
           
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleAddService} className="card-body w-96">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="service name" name='service' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" placeholder="price" name='price' className="input input-bordered" required />
           
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">image</span>
          </label>
          <input type="text" placeholder="image" name='image' className="input input-bordered" required />
           
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
           <textarea name="description" id="" cols="3" rows="3"></textarea>
           
        </div>

         
        <div className="form-control mt-6">
          <input type="submit" value="Add Service" className="btn btn-outline btn-accent  " />
          {/* <button className="btn btn-outline btn-accent">Add Service</button> */}
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddService;
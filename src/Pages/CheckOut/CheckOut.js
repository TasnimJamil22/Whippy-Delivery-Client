import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const checkout = useLoaderData();
    const {_id,service,image,price,description} = checkout; 

    const handleCheckOut = e => {
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const address = form.address.value;
        const phone = form.phone.value;
        console.log(name);
         
        const order = {
          name,
          email,
          date,
          address,
          phone,
          price,
          service,
          image,
          description,
          service_id :_id
        }
        fetch('https://whippy-delivery-server-s.onrender.com/checkout',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(res=> {
            console.log(res);
            if(res.insertedId){
              alert('Added Successfully to orders')
            }
        })
        e.preventDefault();
        form.reset();

      }

    return (
         <div className="hero min-h-screen  ">
                
                <div className="hero-content flex-col lg:flex-row-reverse w-4/5">
                    
                  <div className="card shrink-0 w-full  shadow-2xl   "> 
                      <h1 className='text-3xl text-[#14b8a6] pt-5 mx-auto sm:p-6'>Service Name: {service}</h1>
                      <p className='text-1xl text-[#14b8a6] py-5 mx-auto sm:p-6 text-center' > <img src={image} className='w-28 mx-auto' alt="" /> {description}</p>
                    <form onSubmit={handleCheckOut} className="card-body">
                      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6 '>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text"    defaultValue={user?.displayName} name='name' className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email"  defaultValue={user?.email} name='email' className="input input-bordered" required />
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="date" name='date' className="input input-bordered" required />
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$'+ price} className="input input-bordered" required />
                         
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="address" name='address' className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Phone No:</span>
                        </label>
                        <input type='text' placeholder="phone no" name='phone' className="input input-bordered" required />
                      </div>
                      </div>
                      <div className="form-control mt-6   center">
                          {/* <Link to='/myOrders' className='btn  btn-accent btn-outline'></Link> */}
                            <input type="submit" value="CheckOut" className='btn btn-accent btn-outline'/>
                        {/* <button className="btn btn-primary">CheckOut</button> */}
                      </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            
        
    );
};

export default CheckOut;
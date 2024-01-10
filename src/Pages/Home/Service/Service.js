import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({s}) => {
    const {_id,service,price,image,description} = s;
    return (
        <div>
            <div className="card card-compact  h-96 bg-base-100 shadow-xl pt-10 px-5">
  <figure><img src={image} alt="Shoes" className='w-40  rounded-lg' /></figure>
  <div className="card-body">
    <h2 className="card-title">{service}</h2>
    <p>{description}</p>
    <p className='font-bold text-1xl'>Price: ${price}</p>
     <Link to={`checkout/${_id}`}> <button className="btn btn-outline btn-accent">Book Now</button></Link>
    </div>
  </div>
</div>
         
    );
};

export default Service;
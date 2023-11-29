import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServices(data);
        })
    },[])
    
    
    return (
        <div className=' bg-emerald-50  p-5 rounded-lg'>
             <h1 className='text-4xl text-center p-20 text-[#14b8a6] font-bold'>Our <span className='text-teal-700'>Services</span></h1>
             <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  '>
            {
                services.map(service => 
                    <Service
                    key={service._id}
                    s={service}>
                        
                    </Service>
                )
            }
             </div>


        </div>
    );
};

export default Services;
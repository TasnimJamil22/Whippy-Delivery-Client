 import React, { useEffect, useState } from 'react';

 import {useLoaderData} from 'react-router-dom';
import Row from './Row';
 
 const ManageOrders = () => {
     const [orders,setOrders] = useState([]);
    //  const allOrders = useLoaderData();
    //  const {_id,name,email,price,service,image,description}= allOrders;

    useEffect(()=>{
      fetch('https://whippy-delivery-server-s.onrender.com/manage')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrders(data);
      })
    },[])

    const handleDelete = id =>{
      const proceed = window.confirm('Are you sure you want to delete?');
      if(proceed){
      fetch(`https://whippy-delivery-server-s.onrender.com/checkout/${id}`,{
        method:'DELETE'
        })
      .then(res=>res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          alert('Deleted Successfully');
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining);
        }
      })
    }
    }

    const handleStatus = id => {
        fetch(`https://whippy-delivery-server-s.onrender.com/manage/${id}`,{
           method:'PATCH',
           headers:{
            'content-type': 'application/json'
           },
           body: JSON.stringify({status:'confirmed'})
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            //update status
            const remaining = orders.filter(order => order._id !== id);
            const updated = orders.find(order => order._id === id);
            updated.status = 'confirmed';
            const newOrders = [updated, ...remaining];
            setOrders(newOrders);
          }
        })

    }
     
    
    return (
        <div className="overflow-x-auto">
        <table className="table">
 {/* head */}
 <thead className='bg-teal-600 text-teal-50'>
   <tr>
     <th> </th>
      <th>Image</th>
     <th>Name</th>
     <th>Email</th>
     <th>Service</th>
     <th>Price</th>
     <th>Date</th>
     <th>Status</th>
   </tr>
 </thead>
 <tbody className='bg-teal-100'>
   {/* row 1 */}
  
 
  {
     orders.map(row => <Row
       key ={row._id}
       row={row}
       handleDelete ={handleDelete}
       handleStatus={handleStatus}
     >

     </Row>  
      
      
     )
   }
   
</tbody>
  
 
</table>
</div>
    );
 };
 
 export default ManageOrders;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import OrdersRow from './OrdersRow';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const [orders,setOrders] = useState([]);
    const url= `http://localhost:5000/checkout?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            setOrders(data);
        })
    },[])

    const handleDelete = id =>{
      const proceed = window.confirm('Are you sure you want to delete?');
      if(proceed){
      fetch(`http://localhost:5000/checkout/${id}`,{
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


    return (
          <div className="overflow-x-auto">
           <table className="table">
    {/* head */}
    <thead>
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
    <tbody>
      {/* row 1 */}
     
    
     {
        orders.map(order => <OrdersRow
        key={order._id}
        order={order}
        handleDelete={handleDelete}
        ></OrdersRow>)
      }
        
        
       
      
    </tbody>
     
    
  </table>
</div>
        
    );
};

export default MyOrders;
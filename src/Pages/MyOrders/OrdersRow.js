import React from 'react';

const OrdersRow = ({order,handleDelete}) => {
    const {_id,name,email,address,phone,image,service,price,date,status} = order;
    return (
        
             <tr>
          <th><button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-outline btn-sm"  >
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
</th>
        <td>
          
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                <img src= {image} alt=''/>
              </div>
            </div>
            
            
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{address}</div>
            </div>
        </td>
        <td>
          {email}
          <br/>
          <span className="badge badge-ghost badge-sm">{phone}</span>
        </td>
        <td>{service}</td>
        <td>${price}</td>
        <td>{date}</td>
        
        
        <th>
        {
          status === 'confirmed' ? <span className='text-teal-600 font-bold'>Confirmed</span> :
          <span>Pending</span>
        }
      </th>
        
        {/* <th>
          <button className="btn btn-ghost btn-xs">{status}</button>
        </th> */}
       
             </tr>
        
    );
};

export default OrdersRow;
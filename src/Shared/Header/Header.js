import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
   const handleLogOut =() =>{
    logOut();
   }
    const menuItems = <>
   <Link to='/'> <li className='mx-3 font-medium'>Home</li></Link>
   
   
   {/* <Link to='/login'> <li className='mx-3 text-orange-50 font-medium'>Login</li></Link> */}
   {/* <Link to='/'> <li className='mx-3 text-orange-50 font-medium'>Home</li></Link> */}
  {
    user?.email? <>
    <Link to='/myOrders'><li className='mx-3 lg:text-emerald-50 font-medium'>My Orders</li></Link>
    <Link to='/addservice'><li className='mx-3 lg:text-emerald-50 font-medium'>Add a new Services</li></Link>
    <Link to='/manage'><li className='mx-3 lg:text-emerald-50 font-medium'>Manage All</li></Link>
    <li className='text-emerald-50 pl-5 font-bold'>Welcome {user.email}</li>
    <button onClick={handleLogOut} className='btn btn-sm bg-emerald-50 lg:text-[#0f766e] pl-5 font-bold'>Log Out</button>
    
    </>
    
    :
    <button className='btn btn-sm bg-emerald-50 lg:text-[#0f766e] pl-5 font-bold  '><Link to='/login' >Login</Link> </button>
    }
 </>
    return (
        <div className="navbar  bg-[#14b8a6] lg:text-emerald-50 sm:text-emerald-800 rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
      {/* <img className='w-2/5' src="https://i.ibb.co/yfDhhpF/logo.png" alt="" />*/}
      <h3 className='text-emerald-50'>Whippy</h3>
      </a> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn bg-gradient-to-l bg-rose-700 text-white border-none">Order Now</a> */}
  </div>
</div>
    );
};

export default Header;
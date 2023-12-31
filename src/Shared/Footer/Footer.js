import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10   text-base-content  bg-[#14b8a6] text-emerald-50 rounded-lg">
  <aside>
     {/* <img className='w-3/5' src="https://i.ibb.co/yfDhhpF/logo.png" alt="" /> */}
     <h1 className='text-emerald-50 text-2xl'>Whippy</h1>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;
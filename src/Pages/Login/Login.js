import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import {useLocation,useNavigate} from 'react-router-dom';

const Login = () => {
  const {login} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    const user = {email: email, password};

    login(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      navigate(from, {replace:true})
    })
    
  }
    return (
        <div className="hero min-h-screen  mx-auto  bg-emerald-50    ">
  <div className="hero-content flex-col lg:flex-row-reverse   ">
    <div className="text-center lg:text-left  ">
      <h1 className="lg:text-4xl font-bold font text-emerald-400 "> <span className='text-[#14b8a6]'>Login</span> now!</h1>
      <p className="py-6 text-4xl text-[#14b8a6]"> ᵂᵉˡᶜᵒᵐᵉ ᵗᵒ ᵂʰⁱᵖᵖʸ ᴰᵉˡⁱᵛᵉʳʸ! </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          
          <input type="email" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        {/* <button className="btn bg-gradient-to-r from-amber-400 to-rose-500 text-white">Login</button> */}
          <input type="submit" className="btn  bg-[#14b8a6] text-emerald-50 hover:bg-emerald-300" value="Login" />
        </div>
        <p>New to Whippy? <Link to='/signup' className='text-emerald-700'>Sign Up</Link> </p>
      </div>
      
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;
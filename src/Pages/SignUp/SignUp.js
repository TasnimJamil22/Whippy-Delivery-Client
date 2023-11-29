import React, { useContext } from 'react';
 
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import {useLocation,useNavigate} from 'react-router-dom';
 

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

   

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        const user = {email, password};

        createUser(email,password)
        .then(result => 
          { 
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from,{replace:true});
             }
          )
          .catch(err=> console.log(err));

        
      }
    return (
      <div className="hero min-h-screen  mx-auto px-20 font bg-orange-50  ">
      <div className="hero-content flex-col lg:flex-row-reverse   ">
        <div className="text-center lg:text-left  ">
          <h1 className="text-5xl font-bold font">Sign Up</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp}>
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
              
            </div>
            <div className="form-control mt-6">
            {/* <button className="btn bg-gradient-to-r from-amber-400 to-rose-500 text-white">Login</button> */}
              <input type="submit" className="btn bg-gradient-to-l from-rose-950 text-red-100" value="Sign Up" />
            </div>
            <p>Already have an account?<Link to='/login' className='text-rose-700'>Login</Link> </p>
          </div>
          
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const notify = () => toast("Login form submitted!!");
    const notify1 = () => toast("Login to stayHomely  ");

    let [email,setEmail]= useState("");
    let [pwd,setPwd]= useState("");

let handleEmail = event =>{

  setEmail(event.target.value);
}
let handlePwd = event =>{

  setPwd(event.target.value);
}
    useEffect(()=>{
      notify1();
    },[])

  return (
    <div>
        <ToastContainer />
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center sm:w-1/4 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" method='post' action='/api/auth/login'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='mail' onChange={handleEmail} value={email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" onChange={handlePwd} name='pwd' value={pwd} className="input input-bordered" required />
          <label className="label">
            <NavLink to="/forgot" className="label-text-alt link link-hover">Forgot password?</NavLink>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={notify} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

import React, { useState } from 'react'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const notify1 = () => toast("Create your Account ");
  const notify2 = () => toast("Your form is submitted ");

  

  useEffect(()=>{
    notify1();
  },[])


  let [data,setData] = useState({});

  let handle = (ev)=>{
    let whoChange = ev.target.name;
    let whatChange = ev.target.value;

    setData(pre => ({...pre,[whoChange]:whatChange}))
  }

  let formSubmit = (ev)=>{
      // ev.preventDefault();
      notify2();
      console.log(data)


  }
  return (
    <div>
      <ToastContainer/>
     <div className="hero  bg-base-200">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <div className="text-center  lg:text-left">
      <h1 className="text-5xl font-bold">SignUp Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-11/12 sm:w-4/6    shadow-2xl bg-base-100">
      <form className="card-body " onSubmit={formSubmit} method='post' action='/api/auth/signup'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="abc@gmail.com" onChange={handle} name='mail' value={data.mail || "" } className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Muskan Bharti" onChange={handle} name='fname' value={data.fname || "" } className="input input-bordered" required />
        </div><div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Mus****" onChange={handle} name='pwd' value={data.pwd || "" } className="input input-bordered" required />
        </div><div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Mus***" onChange={handle} name='cpwd' value={data.cpwd || "" } className="input input-bordered" required />
        </div><div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input type="number" min="18" max="80" placeholder="23" onChange={handle} name='age' value={data.age || "" } className="input input-bordered" required />
        </div>
        
        
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        
      </form>
    </div>
  </div>
</div> 
    </div>
  )
}

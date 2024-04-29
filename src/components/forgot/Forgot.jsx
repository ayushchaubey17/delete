import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Forgot() {
  let notify= ()=>{
    toast("password forgoted");
  }
  return (
    <div>
        <ToastContainer />
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center sm:w-1/4 lg:text-left">
      <h1 className="text-5xl font-bold">Forgot Your Password</h1>
      <p className="py-6">Don't Worrry I am here to sort your password and hope it will make a use to you.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" method='post' action='/api/auth/forgot'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='mail' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="password" placeholder="password"  className="input input-bordered" required />
         
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input type="number" placeholder="11"  className="input input-bordered" required />
         
        </div>

        <div className="form-control mb-6">
          <button onClick={notify} className="btn btn-primary">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

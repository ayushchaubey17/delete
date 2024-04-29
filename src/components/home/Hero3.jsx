import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hero3() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.pexels.com/photos/4819076/pexels-photo-4819076.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Searching for it</h1>
      <p className="py-6">Make your all Listings here for everyOne </p>
      <button className="btn btn-primary"><NavLink to="/login">Login Here </NavLink></button>
    </div>
  </div>
</div>
    </div>
  )
}

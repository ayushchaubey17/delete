import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hero2() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://images.pexels.com/photos/531234/pexels-photo-531234.jpeg?auto=compress&cs=tinysrgb&w=800" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ">Just Go through it</h1>
      <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary"><NavLink to="/signup">Create your Account</NavLink></button>
    </div>
  </div>
</div>
    </div>
  )
}

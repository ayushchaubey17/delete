import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hero1() {
  return (
    <div>
     <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&w=800)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello by StayHomely</h1>
      <p className="mb-5">You can personalize your listings and purchase your listings. My purpose is to make its so adventurus and valuable.
      </p>
      <button className="btn btn-primary"><NavLink to="/list">Get Started</NavLink></button>
    </div>
  </div>
</div> 
    </div>
  )
}

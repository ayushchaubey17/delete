import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AddListing({mydata,id}) {
  return (
    <div>
     <div className="hero h-96  bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md">
  <div className="hero-content text-center text-white ">
    <div className="max-w-md">
      <h1 className="text-2xl text-purple-100 font-bold">Welcome {mydata.fname}</h1>
      <p className="py-6">Here you can just create your own listings and  manupulate it....</p>
      <button className="btn btn-secondary"><NavLink to={`/createlist/${id}`}>Create Your Listings</NavLink></button>
    <br />
      {/* <button className="btn font-bold btn-success my-4"><NavLink to="/showlist">Show Your Listings</NavLink></button> */}
    </div>
  </div>
</div> 
    </div>
  )
}

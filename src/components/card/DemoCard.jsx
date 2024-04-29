import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DemoCard() {
  return (
    <div>
      <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
  <figure className="pt-10">
    <img src="https://plus.unsplash.com/premium_photo-1686090450346-f418fff5486e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5iJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Chennai new place </h2>
    <p>Stay your evenening good here</p>
    <div className="card-actions">
      <button className="btn btn-primary"><NavLink to="/date">Book Now</NavLink></button>
    </div>
  </div>
</div>
    </div>
  )
}

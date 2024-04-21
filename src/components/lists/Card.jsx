import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Card({el}) {




  return (
    <div>
      <div className="card w-11/12 mx-auto sm:w-96  glass">
  <figure><img src={el.image} className='h-96 w-full' alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{el.title}</h2>
    <p>{el.location}</p>
    <p>&#8377; {el.price}</p>
    
    <div className="card-actions justify-end">
      <button  className="btn btn-primary" > <NavLink to={`/cardOne/${el._id}`}>Visit Now</NavLink></button>
      {/* <button className="btn btn-primary">Learn now!</button> */}
    </div>
  </div>
</div>
    </div>
  )
}

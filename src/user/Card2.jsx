import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Snacbar from './SnacBar';
import axios from 'axios';


export default function Card2({el,id}) {

let no ="bg-white text-orange-300";
let yes = "bg-red-600 text-white"

  let [isLiked,setLiked] = useState(false);
let wishlist = ()=>{
setLiked(!isLiked);

axios.post(`/api/wishlist/${el._id}/${id}`)
.then((res)=>{
console.log(res)
})
.catch((er)=>{
  console.log("not sasved")
});

}


  return (
    <div>

      
      <div className="card w-11/12 mx-auto sm:w-96  glass">
      <div className={ `w-fit  space-x-1 ${isLiked?yes:no} transition-all duration-700 px-2 py-1 rounded-lg  absolute right-2 top-1  z-30`}>
     <div className='  font-bold'>
      <button onClick={wishlist}>
        <Snacbar isLiked={isLiked} />
        </button>
      </div>

    </div>
  <figure><img src={el.image} className='h-96 w-full' alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{el.title}</h2>
    <p>{el.location}</p>
    <p>&#8377; {el.price}</p>
    
    <div className="card-actions justify-end">
      <button  className="btn btn-primary" > <NavLink to={`/cardOne/${el._id}`}>See More</NavLink></button>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

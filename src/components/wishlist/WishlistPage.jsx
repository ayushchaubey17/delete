import React from 'react'

export default function WishlistPage({ele,price,setPrice}) {

    
  return (
    <div>
      <div className="card w-11/12 mx-auto sm:w-96  glass">
  <figure><img src={ele.image} className='h-96' alt="car!"/></figure>
  <div className="card-body ">
    <h2 className="card-title">{ele.tile}</h2>
    <p>{ele.description}</p>
    <p className='font-bold'>price: {ele.price}</p>
    <p className='font-bold'>location: {ele.location}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

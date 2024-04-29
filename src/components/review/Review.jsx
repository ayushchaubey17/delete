import React from 'react'
import Review2 from './Review2'
import Review3 from './Review3'
import Review5 from './Review5'
import Tr from '../typeWriter/Tr'

export default function Review() {
  return (
    <div className='bg-zinc-100'>
   <Tr/>
<h1 className='text-center  mb-2 text-2xl  font-semibold'>post your review here</h1>
      <Review2/>

      <div className="mb-6"></div>
      <hr />
<hr />

<h2 className=" text-center text-2xl mt-4 font-semibold">Our Customer Reviews</h2>
    <Review3/>

      <hr /><hr />
      <h2 className=" text-center text-2xl mt-4 font-semibold">What we Achieved...</h2>
 <Review5/>
    </div>
  )
}

import React, { useState } from 'react'

export default function Review2() {

    let [name,setName] = useState("");
    let [email,setMail] = useState("");
    let [review,setReview] = useState("");

    let handleName = (ev)=>{
        setName(ev.target.value)
    }

    let handleEmail = (ev)=>{
        setMail(ev.target.value)
    }

    let handleReview = (ev)=>{
        setReview(ev.target.value)
    }


  return (
    <form method='post' action='/api/review' className='space-y-2 w-11/12 mx-auto'>
      <label className="input input-bordered flex items-center gap-2">
  Name
  <input type="text" onChange={handleName} name='name' value={name} className="grow" placeholder="Muskan " required />
</label>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="email" onChange={handleEmail} value={email} name='email' className="grow" placeholder="Muskan123@gmail.com" required />
</label>



<textarea name='review' onChange={handleReview} value={review} className="textarea w-full border-2 border-gray-300" placeholder="your feedback"></textarea>

{/* <div className="rating rating-md    ">
<h1>Rate us:   </h1><input type="radio" name="rating-1" className="rating-hidden" />
  <input type="radio" name="rating-1" className="mask mask-star-2" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2"  />
  <input type="radio" name="rating-3" className="mask mask-star-2" />
  <input type="radio" name="rating-4" className="mask mask-star-2" />
  <input type="radio" name="rating-5" className="mask mask-star-2" />
</div> */}
<br />
<button className='btn my-4 btn-success font-bold text-white w-fit'>Post your Review</button>
     </form>
  )
}

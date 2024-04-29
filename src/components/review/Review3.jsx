import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Review4 from './Review4';

export default function Review3() {
 
    let [review ,setReview] = useState([]);

let fetchReview = ()=>{
    axios.get('/api/review/get').then(
        (resp)=>{
            console.log(resp.data);
            setReview(pre => [...resp.data] )
        }
    )
    .catch();
}

 useEffect(()=>{
 fetchReview();
 },[]);

  return (
    <div>
        {
            review.map(el => <Review4 el = {el} />)
        }
      
    </div>
  )
}

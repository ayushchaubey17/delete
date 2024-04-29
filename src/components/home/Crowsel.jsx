import React from 'react'
let url1 = "https://images.pexels.com/photos/4819658/pexels-photo-4819658.jpeg?auto=compress&cs=tinysrgb&w=800";

let url2 = "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=800";
let url3 = "https://images.pexels.com/photos/7031414/pexels-photo-7031414.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" ;
let url4 = "https://images.pexels.com/photos/7031404/pexels-photo-7031404.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" ;
export default function Crowsel() {
  return (
    <div>
       <p className="   text-center  font-bold text-red-900">The Most Attractive Website I provide you</p>

      <div className="carousel w-full sm:h-96">
  <div id="item1 " className="carousel-item w-full">
    <img src={url1} className="w-full " />
     </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={url2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={url3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={url4} className="w-full" />
  </div>
</div> 

      
       </div>
  )
}

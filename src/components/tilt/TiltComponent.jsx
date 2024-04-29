import React from 'react'
import Tilt from "react-parallax-tilt";
import { NavLink } from 'react-router-dom';

 
const TiltComponent = () => {
    return (
       <div className="w-11/12 mx-auto">
<Tilt glareEnable={true} tiltMaxAngleX={9} 
        tiltMaxAngleY={9} perspective={900} 
        glareColor={"rgb(255,0,0)"}>
            <div className='tiltComponent  '>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlZWRiYWNrfGVufDB8fDB8fHww)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello HomelyStay User's</h1>
      <p className="mb-5">Your Feedback makes us so Confidential.</p>
      <button className="btn btn-primary"><NavLink to="/review">Add your Review now</NavLink></button>
    </div>
  </div>
</div>
            </div>
        </Tilt>
       </div>
       
        
    )
}
 
export default TiltComponent;
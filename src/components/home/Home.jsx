import React from 'react'
import Crowsel from './Crowsel'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Logo from './Logo'
import Hero3 from './Hero3'

export default function Home() {
  return (
   <div className="">
     <div>
      <Crowsel/>
      
    </div>
    <div className="my-10">
      <Hero1/>
    </div>


    <div className="my-10">
      <Hero2/>
    </div>

    <div className="my-10">
      <Hero3/>
    </div>

<Logo/>


   </div>
  )
}

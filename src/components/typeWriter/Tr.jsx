import React from 'react'
import Typewriter from "typewriter-effect";


export default function Tr() {
  return (
    <div>
       <div className='text-center font-bold text-2xl text-blue-500' >
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcoming yours")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("stay connected with us...")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("||HomelyStay|")
                        .start();
                        
                }}
            />
        </div>
    </div>
  )
}

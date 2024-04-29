import React, { useState } from 'react'

export default function Page() {
    let [act1,setAct1]= useState(true);
    let [act2,setAct2]= useState(false);
    let [act3,setAct3]= useState(false);
    let [act4,setAct4]= useState(false);

    let click1= ()=>{
        setAct1(true);
        setAct2(false);
        setAct3(false);
        setAct4(false);
    }
    let click4= ()=>{
        setAct1(false);
        setAct2(false);
        setAct3(false);
        setAct4(true);
    }

    let click2= ()=>{
        setAct1(false);
        setAct2(true);
        setAct3(false);
        setAct4(false);
    }

    let click3= ()=>{
        setAct1(false);
        setAct2(false);
        setAct3(true);
        setAct4(false);
    }
    
  return (
    <div>
      <div className="join">
  <button onClick={click1}  className={`join-item btn ${act1?"btn-active":""}` }>1</button>
  <button onClick={click2} className={`join-item btn  ${act2?"btn-active":""}`}>2</button>
  <button onClick={click3} className={`join-item btn  ${act3?"btn-active":""}`}>3</button>
  <button onClick={click4} className={`join-item btn  ${act4?"btn-active":""}`}>4</button>
</div>
    </div>
  )
}

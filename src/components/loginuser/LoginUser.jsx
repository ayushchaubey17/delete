import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoginAvtar from './LoginAvtar';

export default function LoginUser({islogin,setLogin}) {
    let para = useParams();
    
      setLogin(true);



   
  
    console.log(islogin)

  return (
    <div>
    <LoginAvtar id={para.id}/>
    </div>
  )
}

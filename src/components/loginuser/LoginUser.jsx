import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero2 from '../home/Hero2';
import LoginAvtar from './LoginAvtar';

export default function LoginUser({isLogin,setLogin}) {
    let para = useParams();
    useEffect(()=>{setLogin(true);},[]);

  return (
    <div>
    <LoginAvtar/>
    </div>
  )
}

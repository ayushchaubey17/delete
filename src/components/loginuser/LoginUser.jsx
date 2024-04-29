import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import LoginAvtar from './LoginAvtar';
import AddListing from './AddListing';

export default function LoginUser({islogin,setLogin}) {

  let para = useParams();
  
let [mydata,setMyData] = useState({});

  let fetchdata = async ()=>{
    axios.get(`/api/user/${para.id}`).then(
        (result)=>{
            
console.log(result.data)
            setMyData(pre=> ({...result.data}));
        }
    ).catch((er)=>{
        console.log(er)
    });
}


useEffect(()=>{
fetchdata();
},[]);

   
    
      setLogin(true);



   
  
    console.log(islogin)

  return (
    <div className='-mt-6 sm:-mt-10'>
    <LoginAvtar mydata={mydata} id={para.id} />

    <AddListing mydata={mydata} id={para.id}/>
    </div>
  )
}

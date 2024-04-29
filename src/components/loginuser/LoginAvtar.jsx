import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function LoginAvtar({id}) {


  let [mydata,setMyData] = useState({});

  let fetchdata = async ()=>{
      axios.get(`/api/user/${id}`).then(
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



  return (
    <div>
      <div className="hero  sm:min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="data:image/jpeg;base64,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" className=" rounded-full w-fit" />
    <div>
      <h1 className="text-5xl font-bold">Hello {mydata.fname}</h1>
      <h2 className="my-4 font-bold italic">username : {mydata.mail}</h2>
      <p className="py-6">Welcome to your profile page you can see your listings here as usual </p>
      <button className="btn btn-primary"><NavLink to={`/user/listing/${id}`}>See Listings</NavLink></button>
    </div>
  </div>
</div>
    </div>
  )
}

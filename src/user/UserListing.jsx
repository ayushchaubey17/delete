import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Card2 from './Card2';
import Page from './Page';

export default function UserListing() {
    let par = useParams();


    let [mydata,setMyData] = useState({});
    let [data,setData] = useState([]);

    const notify = () => toast(`welcome to HomelyStay`);
  
    let fetchdata = async ()=>{
        axios.get(`/api/user/${par.id}`).then(
           async (result)=>{
                console.log(result.data)
           setMyData(pre=> ({...result.data}));
              notify();
              
            }
        ).catch((er)=>{
            console.log(er)
        });
    }

    let fetchdata2 = async ()=>{
        axios.get('/api/lists').then(
            (result)=>{
                console.log(result.data)
                setData(pre=> [...result.data]);
            }
        ).catch((er)=>{
            console.log(er)
        });
    }
 
  useEffect(()=>{
    fetchdata();
    fetchdata2();
    
  
  },[]);

 

  return (
    <div>
         <ToastContainer />
         <h1 className='text-center font-bold text-2xl mb-4'>Welcome {mydata.fname}</h1>

         <button className='btn btn-success mx-4 mb-4'><NavLink to={`/wishlist/${par.id}`}>Your WishLists</NavLink></button>
      
      <div className="grid sm:grid-cols-3 grid-cols-1  sm:mx-20 gap-y-10 ">
      {data.map(el => <Card2 id={par.id} el={el}/>)}

 
      </div>
      <div className="flex justify-center my-4  ">

          
      <Page/>



      </div>
    </div>
  )
}

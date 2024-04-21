import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Card from './Card';

export default function Listing() {

let [data,setData] = useState([]);

    let fetchdata = async ()=>{
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
},[]);




  return (
    <div>
      <div className="grid sm:grid-cols-3 grid-cols-1  sm:mx-20 gap-y-10 ">
      {data.map(el => <Card el={el}></Card>)}


      </div>
    
      
    </div>
  )
}

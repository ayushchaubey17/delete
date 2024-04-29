import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import WishlistPage from './WishlistPage';
import ScrollIntoView from 'react-scroll-into-view';


export default function Wishlist() {

 let [items,updateItemsTOData] = useState({});
 let [data,setData] = useState([]);
    let par1 = useParams();

    let fetchdata = async ()=>{
        axios.get(`/api/wishlist/${par1.id}`).then(
            (result)=>{
                console.log(result.data);
                updateItemsTOData((old)=> ({...old,...result.data}));
                
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
      <div>
        <h1 className="text-center font-bold my-4 bg-slate-700 text-white p-2 w-11/12 mx-auto rounded-md">Your Wishlist is here </h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-10 '>

       
        {
            
            
            
            items.itemsId?.map(el => {
                
                const uniqueKeyValue = el; // Unique key value you want to find

               const foundObject = data?.find(obj => obj._id === uniqueKeyValue);
            
               return(
                   
                <WishlistPage  ele = {foundObject}/>
                
               )
            })
        }
         </div>
        </div>
        <ScrollIntoView selector="#footer">
        <button className='mx-8 font-bold  sm:mx-14 my-4 p-3 text-white btn btn-secondary'><NavLink to={`/user/listing/${par1.id}`}>go to previous</NavLink></button>
        </ScrollIntoView>
    </div>
  )
}

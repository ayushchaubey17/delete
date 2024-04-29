
import { useEffect, useState } from 'react';
import { NavLink, useParams} from 'react-router-dom'
import axios from 'axios';
import SampleCard from './SampleCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Map from './Map';
import Dialouge from './Dialouge';
import SweetAlert from '../alerts/SweetAlert';

export default function SingleCard() {
   
  let param = useParams();
  let [mydata,setMydata] = useState({});

  let [images,showImages] = useState(false);
  let a="Show All images";
  let b = "Hide images"
  let [text,setText] = useState(a);
  let changeImage = ()=>{
    showImages(!images);
    setText(text===a?b:a)
  }

let fetching =async ()=>{
    axios.get(`/api/listOne/${param.id}`)
    .then((res=>{
     setMydata(pre=> ({...pre,...res.data}))
     console.log(mydata)
    })).catch(
      (er)=>{
        console.log(er)
      }
    );
}

  useEffect(()=>{
    fetching();
  },[])
 


  return (
    <div>
      
    
<SweetAlert/>

      <div className="card sm:card-side w-10/12 mx-auto border-2 bg-base-100 shadow-xl my-4">
      <div className=" w-fit flex space-x-1   absolute right-2 top-1  z-30">
     <div className='text-red-400 font-bold'>
      <button><Dialouge/></button></div>

    </div>
  <figure><img src={mydata?.image}className='' alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{mydata?.title}
    <div className="badge badge-secondary items-center py-3 mx-4">New
    </div>
    
    </h2>
    
<span className='font-bold '>{mydata?.location}</span>
    <p>{mydata?.description}
</p>
  

    <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star"  />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked/>
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>

  <div className="card-actions justify-end items-center">

    <p>price: <span className=' line-through'>&#8377;{mydata?.price}</span><span className='font-bold mx-2'>&#8377;{mydata?.price - (mydata?.price/20)}</span></p>
    
      <button onClick={changeImage} className="btn bg-blue-500 text-white font-bold"> {text} </button>
      
    </div>
  </div>
</div>

<div className={`${images?"":"hidden"}`}>

 <SampleCard/>
</div>

<div className="">
  <Map/>
</div>


<div className="flex justify-center">

<button className="btn btn-active bg-purple-600 w-fit text-white font-bold text-lg my-4 "><NavLink to="/list">Show All Card </NavLink></button>

</div>
    </div>
  )
}

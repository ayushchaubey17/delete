import React from 'react'
import { NavLink}  from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Dialog1 from './Dialog1';

let url1 = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
let url2 = "data:image/jpeg;base64,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"



export default function Drawer({islogin,setLogin}) {
  

  console.log(islogin)
  return (
    <div>
      <div className="drawer drawer-end z-50 bg-slate-600 mb-6">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex justify-between  py-2 items-center">
    {/* Page content here */}
   
    <label htmlFor="my-drawer-4" className="mx-4 px-2   drawer-button btn bg-none"><MenuIcon/></label>
    <h1 className="px-8 text-white font-bold text-xl ">HomelyStay</h1>
    <div className="w-10 rounded-full mr-4">
      <label htmlFor="my-drawer-4"><img alt="Tailwind CSS Navbar component"  className='rounded-full ' src={islogin?url1:url2} />
    </label>        </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className={`menu p-4 w-64 ${islogin?"hidden":""} min-h-full bg-base-200 text-base-content`}>
      {/* Sidebar content here */}
    <label htmlFor="my-drawer-4" className='drawer-button  drawer-overlay '  aria-label='close sidebar'></label>  <li ><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/login">login</NavLink></li>
      <li><NavLink to="/signup">SignUp</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/list">Listings</NavLink></li>
      <li><NavLink to="/review">Reviews</NavLink></li>
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    </ul>

    <ul className={`menu p-4 w-64 ${islogin?"":"hidden"} min-h-full bg-base-200 text-base-content`}>
      {/* Sidebar content here */}
      
      <li><h1><Dialog1 islogin={islogin} setLogin={setLogin}/></h1></li>
      <li><button className='font-semibold'><NavLink to="/mycart">your Cart</NavLink></button></li>
      
    </ul>
  </div>
</div>
    </div>
  )
}

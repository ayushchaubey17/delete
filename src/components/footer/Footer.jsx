import React from 'react'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScrollIntoView from 'react-scroll-into-view';
export default function Footer() {
  let goToTOp
  return (
    <div className='bg-base-300' >
  <footer className="footer p-10  text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
   <ScrollIntoView selector="#footer"> <NavLink onClick={goToTOp}   className={({isActive}) => isActive?"text-blue-500 font-bold":""} to="/">Home</NavLink></ScrollIntoView>
    <ScrollIntoView selector="#footer"> <NavLink onClick={goToTOp} className={({isActive}) => isActive?"text-blue-500 font-bold":""} to="/about">About us</NavLink></ScrollIntoView>
    <ScrollIntoView selector="#footer"> <NavLink onClick={goToTOp} className={({isActive}) => isActive?"text-blue-500 font-bold":""} to="/contact">Contact us</NavLink></ScrollIntoView>
    <a className="link link-hover" href='https://github.com/muskanbharti08'>projects</a>
    
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com/muskanbharti08" className=""><GitHubIcon/></a>
      <a href="mailto:muskan080202@gmail.com" className=""><MailIcon/></a>
      <a href="https://www.linkedin.com/in/muskanb8/" className=""><LinkedInIcon/></a>
       
       
    </div>
  </nav>


</footer>  
<div className="">
      <Divider>
        <Chip label="Developer" size="small" />
      </Divider>
      <h1 className="text-center font-bold text-gray-600 italic">Muskan Bharti</h1>
 </div>
    </div>
  )
}

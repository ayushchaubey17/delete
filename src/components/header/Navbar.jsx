import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


let url1 = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
let url2 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAngMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgEDBAUHAv/EADsQAAICAQIDBAcGAgsAAAAAAAABAgMEBRESITEGIkFxEzJRYYGRwRRCUqGx4TPRBxYlQ1NjZHKCkvD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5sshXBzsnGMF1lJ7JGBrmq1aRhu+xcU2+GuCfrM5vqep5ep2uzLtclv3YLlGPkvqB0DI7T6Rjtxllqcl4VxcvzS2Mb+uWlf6jz9H+5zwAdMo7T6RfJRjlqDf+JBx/PbY21Vtd1asqshOD6SjLdHHTIws7KwLPSYl06pePD0fmvEDroIDp3bHMpsSz4xvq35ySUZL5cmTumyNtULK5KUJJOMl4oD2AAAAAAAAAAAAAFGVKMDnvbnNeRqyx4vuY0OHr95839COmZqTnk6rmSScpStnLl7E39C5g6RlZnA4x4K5rfjl02A14JRHsxjbd/IucvHhUUv0L1XZ3Ah6/prP90/5bAREzcTS8zLa9FRJR8ZT7q/MmGPg4mO06ceEX+JLn8zIA57dXOm2dVi2nBtNHRexeQ7tBpjJtuqUq+fs33X5NEd7T6fxwWbUu9FJWJeK8H/AO+htuwD/szIj7LvogJSAAAAAAAAAAAAAAFnJvjRGMpJveW3ICE6RhwsyNSndHiUrpVc/Zvu/obzotktkuiMfGp9DfnRXqyyZTj5S2kv1MgAAAAAApJKUWpLdNbNPxKdjsdYtefTFbRjktR8tkejI02cMSvJnLm7bt0l492KA3AKJ7pMqAAAAAAAAAAAAwdU/gw3/H9GZxayKldTKD+HmBpNtt9gH15rZgAAAAAAcvEPn1fQF/Cq9Lck+kebA3EPUj5FQAAAAAAAAAAAAAADRXra+cfZJng2Wp1pVKaS34ubNaAAAAAADO0pd6x+5IwUt2l7Xsb6EIwW0YpeQHoAAAAAAAAAAAAAAAFnKq9LTKK69V5mlfJ7PqSA0OfdGOoWVySS5NP37AeQAAAPNk41x4pPZAZWFV6W+PLux5s3Bj4MIxxoSj9+Kk/ijIAAAAAAAAAAAAAAAKbms1nXcHSqZO+6DuS3hRGXek/Lw8wLev6zDTI1U1bTzMhqNNfn95+5GoyW53zlN8Tb5sjmiX36t2l+25cuKxKU9vCPLZJe5bkmtjtZLzA813TgtlzXsZeWVH70ZfAscI4QL0snl3I/Mx5OVj3k92euErsBlYetrFzcfBzGo1XwXoLeiUly4X+W3mSNM592vx99Jqt271di+T/fY2PZLtVTdjxw9UyIwyId2Flj2Vq8Oft/UCYg8qSaTi00+jR6AAAAAAABHu1+vvRcSEcdRllXb+j4ukUusmgN7ffVj1uy+yNcF1lN7JEb1LtvpuLvDE48uxfg5R3831+G5zrMzMnOt9LmXzun4Ob328vYWAN/qna7Vs9SjG5Y1T+7Ryf/AG6/oaGTcm3Jtt9W31KMASbsPDfKy7Pw1xXzf7EpujulIinYm5QzMmpvnZUpL/i/3JDmX5SXpMRRm483XJfxF7N/BgXdhsYuBqmLntwg3VeuUqLOUk/r8DO4fcwLex6rhvJJnjIvpxanZk2wqgvGT6+XtMPE1C3Pk7Mat1YkX6813rX7l4IC52kh6TRMpeyKa+DTOfk87RZChod7fWW1a82/5ECQGw03WtR0xr7JlWRgv7uT4o/Jkt0zt9XLaGp4zrfjZT3l8uv6kC8QB2fT9UwtSjxYWTXavFJ815rqZpwyLcZKUW4yT3Uk9mmTPsh2pyftdeBqNrtrtfDXbP1ovwTfimB0AFEVAozmX9IU5S7QqLe6hRFL3b7lQBGAAAfh5gADP0Scq9VxJR6uxRfvT5M6IuS2WwAEd7XYVCxVmxi45EZpcUXtv5kV+2ZUvWybnv8A5jAAzdBx46nqldOZKyyCXFs5Pn05eXMn8IQrUYwioxiklFLkkABFu28nF4tUeUJcUmva+n1ZFQAKfe+BUAAOOVffg9pR70X7GgAO5roVAA//2Q=="

export default function Navbar({islogin,setLogin}) {
  
  let handleLogout = ()=>{
    console.log(islogin)
    setLogin(pre => !pre);
    console.log(islogin)
  }
  
  return (
    <div className='bg-sky-300 w-full  mb-10'>
      <div className="navbar bg-base-600">
  <div className="flex-1  ">
    <a className="btn btn-ghost text-xl font-bold">HomelyStay</a>
  </div>

  {/* <label className="swap swap-rotate"> */}
  
  {/* this hidden checkbox controls the state */}
  {/* <input type="checkbox" className="theme-controller mx-6" value="" /> */}
  
  {/* sun icon */}
  {/* <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg> */}
  
  {/* moon icon */}
  {/* <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg> */}
  
{/* </label> */}

  <div className="flex-none gap-2">
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full online">
          <img alt="Tailwind CSS Navbar component" src={islogin?url1:url2} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-22">
       
       
       <div className={islogin?"hidden":""}>
       <li><NavLink to="/">Home</NavLink></li>
       
       <li>
          <NavLink to={"/login"} className="justify-between">
          login
           
          </NavLink>
        </li>
       <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/list">Listings</NavLink></li>
       </div>
        
    


<div className={islogin?"":"hidden"}>
  <li><button onClick={handleLogout}><NavLink to="/">logout</NavLink></button></li>
</div>
</ul>
</div>
  </div>
</div>
    </div>
  )
}

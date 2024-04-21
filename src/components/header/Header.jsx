import React from 'react'
import Drawer from './Drawer'
import Navbar from './Navbar'

export default function Header({islogin,setLogin}) {
  return (
    <div>
        <div className="sm:hidden">
        <Drawer islogin={islogin} setLogin={setLogin} />
        </div>
      <div className="hidden sm:block">

      <Navbar islogin={islogin} setLogin={setLogin}/>
      </div>
    </div>
  )
}

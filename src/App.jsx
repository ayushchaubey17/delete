
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Login from './components/Login/Login'
import Signup from './components/signup/Signup'
import Listing from './components/lists/Listing'
import SingleCard from './components/lists/SingleCard'
import LoginUser from './components/loginuser/LoginUser'
import SweetAlert from './components/alerts/SweetAlert'
import AiBot from './components/chat/AiBot'
import ScrollIntoView from 'react-scroll-into-view'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import About from './components/contact/About'


function App() {
  let [islogin,setLogin] = useState(false);
  return (
    <>
    <BrowserRouter>
    <div id="footer"></div>
    <Header  islogin={islogin} setLogin={setLogin}/>
<AiBot/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/list' element={<Listing/>}/>
          <Route path='/cardOne/:id' element={<SingleCard/>}/>
          <Route path='/loginUser/:id' element={<LoginUser islogin={islogin} setLogin={setLogin}/>}/>

        </Routes>


    <Footer/>
    <ScrollIntoView selector="#footer">
  <button className="fixed bottom-4 left-6 border-2 rounded-full p-1 bg-blue-400 text-white font-bold">
    <ArrowUpwardIcon/>
  </button>
</ScrollIntoView>

    </BrowserRouter>
     
    </>
  )
}

export default App

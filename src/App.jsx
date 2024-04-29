import "./App.css";
import { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import Listing from "./components/lists/Listing";
import SingleCard from "./components/lists/SingleCard";
import LoginUser from "./components/loginuser/LoginUser";
import AiBot from "./components/chat/AiBot";
import ScrollIntoView from "react-scroll-into-view";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import About from "./components/contact/About";
import UserListing from "./user/UserListing";
import Slide1 from "./components/card/Slide1";
import Wishlist from "./components/wishlist/Wishlist";
import Book from "./components/payDate/Book";
import Review from "./components/review/Review";
import Forgot from "./components/forgot/Forgot";
import CreateListing from "./components/createlisting/CreateListing";
import ShowListing from "./components/createlisting/ShowListing";


function App() {
  let [islogin, setLogin] = useState(false);
  return (
    <>
  
        <div id="footer"></div>
        <Header islogin={islogin} setLogin={setLogin} />

        <div className="">
          <AiBot />
        </div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/list" element={<Listing />} />
          <Route path="/cardOne/:id" element={<SingleCard />} />
          <Route
            path="/loginUser/:id"
            element={<LoginUser islogin={islogin} setLogin={setLogin} />}
          />
          <Route path="/user/listing/:id" element={<UserListing />} />
          <Route path="/wishlist/:id" element={<Wishlist/>} />
          <Route path="/mycart" element={<Slide1 />} />
          <Route path="/date" element={<Book />} />
          <Route path="/review" element={<Review />} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/createlist/:id" element={<CreateListing/>} />
          <Route path="/showlist" element={<ShowListing/>} />
          <Route path="*" element={<Home/>} />

        </Routes>

        <Footer />
        <ScrollIntoView selector="#footer">
          <button className="fixed bottom-4 left-6 border-6 rounded-full p-1 bg-blue-400 text-white font-bold">
            <ArrowUpwardIcon />
          </button>
        </ScrollIntoView>
      
    </>
  );
}

export default App;

import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import logo from "../assests/movix-logo.svg";
import ContentWrapper from "./ContentWrapper";
import { VscChromeClose } from 'react-icons/vsc';
export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  useEffect(()=>{
window.scrollTo(0,0)
  },[location])

  return (
    <>
    <div className={`fixed top-0 opacity-100  translate-y-0 w-full h-14 z-50 flex items-center`}>
     {!show && (
      <div className="w-[100%]  opacity-100 max-w-[1200px] mx-auto px-[20px] flex items-center justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer h-7 md:h-12"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="space-x-4 whitespace-nowrap md:space-x-9 items-center flex text-white font-medium">
            <li
              className={` cursor-pointer  ${
                pathMathRoute("/") && " text-red-700 font-bold"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={` cursor-pointer hidden md:flex border-b-[3px] hover:text-red-700 border-b-transparent ${
                pathMathRoute("/explore/movie") && " text-red-700 font-bold"
              }`}
              onClick={() => navigate("/explore/movie")}
            >
              Movies
            </li>
            <li
              className={` cursor-pointer hidden md:flex border-b-[3px] hover:text-red-700 border-b-transparent ${
                pathMathRoute("/explore/tv") && " text-red-700 font-bold"
              }`}
              onClick={() => navigate("/explore/tv")}
            >
              Tv Shows
            </li>
            <li
              className={` cursor-pointer border-b-[3px] hover:text-red-700 border-b-transparent ${
                pathMathRoute("/sign-in") && "text-red-700 font-bold"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
            <li className=" cursor-pointer hover:text-red-700">
              <HiOutlineSearch onClick={()=>{setShow(!show)}}/>
            </li>
            
          </ul>
        </div>
      </div>
      
     )}
    </div>
    {show && (
      <div className="searchBar flex items-center h-[40px] mt-[10px] w-full ">
      <div className="w-full z-50 items-center" >
        <form className="searchInput" onSubmit={()=>{navigate(`/search/${input}`);setShow(false)}}>
          <input type="text" className="w-full h-[50px] bg-white outline-none border-none px-[15px] text-[14px] md:h-[60px] md:text-[20px] md:px-[30px] relative top-0" onChange={(e)=>setInput(e.target.value)}
          placeholder="search for movie or tv Show ..." />
        </form> 
      </div>
      <div className=" cursor-pointer hover:text-red-700 z-50 absolute right-0 md:pr-44 pr-3">
              <HiOutlineSearch onClick={()=>{setShow(!show)}}/>
            </div>
    </div>
    )}
    </>
  );
}
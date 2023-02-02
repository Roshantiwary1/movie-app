import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {useState,useEffect} from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import { FetchDataFromApi } from "./utils/Api";
import Header from "./components/Header";
import { useDispatch,useSelector } from "react-redux";
import { getUrlConfiguration } from "./store/homeSlice";
function App() {

const dispatch = useDispatch();
const url = useSelector(state=>state.home.url)

  useEffect(()=>{
    apiTesting();
    console.log(url?.results);
  },[])

  const apiTesting =()=>{
    FetchDataFromApi('/movie/popular').then((res)=>{dispatch(getUrlConfiguration(res))
    })
   
  }
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
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
import Details from "./pages/Details";
import SearchDetail from "./pages/SearchDetail";
import Explore from "./pages/Explore";
import Footer from './components/Footer';
function App() {

const dispatch = useDispatch();
const url = useSelector(state=>state.home.url)

  useEffect(()=>{
    fetchApiConfiguration();
    console.log(url?.results);
  },[])

  const fetchApiConfiguration =()=>{
    FetchDataFromApi('/configuration')
    .then((res)=>{
      const url = {
          backdrop:res.images.secure_base_url + "original",
          poster:res.images.secure_base_url + "original",
          profile:res.images.secure_base_url + "original"
      }

      console.log(res.results);
      dispatch(getUrlConfiguration(url))
    })
   
  }
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/:mediaType/:id" element={<Details/>}/>
         <Route path="/search/:query" element={<SearchDetail/>}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        
        </Routes>
        <Footer/>
      </Router>
     
    </>
  );
}

export default App;
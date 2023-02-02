import { useState } from 'react';
import { useNavigate } from 'react-router';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContentWrapper from './ContentWrapper';
const HeroBanner = () => {
    const [background,setBackground] = useState("")
    const [input,setInput] = useState("")
    const navigate = useNavigate()
    const {data,loading} = useFetch("/movie/upcoming");

    const {url} = useSelector(state=>state.home)

    console.log(data)
    const searchMovieHandler = ()=>{
        navigate(`/search/${input}`)
    }

    useEffect(()=>{
        const bg = url.backdrop + data?.results[Math.floor(Math.random()*20)]?.backdrop_path
        setBackground(bg);
        console.log(bg)
    },[data?.results,url.backdrop])

  return (
    <div className='Herobanner w-[100%] h-[450px] flex items-center relative md:h-[700px] top-0 left-0  overflow-hidden'>
    {!loading && (<div className="backdrop_image w-[100%] h-[100%] absolute">
      <img src={background} className="w-[100%] h-[100%] opacity-50 object-cover" alt="cc"/>
    </div>)}

    <div className='opacityLayer w-[100%] h-[250px]'></div>

      <ContentWrapper className="wrapper">
        <div className="heroBannerContent flex flex-col items-center text-white text-center max-w-[800px]  relative mx-auto">
            <span className="titile text-[50px] font-bold mb-[20px] md:mb-0 md:text-[90px]">Welcome</span>
            <span className="subtitile text-[18px] font-medium mb-10 md:text-2xl">
                Millions Of Movies, Tv Shows to discover.
                Explore Now. 
            </span>
            <form onSubmit={searchMovieHandler} className="flex items-center w-[100%]">
                <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='search for a movie or tv show...' className='w-[90%] h-12 bg-white outline-0 border-0 rounded-l-full px-4 text-sm md:h-14 md:text-lg md:px-7 ' />
                <button className='w-[100px] md:w-[150px] h-12 md:h-14 bg-red-700 text-white outline-0 border-0 rounded-r-full cursor-pointer text-sm md:text-lg'>Search</button>
            </form>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner

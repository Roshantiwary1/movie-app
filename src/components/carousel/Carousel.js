import "./Carousel.scss"
import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../ContentWrapper";
import PosterFallback from "../../assests/no-poster.png"
import CircleRating from "../circleRating/CircleRating";
const Carousel = ({data,loading}) => {
    const carouselContainer = useRef()
    const {url} = useSelector(state=>state.home)
    const navigate = useNavigate()

    const Navigation = (dir) => {

    }

  return (
    <div className="carousel">
    <ContentWrapper>
        <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={()=>NavigationPreloadManager("left")}/>
        <BsFillArrowRightCircleFill className="carouselRighttNav arrow" onClick={()=>NavigationPreloadManager("right")}/>
        {!loading ? (
                <div className="carouselItems">
                    {data?.map(item=>{
                        const posterUrl = item.poster_path ?url.poster + item.poster_path : PosterFallback
                        return (
                            <div className="carouselItem" key={item.id}>
                                <div className="posterBlock">
                                    <img src={posterUrl} alt="adsad" />
                                    <CircleRating rating={item.vote_average.toFixed(1)}/>
                                </div>
                                <div className="textBlock">
                                    <span className="title">{item.title || item.name}</span>
                                    <span className="date">{dayjs(item.release_date).format("MMM,D,YYYY")}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
        ) : (
            <span>Loading...</span>
        )}
    </ContentWrapper>      
    </div>
  )
}

export default Carousel

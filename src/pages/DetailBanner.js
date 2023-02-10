import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import CircleRating from '../components/circleRating/CircleRating';
import PosterFallBack from "../assests/no-poster.png"
import ContentWrapper from '../components/ContentWrapper';
import "../style/DetailBanner.scss"
import dayjs  from 'dayjs';
import  {PlayIcon}  from '../components/Playbtn';
import VideoPopup from '../components/VideoPopUp';

const DetailsBanner = ({ video, crew }) => {
  
 const {mediaType,id} = useParams()

  const {data,loading} = useFetch(`/${mediaType}/${id}`)

  const {url} = useSelector(state=>state.home)

    const toHoursAndMinutes = (totalMinutes) => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
  const director = crew?.filter((f)=>f.job==="Director");
  const writer = crew?.filter((f)=>f.job==="ScreenPlay" || f.job==="Writer" || f.job==="Story");

  const [show , setShow] = useState(false)

  const [videoId,setVideoId] = useState(null)

  return (
      <div className="detailsBanner">
          {!loading ? (
              <div>
                <div className="backdrop-img">
                <img src={url.backdrop + data?.backdrop_path} alt="asdsad" />
                </div>
                <div className="opacity-layer"></div>
                <ContentWrapper>
                  <div className="content">
                    <div className="left">
                      {data?.poster_path ? <img className='posterImg' src={url.backdrop + data?.poster_path || url.backdrop + data?.backdrop_path} alt="we"/>:<img className='posterImg' src={PosterFallBack} alt ="ww"/>}
                    </div>
                    <div className="right">
                      <div className="title">
                        {`${data?.name || data?.title} (${dayjs(data?.release_date).format("YYYY")})`}
                      </div>
                      <div className="subtitle">
                        {data?.tagline}
                      </div>
                      <div className="row">
                        <CircleRating rating={data?.vote_average.toFixed(1)}/>
                        <div className="playbtn" onClick={()=>{setShow(true) ; setVideoId(video.key)}}>
                          <PlayIcon/>
                          <span className='text'>
                          Watch Trailer
                          </span>
                        </div>
                      </div>
                      <div className="overview">
                      <div className="heading">
                        Overview
                      </div>
                      <div className="description">
                        {data?.overview}
                      </div>
                      </div>
                      <div className='info'>
                      <div className="infoItem">
                        <span className='text bold'>
                          Status:{" "}
                        </span>
                        <span className="text">
                          {data?.status}
                        </span>
                      </div>

                    
                    
                      <div className="infoItem">
                        <span className='text bold'>
                          Release:{" "}
                        </span>
                        <span className="text">
                          {dayjs(data?.release_date).format("MMM D, YYYY" )}
                        </span>
                      </div>

                      <div className="infoItem">
                        <span className='text bold'>
                          Runtime:{" "}
                        </span>
                        <span className="text">
                          {toHoursAndMinutes(data?.runtime)}
                        </span>
                      </div>
                      </div>
                      {director?.length>0 && (
                        <div className="info">
                          <span className='text bold'>
                            Director:{" "}
                          </span>
                          <span className='text'>
                            {director?.map((d,i)=>(<span key={i}>
                              {d.name}
                              {director?.length-1 !== i && ", "}
                            </span>))}
                          </span>
                        </div>
                      )}
                      {writer?.length>0 && (
                        <div className="info">
                          <span className='text bold'>
                            Writer:{" "}
                          </span>
                          <span className='text'>
                            {writer?.map((d,i)=>(<span key={i}>
                              {d.name}
                              {writer?.length-1 !== i && ", "}
                            </span>))}
                          </span>
                        </div>
                      )}
                      {data?.created_by?.length>0 && (
                        <div className="info">
                          <span className='text bold'>
                            Creators:{" "}
                          </span>
                          <span className='text'>
                            {data?.created_by?.map((d,i)=>(<span key={i}>
                              {d.name}
                              {data?.created_by?.length-1 !== i && ", "}
                            </span>))}
                          </span>
                        </div>
                      )}
                      </div>
                  </div>
                  <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId}/>
                </ContentWrapper>
              </div>
          ) : (
              
             <h1 className='text-white'>Loading...</h1>
          )}
      </div>
  );
};

export default DetailsBanner
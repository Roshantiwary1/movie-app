import React from 'react'
import ContentWrapper from './ContentWrapper'
import "../style/Home.scss"
import useFetch from '../hooks/useFetch'
import Carousel from './carousel/Carousel'
const TopRated = () => {
    const {data,loading} = useFetch(`/movie/top_rated`)

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <Carousel data={data?.results} loading={loading}/>
      </ContentWrapper>
    </div>
  )
}

export default TopRated

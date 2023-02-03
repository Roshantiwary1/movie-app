import React from 'react'
import ContentWrapper from './ContentWrapper'
import "../style/Home.scss"
import useFetch from '../hooks/useFetch'
import Carousel from './carousel/Carousel'
const Trending = () => {
    const {data,loading} = useFetch(`/trending/all/week`)

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <Carousel data={data?.results} loading={loading}/>
      </ContentWrapper>
    </div>
  )
}

export default Trending

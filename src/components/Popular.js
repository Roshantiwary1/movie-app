import React from 'react'
import ContentWrapper from './ContentWrapper'
import "../style/Home.scss"
import useFetch from '../hooks/useFetch'
import Carousel from './carousel/Carousel'
const Popular = () => {
    const {data,loading} = useFetch(`/movie/popular/`)

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Whats Popular</span>
        <Carousel data={data?.results} loading={loading}/>
      </ContentWrapper>
    </div>
  )
}

export default Popular

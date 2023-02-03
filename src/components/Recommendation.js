import React from 'react'
import ContentWrapper from './ContentWrapper'
import "../style/Home.scss"
import useFetch from '../hooks/useFetch'
import Carousel from './carousel/Carousel'
const Recommended = () => {
    const {data,loading} = useFetch(`/trending/all/week`)

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Recommended</span>
        <Carousel data={data?.results} loading={loading}/>
      </ContentWrapper>
    </div>
  )
}

export default Recommended

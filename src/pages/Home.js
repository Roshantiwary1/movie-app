import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Popular from '../components/Popular'
import TopRated from '../components/TopRated'
import Trending from '../components/Trending'
const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home

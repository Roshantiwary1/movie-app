import React from 'react'
import DetailsBanner from './DetailBanner'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router';
import Recommended from './../components/Recommendation';
import Similar from '../components/SimilarMovies';
const Details = () => {
    const {mediaType,id} = useParams()

    const {data,loading} = useFetch(`/${mediaType}/${id}/videos`)
    const {data:credits,loading:creditLoading} = useFetch(`/${mediaType}/${id}/credits`)
  return (
    <>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew}/>
      <Similar/>
      <Recommended/>
    </>
  )
}

export default Details

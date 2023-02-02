import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGMyMzQ3ZjU3ZWUwMTQ2ZTQ5MzA5MGRjZjM2ZWYyMSIsInN1YiI6IjYzYTdlM2QxZTRiNTc2MDA3YTk2MzNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TVk93_nU76-OgoxFaJN8F0I75OAO8qGiMDN77ae8fC8"

const headers = {
    Authorization: "bearer "+ API_KEY
}

export const FetchDataFromApi = async (url,params)=>{
try {
    const {data} = await axios.get(BASE_URL+url,{
        headers,
        params,
    })
    return data;
 } catch (error) {
    console.log(error)
}
}
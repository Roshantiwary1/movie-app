import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const options = {
    Authorization: "bearer "+ API_KEY
}

export const FetchDataFromApi = async (url,params)=>{
try {
    const {data} = await axios.get(BASE_URL+url,{
        options,
        params,
    })
    return data;
 } catch (error) {
    console.log(error)
}
}
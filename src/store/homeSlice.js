import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'counter',
  initialState:{
    url:{},
    genres:{}
  },
  reducers: {
   getUrlConfiguration(state,action){
    state.url=action.payload
   },
   getGenres(state,action){
    state.genres=action.payload
   }
}})

// Action creators are generated for each case reducer function
export const {getUrlConfiguration, getGenres  } = homeSlice.actions

export default homeSlice.reducer
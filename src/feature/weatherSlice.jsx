import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchWeather = createAsyncThunk( 'weatherApi/fetch', async (lang) =>
{

    const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=damascus&lang=${lang}&units=metric&appid=1777ea28b60d3d5759939d0e2e3942ca`)

            const cityName=res.data.name;
            const number=Math.round(res.data.main.temp)
            const min=Math.round(res.data.main.temp_min)
            const max=Math.round(res.data.main.temp_max)
            const desc=res.data.weather[0].description
            const icon=res.data.weather[0].icon

            return({cityName,number,desc,min,max,icon})

})
export const weatherSlice = createSlice( {
    name: 'wether',
    initialState: {
        weather: {},
        isLoading:false,
    },
    reducers: {
        
    },
    extraReducers ( buldir )
    {
        buldir.addCase( fetchWeather.pending, ( state ) =>
        {
            state.isLoading=true
        } )
            .addCase( fetchWeather.fulfilled, ( state, action ) =>
            {
            state.isLoading=false
            state.weather=action.payload
            } )
            .addCase( fetchWeather.rejected, ( state ) =>
            {
                state.isLoading=false
            })
        
    }
} ) 
 export default weatherSlice.reducer
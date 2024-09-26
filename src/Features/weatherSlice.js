
import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather: null,
        satus: "idle",
        error: null,
    },
    reducers:{
        setWeatherData(state,action){
            state.weather = action.payload
        },
        setLoading(state){
            state.status = "loading";
        },
        setSuccess(state){
            state.status = "succeeded"
        },
        setError(state,action){
            state.status = 'Failed'
            state.error = action.payload
        }
    }
}
)

export const {setWeatherData,setLoading,setSuccess,setError} = weatherSlice.actions
export default weatherSlice.reducer;
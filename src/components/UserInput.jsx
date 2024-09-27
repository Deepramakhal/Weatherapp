/*eslint-disable*/

import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setWeatherData, setLoading, setSuccess, setError } from '../Features/weatherSlice';

function UserInput() {
    const [city, setCity] = useState('');
    const [userInput, setUserInput] = useState('');
    // const [geoLocation, setGeoLocation] = useState({lat:null, lon:null});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchWeather = async() => {
        city?setUserInput(city):setUserInput(userInput);
        if(userInput === '') {alert ("Please enter a city name or use suggestions"); return};

        dispatch(setLoading(true));
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
                params: {
                    q: userInput,
                    appid: 'd205317af9a1f1ab0b4da0189d148f17',
                }
            });
            dispatch(setWeatherData(response.data));
            dispatch(setLoading(false));
            dispatch(setSuccess(true));
            dispatch(setError(null));
            
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setSuccess(false));
            dispatch(setError(error.response.data.message));
            console.log("Error fetching weather",error)
        }

        navigate(`/weatherof/${userInput}`);
    }



    const citySuggestions = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City", "Cairo", "Dhaka",
    "Mumbai", "Beijing", "New York", "Buenos Aires", "Kolkata", "Rio de Janeiro", "Los Angeles", "Bangkok", "Chennai", "Jakarta"];

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <input type="text" name="city" value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder='Enter City name or use "city suggestions" '
                className='w-[95%] h-10 border-2 border-green-600 rounded-lg px-5 mt-6'
            />
            <div className='text-yellow-300 w-full h-fit flex justify-around items-center py-1 m-4 border-2 border-yellow-400 rounded-lg '>
                <button className='w-[90%] p-1 h-full bg-green-600 rounded-3xl'
                onClick={fetchWeather}
                >Get Weather of : {userInput}</button>
            </div>
            <div className='w-[90%] h-fit p-2'>
                <h1 className='mb-1 font-semibold font-serif'>City suggestions:</h1>
                <ul className='w-full h-fit flex justify-around flex-wrap gap-y-2'>
                    {citySuggestions.map((city) => (
                        <li key={city} className='w-fit h-10 border-2 border-green-600 rounded-lg px-5 cursor-pointer'
                            onClick={() => {
                                setCity(city);
                                setUserInput(city);
                            }}>
                            {city}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserInput;

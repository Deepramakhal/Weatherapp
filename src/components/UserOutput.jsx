/*eslint-disable*/
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function UserOutput() {
  const weatherData = useSelector(state => state.weather.weather);
  const status = useSelector(state => state.weather.status);
  const error = useSelector(state => state.weather.error);
  // const navigate = useNavigate();

  const report = [];
  if (weatherData) {
    report.push(weatherData);}
    

  return (
    <div>
      <div className='w-full h-fit flex justify-between items-center mb-2 border-b-2 border-green-950'>
      <div className='w-[70%]'>Weather report of <tt className='font-bold text-2xl mx-2 '>{report[0].name}</tt>({report[0].sys.country})
      ({report[0].coord.lon} , {report[0].coord.lat})</div>
      <div className='w-[15%] h-fit flex justify-end flex-wrap '>
        <h1 className='text-4xl sm:text-4xl md:text-5xl'>{Math.floor(report[0].main.temp-273.15)}°C</h1>
      </div>
      </div>
      <div className='w-full h-fit flex flex-wrap justify-between px-1 text-lg font-semibold items-center'>
        <div className='w-[50%] text-left'>Condition: {report[0].weather[0].description.toUpperCase()}</div>
        <div className='w-[50%] text-right'>Feels like: {Math.floor(report[0].main.feels_like-273.15)}°C</div>
        <div className='w-[50%] text-left'>Humidity: {report[0].main.humidity}%</div>
        <div className='w-[50%] text-right'>Wind Speed: {report[0].wind.speed} m/s</div>
        <div className='w-[50%] text-left'>Pressure: {report[0].main.pressure} hpa</div>
        <div className='w-[50%] text-right'>Visibility: {report[0].visibility} m</div>
        <div className='w-[50%] text-left'>Sunrise: {new Date(report[0].sys.sunrise * 1000).toLocaleTimeString()}</div>
        <div className='w-[50%] text-right'>Sunset: {new Date(report[0].sys.sunset * 1000).toLocaleTimeString()}</div> <br />
        <div className='w-[50%] text-left'>Clouds: {report[0].clouds.all}%</div>
        <div className='w-[50%] text-right'>Wind Direction: {report[0].wind.deg}°</div>
        <div className='w-[50%] text-left'>Max Temp: {Math.floor(report[0].main.temp_max-273.15)}°C</div>
        <div className='w-[50%] text-right'>Min Temp: {Math.floor(report[0].main.temp_min-273.15)}°C</div>
      </div>
    </div>
  )
}

export default UserOutput
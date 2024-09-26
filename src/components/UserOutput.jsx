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
      <div className='w-full h-fit flex justify-between items-center'>
      <div className='w-[70%]'>Weather report of <tt className='font-bold text-2xl mx-2'>{report[0].name}</tt>({report[0].sys.country})
      ({report[0].coord.lon} , {report[0].coord.lat})</div>
      <div className='w-[15%] h-fit flex justify-end flex-wrap'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl'>{Math.floor(report[0].main.temp-273.15)}°C</h1>
      </div>
      </div>
      <div className='w-full h-fit flex justify-around'>
        <h1></h1>
      </div>
    </div>
  )
}

export default UserOutput
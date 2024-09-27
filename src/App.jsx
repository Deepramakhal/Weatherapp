/*eslint-disable*/
import React from 'react'
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <div className='w-screen h-screen bg-emerald-500 flex justify-center items-center'>
        <div className='w-full h-fit p-3 sm:h-[80%] sm:w-[80%] md:w-1/2 md:h-fit bg-emerald-300 rounded-lg'>
            <h1 className='text-center text-3xl text-green-900 border-b-2 border-green-900'>Weather Be Like</h1>
            <Outlet />
        </div>
    </div>
  )
}

export default App
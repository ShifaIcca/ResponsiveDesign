import React from 'react'
const Footer = () => {
 


  return (

    
    <div className='h-[80%] w-full bg-[#d4cfc8] flex flex-col justify-center items-center'>
        <div className='h-[45%] w-[62%] border border-cyan-600 lg:h-[60%] lg:w-[40%] bg-white bg-opacity-25 pt-10'>
        <h1 style={{
            textShadow: "0px 1px 0px black, 1px 0px 0px black, 0px -1px 0px black, -1px 0px 0px black "
        }} className='text-center font-medium text-5xl text-white'>Subscribe</h1>
        <p style={{
            textShadow: "0px 0.1px 0px black, 0.1px 0px 0px black, 0px -0.1px 0px black, -0.1px 0px 0px black "
        }} className='text-center text-cyan-600 mt-7'>SIGN-UP TO OUR TOURIST  </p>

        <form className=' pt-10 gap-3 flex flex-col items-center '>
            <input className='w-48 rounded-md text-center bg-white bg-opacity-25 border ' type="email" placeholder='Enter your Email' />
            <button
             className='h-9 w-44 border-2 text-white hover:bg-cyan-600 lg:font-bold bg-cyan-600 bg-opacity-25' type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Footer
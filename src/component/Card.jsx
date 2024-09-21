import React from 'react'

const Card = ({src, head,para}) => {
  return (
    <div style={{backgroundImage:`url(/${src})`}} className='w-[90vw] lg:w-[30%] lg:mr-5 lg:bg-cover flex-shrink-0 my-4 h-[90vh] rounded-xl bg-black bg-no-repeat bg-cover relative'>


        <div id='content' className='absolute bottom-4 left-4 '>
           
            <h1 className='font-bold text-3xl text-white'>{head}</h1>
            <p className='text-white text-lg'>{para}</p>
        </div>
    </div>
  )
}

export default Card
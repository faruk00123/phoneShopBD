import React from 'react'
import { FaPlus } from 'react-icons/fa'

const cart = ({items, CartClick}) => {
  return (
     <div className='bg-white my-2 mx-1 rounded shadow-2xl relative'>
        {
         items.url && <img src={items.url} alt='No Photo'/>
        }
        
        <h1 className='text-center mt-2 text-xl font-semibold'>{items.name}</h1>
        <p className='mt-2 pl-1'>Detels: <span className='text-sm text-gray-500'>{items.dec}</span></p>
        <h3 className='text-xl pl-1 font-semibold mb-10 mt-2'>Price: <span className='font-bold'>{items.pri}</span></h3>
        <button onClick={()=> CartClick(items)} className='bg-green-500 absolute font-semibold bottom-0 cursor-pointer flex justify-center items-center gap-2 w-full py-1'>Add to Cart <span><FaPlus /></span></button>
     </div>
  )
}

export default cart
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const cart = ({items, CartClick}) => {
   const [more, setMore] = useState(false)
   const More = ()=> {
        setMore(toggle => !toggle)
   }
  return (
     <div className='bg-white my-2 mx-1 rounded shadow-2xl relative'>
         <div className='relative'>
            <img src={items.url} alt='No Photo'/>
            <h1 className='absolute transition-all ease-in-out duration-200 rounded bottom-0 bg-linear-to-b opacity-0 hover:opacity-80 from-white/60 form-30% via-white/90 via-40% flex justify-center cursor-pointer items-center to-green-600 h-full text-center w-full text-xl font-semibold'>{items.name}</h1>
         </div>
        <p className={`mt-2 pl-1 ${more? '':'truncate'}`}>Detels: <span className='text-sm text-gray-500 '>{items.dec}</span></p>.<button onClick={More} className='text-gray-700 cursor-pointer'>{more? '..hide':'more'}</button>
        <h3 className='text-xl pl-1 font-semibold mb-10 mt-2'>Price: <span className='font-bold'>{items.pri}</span></h3>
        <button onClick={()=> CartClick(items)} className='bg-green-500 absolute font-semibold bottom-0 cursor-pointer flex justify-center items-center gap-2 w-full py-1'>Add to Cart <span><FaPlus /></span></button>
     </div>
  )
}

export default cart
import React, { useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import {TbCurrencyTaka } from 'react-icons/tb'
import { Link } from 'react-router'

const CartItems = () => {

 const [cart, setCart] = useState(
   JSON.parse(localStorage.getItem("cart")) || []
 )
 
 
 const CloseItems = (index)=> {

   const newCart = cart.filter((item, i)=> i !== index) // item dileo hobe ohoba / (_) _, ata mani no Value set 
   
   setCart(newCart)

   localStorage.setItem(
     "cart",
     JSON.stringify(newCart)
   )

 }
 
 // calculation 
 const [cal, setCal] = useState(0)
 const [dolor, setDolor] = useState(0)
  const Calculation = ()=> {
      const Calculate = cart.reduce((acc, curr) => acc + curr.pri, 0)
      setCal(Calculate)
      const Dolor = Calculate / 122.56
      setDolor(Dolor.toFixed(2))
      
  }

 return (
  <section className='container mx-auto my-4 relative'>
    <Link to='/' className='ml-1 mt-1 sm:ml-6 font-semibold border py-1 px-4 rounded bg-black/90 text-white hover:shadow-2xl'>Go to Home</Link>
    <h1 className='m-auto w-37 border-b-2 text-3xl italic font-bold mb-4 border-pink-500'>
      Cart Items
    </h1>
    <div className='sm:absolute flex flex-col items-center sm:right-10 sm:top-6 text-xl font-semibold'>
      {
        cal === 0 ? <button onClick={Calculation} className='cursor-pointer mb-1 font-semibold border py-1 px-4 rounded bg-black/90 text-white hover:shadow-2xl'>Calculation</button>: 
        <div>
          <div className='text-xl font-bold flex'>Total: <span className='text-green-600'>{cal}</span><span className='-ml-1 text-green-600 font-bold'><TbCurrencyTaka /></span></div>
          <div className='text-xl font-bold flex justify-center'><span className='text-green-600'>{dolor}</span><span className='-ml-1 text-green-600 font-bold'><BsCurrencyDollar /></span></div>
        </div>
       
      }
      
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:mt-8 lg:grid-cols-4'>

    {
      cart.map((item,index)=>(

        <div key={index} className='bg-gray-100 m-4'>

          <div className='flex justify-end m-1'>

            <button 
              onClick={()=>CloseItems(index)}
              className='text-red-500 text-xl cursor-pointer'
            >
              <IoClose />
            </button>

          </div>


          <h1 className='text-center mt-2 font-bold text-xl'>
            {item.name}
          </h1>
          

          <h3 className='mt-2 text-xl font-semibold'>
            Price:
            <span className='text-lg text-blue-500'>
              {item.pri}
            </span>
          </h3>


        </div>

      ))
    }


    </div>

  </section>
 )

}

export default CartItems
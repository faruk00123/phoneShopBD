import React, { useState } from 'react'
import { FaCartPlus, FaFacebookF, FaSearch } from 'react-icons/fa'
import Cart from './Cart' 

import data from "./data.json"
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router'
import CartItems from './CartItems'
import { IoIosCheckmark } from 'react-icons/io'

const AllCart = () => {

  const [search, setSearch] = useSearchParams()
  const QuarySearch = search.get('text') || '';
  
  const [searchData, setSearchData] = useState(QuarySearch);

  const SearchDataFilter = data.filter(Allitems => Allitems.name.toLowerCase().includes(QuarySearch.toLowerCase()))

  const DataSearch = (e)=> {
    e.preventDefault();
    setSearch({text: searchData})
    setSearchData('')
  }


  // add to cart
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  
  const CartClick = (product)=> {

 const oldCart = JSON.parse(localStorage.getItem("cart")) || []

 localStorage.setItem(
   "cart",
   JSON.stringify([...oldCart, product])
 )
 setCount((pre)=> pre+1)
}
  
  
  return (
    <section className='container relative mx-auto bg-amber-50'>
      <div className='flex items-center py-3 z-10 bg-white/90 justify-between sticky px-4 top-0 left-0 right-0 lg:px-10'>
        <form onSubmit={DataSearch} className='flex relative md:ml-6'>
          <input value={searchData} onChange={(e) => setSearchData(e.target.value)} className='py-1 border border-gray-500 bg-gray-100 sm:w-96 rounded px-1' type="text" placeholder='Search Phone' name='search'/>
          <button className='absolute cursor-pointer border-l right-0 bottom-0 top-0 sm:px-4 px-2 rounded-r gap-1'><FaSearch /></button>
        </form>
        <Link to='/cartitems' className='mr-2 cursor-pointer md:ml-6 sm:text-3xl text-2xl font-semibold'><span className='flex ml-8 justify-center items-center text-sm border w-4 h-4 rounded-full border-none m-auto'>{count || <span className='bg-green-600  rounded-full text-white'><IoIosCheckmark /></span>}</span><FaCartPlus /></Link>
      </div>
      <div className='grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-1'>
        {
         SearchDataFilter.length === 0 ? <p>Data Not Found!</p>:
         SearchDataFilter.map(item => (
          <Cart key={item.id} items={item} CartClick={CartClick}/>
         ))
        }
      </div>
      
    </section>
  )
}

export default AllCart
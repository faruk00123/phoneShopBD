import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CartItems from './conponents/CartItems.jsx'
import AllCart from './conponents/AllCart.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}>
      <Route index element={<AllCart/>}/>
      <Route path='/cartitems' element={<CartItems/>}/>
    </Route>
   </Routes>
  </BrowserRouter>
)

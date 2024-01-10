import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './components/HomePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Demo } from './components/demo'
import Navbar from './components/Navbar'
import { ProductPage } from './components/ProductPage'
import { Provider } from 'react-redux'
import { store } from './store/store'
import LoginPage from './components/LoginPage'
import { Switch } from '@mui/material'
import CartComponent from './components/CartComponent'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
  
    <Navbar/>
     
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:productId" element={<ProductPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<CartComponent/>}/>
      </Routes>
   
    </BrowserRouter>
    </Provider>
      
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Landing from './pages/landing'
// import Features from './components/features'
import Tutorial from './components/tutorials'
import Registration from './pages/registration'
import Footer from './components/footer'
import Faq from './pages/faq'
import Dashboard from './pages/dashboard'
import Productmanagement from './pages/Productmanagement'
import { Routes,Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Chatbot from './components/Chatbot'
import AddProducts from './pages/addproducts'
import Viewproducts from './pages/viewproducts'
function App() {
      // const router=createBrowserRouter(
      //   createRoutesFromElements(
      //       <Route path='/' element ={}>

      //       </Route>
      //   )
      // )

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/FAQ" element={<Faq/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/addProducts" element={<AddProducts/>} />
        <Route path="/viewproducts" element={<Viewproducts/>} />
        <Route path="/Productmanagement" element={<Productmanagement/>} />

      </Routes>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </>
  )
}

export default App
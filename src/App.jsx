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
import Viewproducts from './pages/Viewproducts'
import UserRegistration from './pages/user'
// import { useState } from 'react'
function App() {
    const [isLoggedin,setisLoggedin]=useState(false);
    const [language,setlanguage]=useState(null);
      // const router=createBrowserRouter(
      //   createRoutesFromElements(
      //       <Route path='/' element ={}>

      //       </Route>
      //   )
      // )

  return (
    <>
     <Navbar  flag={isLoggedin}/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/UserRegistration" element={<UserRegistration/>} />
        <Route path="/FAQ" element={<Faq/>} />
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
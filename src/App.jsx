import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Nav from './component/Nav'
import Content from './component/Content'
import Features from './component/Features'
import About from './component/About'
import Services from './component/Services'
import Testimonials from './component/Testimonials'
import Benefits from './component/Benefits'
import Appointment from './component/Appointment'
import Stories from "./component/Stories"
import Footer from './component/Footer'





function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/home" Component={Content}/>
      <Route path='pages' Component={Features}/>
      <Route path='about' Component={Services}/>
      <Route path='ser' Component={Benefits}/>
      <Route path='con' Component={Appointment}/>
    </Routes>
    </BrowserRouter>
   
    {/* <Nav></Nav> */}

    {/* <Content></Content>
    <Features></Features>
    <About></About>
    <Services></Services>
    <Testimonials></Testimonials>
    <Benefits></Benefits>
    <Appointment></Appointment>
   <Stories></Stories>
   <Footer></Footer> */}
    </>
  )
}

export default App

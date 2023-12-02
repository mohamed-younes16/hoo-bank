import Clients from "./components/Clients"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import './index.css'
import {BrowserRouter } from "react-router-dom"
import Lenis from '@studio-freight/lenis'
import { useEffect,  } from "react"

function App() {

useEffect(() => {

  const lenis = new Lenis({})

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

}, [])


  return (
    <BrowserRouter basename="hoo-bank" >
      <div className="bg-primary ">
      <div  id="root2" className="mx-auto  roo xl:max-w-7xl max-sm:px-4 max-xl:px-10">
        <Navbar/>
      <Hero/>
      <Features/>
      <Product/>
      <Clients/>
      <Footer/>
      </div>
      
      </div>
    </BrowserRouter>
  )
}

export default App

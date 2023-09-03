import Clients from "./components/Clients"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import './index.css'
import {BrowserRouter } from "react-router-dom"
function App() {

  return (
    <BrowserRouter basename="hoo-bank" >
      <div className="bg-primary ">
      <div className="mx-auto  xl:max-w-7xl max-sm:px-4 max-xl:px-10">
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

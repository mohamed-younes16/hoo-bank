
import logo from "../assets/logo.svg"
import {navLinks } from "../constants/index.js"
import { useLocation } from "react-router-dom"
const Navbar = () => {
const location = useLocation()
  return (
    
        <nav className="  mx-auto xl:max-w-7xl"> 
            <div className="flex max-sm:justify-center
            pt-4 justify-between flex-wrap items-center">
                <a href="/">
                    <img src={logo}  className=" w-[124px]" />
                </a>
                <ul className="flex gap-6">
                    {navLinks.map((e: { title: string ,id:number})=> {
                      
                      return  <li key={e.id} ><a className={`block   text-lg py-4 
                      transition hover:text-secondary ${location.hash === `#${e.title}` ?"active" : ""}`}
                      href={`#${e.title}`}> {e.title}</a> </li>
                    })}
                </ul>
            </div>
        </nav>
    
  )
}

export default Navbar
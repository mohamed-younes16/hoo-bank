/* eslint-disable @typescript-eslint/no-explicit-any */
import {footerLinks,socialMedia} from "../constants/index.js"
import {logo} from "../assets/index.js"
import MotionText from "./MotionText.js"

 
const Footer = () => {
  return (
    <div>
        <div className="flex  mt-20 flex-wrap gap-10">
          
          <div>
            <img src={logo} className="h-16" alt="" />
            <p className=" mt-9 text-gray-400 max-w-xs text-lg">A new way to make the payments easy, reliable and secure.</p>
          
          </div>
        {footerLinks.map((e:{ title: string,links:any  },i:number )=>{
        return <ul key={i}>
            <p className="text-xl mb-6">
              {e.title}
            </p>
            {e.links.map((e:{id:number,link:string,name:string},index:number)=> <MotionText key={e.name } del={ i *2 + index } >
              <li > <a className="my-4 block text-gray-400
             transition hover:text-secondary" href={e.link}> {e.name}</a> </li>
              </MotionText>)}

          </ul>
        })}
        </div>
        <div className="flex max-sm:justify-center border-t py-10 mt-16 flex-wrap  justify-between">
          <p>Copyright Ⓒ 2023 HooBank. All Rights Reserved.</p>
            <div className=" flex max-sm:mt-8 gap-4"> 
              {socialMedia.map((e:{id:number,link:string,icon:string})=>(
              <a target="_blank" key={e.id} href={e.link}> <img src={e.icon} alt="" /></a> 
              ))}
            </div>
        </div>
    </div>
  )
}

export default Footer
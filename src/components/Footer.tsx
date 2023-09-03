import {footerLinks,socialMedia} from "../constants/index.js"
import {logo} from "../assets/index.js"
 
const Footer = () => {
  return (
    <div>
        <div className="flex  mt-20 flex-wrap gap-10">
          
          <div>
            <img src={logo} className="h-16" alt="" />
            <p className=" mt-9 text-gray-400 max-w-xs text-lg">A new way to make the payments easy, reliable and secure.</p>
          
          </div>
        {footerLinks.map(e=>(
          <ul>
            <p className="text-xl mb-6">
              {e.title}
            </p>
            {e.links.map(e=><li  key={e.name}> <a className="my-4 block text-gray-400
             transition hover:text-secondary" href={e.link}> {e.name}</a> </li>)}

          </ul>
        ))}
        </div>
        <div className="flex max-sm:justify-center border-t py-10 mt-16 flex-wrap  justify-between">
          <p>Copyright Ⓒ 2023 HooBank. All Rights Reserved.</p>
            <div className=" flex max-sm:mt-8 gap-4"> 
              {socialMedia.map((e)=>(
              <a target="_blank" key={e.id} href={e.link}> <img src={e.icon} alt="" /></a> 
              ))}
            </div>
        </div>
    </div>
  )
}

export default Footer
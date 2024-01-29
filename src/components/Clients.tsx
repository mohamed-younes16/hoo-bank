
import {quotes } from "../assets/index.js"
import {feedback,clients} from "../constants/index.js"
import MotionText from "./MotionText.js"


const Clients = () => {
  return (

    <div id="Clients">
        
        <div className="flex items-center flex-wrap  mt-14  justify-between max-md:justify-center">

           <MotionText> <p className="text-5xl w-fit max-md:mb-10 max-md:text-center leading-[60px] max-sm:text-3xl max-w-md font-semibold">
                What People are
                saying about us

            </p></MotionText>
            <MotionText> <p className="max-w-md  max-md:mb-10 max-md:text-center text-gray-400 text-lg">

                    Everything you need to accept card payments and grow your business anywhere on the planet.
            </p></MotionText> 

        </div>

        <div className="flex gap-4  mt-20 justify-center flex-wrap">

            {feedback.map((e:{id:number,content:string,img:string,name:string,title:string},i:number)=> 
              <MotionText del={i+.5}><div key={e.id} className=" feature p-4 rounded-2xl ">

                        <img src={quotes} alt="quotes" />
                        <MotionText del={i+1.5}><p className="max-w-xs min-h-[90px] my-8">
                            {e.content}
                        </p></MotionText> 
                        <div className="flex items-center gap-4">
                           <div className="min-w-[3.5rem] min-h-[3.5rem] "><img src={e.img} alt="" className="object-contain rounded-full" /></div> 
                                <div>
                                    <p className="font-bold">{e.name} </p>
                                    <p className="text-gray-400">{e.title} </p>
                                </div>
                        </div>

                </div></MotionText>  
            )}

        </div>
        <div className="flex gap-10 justify-center mt-16 flex-wrap">
            {clients.map(e=><img src={e.logo}  key={e.id} className=" h-10"  alt={e.id} />)}
                   
                    
        </div>
        <div className="bg-black-gradient-2 justify-between items-center mt-20 flex p-10 rounded-2xl">
            
            <div>

              <MotionText><p className="text-5xl font-semibold 
                 max-sm:text-3xl max-w-lg leading-[60px]">
                    Let’s try our service now!
                </p></MotionText>  

             <MotionText del={2}> <p className=" text-gray-400 mt-14 max-w-md">
                        Everything you need to accept card payments and grow
                        your business anywhere on the planet.
                    </p></MotionText>      
            </div>
            <button className="w-fit bg-blue-gradient text-xl  text-black rounded-xl my-10 p-5">Get Started</button>

        
            
        </div>
    
    </div>
  )
}

export default Clients
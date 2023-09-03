/* eslint-disable @typescript-eslint/no-unused-vars */
import {features} from "../constants/index.js"
import MotionText from "./MotionText"

const Features = () => {
  return (
    <div id="Features">
        <div className="flex flex-wrap max-md:flex-col max-md:items-center">
            <div className=" flex-1">

             <MotionText> <p className="text-5xl leading-[50px]  font-bold">You do the business, </p> </MotionText>   <p className="text-5xl leading-[50px]  font-bold">
          <MotionText del={2}>  <p className="text-5xl leading-[50px]  font-bold"> we’ll handle the money.</p>     </MotionText> 
                </p>  

                <p className="text-gray-400 max-w-md mt-10">
                <MotionText del={3}>  With the right credit card, you can improve your financial life 
                            by building credit, earning rewards and</MotionText>    
                        <MotionText del={4}> saving money.  But with hundreds of credit cards on the market.</MotionText>   
                </p>   

                    <button className="w-fit bg-blue-gradient text-xl  text-black rounded-xl my-10 p-5">Get Started</button>
                
            </div>
            <div className=" md:flex-1">
                {features.map((e: { icon: string ,content:string,title:string},i:number)=>(
                     <MotionText del={i+3}><div style={{translate:10 * i}} className="flex p-2 rounded-xl feature  w-fit my-8 gap-4">


                        
                         <div className="min-w-[64px]  h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                            <img src={e.icon} alt="star" className="w-[50%] h-[50%] object-contain"/></div>


                            <div className=" max-w-lg">
                                <p>{e.title}</p>
                                <p>{e.content} </p>
                            </div>

                        </div></MotionText>   )
                    
                )}
            </div>
        </div>
        
    </div>
  )
}

export default Features
import {bill,card} from "../assets/index.js"
import MotionText from "./MotionText.js"
const Product = () => {
  return (
    <div id="Product">
        
        <div className="flex  flex-wrap items-center max-md:flex-col-reverse max-md:mt-24">

            <div className=" flex-1 ">
                <img className="max-h-[700px]" src={bill} alt="" />
            </div>

            <div className=" flex-1 ">
            

                
                

               <MotionText>
                <p className="text-5xl max-sm:text-4xl
                leading-[60px] max-w-md mb-8 font-semibold "> 
                Easily control your
                        billing & invoicing
                        
                </p>
                </MotionText> 

               <MotionText> <p className="text-gray-400 max-md:text-md text-lg max-w-md">
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
                        Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>  </MotionText>  
            </div>

        </div>

        <div className="flex  flex-wrap gap-6 items-center max-md:flex-col max-md:mt-24">
                    <div className=" flex-1 ">
                              <MotionText> <p className="text-5xl max-sm:text-3xl leading-[60px] max-w-lg mb-8 font-semibold ">   Find a better card deal
                                    in few easy steps.
                                            
                                    </p>
                                    </MotionText>     

                                   <MotionText del={2}> <p className="text-gray-400 max-md:text-md text-lg max-w-md">
                                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis 
                                    aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                                    </p>  
                                    </MotionText>
                                <button className="w-fit bg-blue-gradient text-xl  text-black rounded-xl my-10 p-5">Get Started</button>  
                    </div>

                    <div className=" flex-1 ">
                        <img className="max-h-[500px]" src={card} alt="" />
                    </div>
            </div>
                
    </div>
  )
}

export default Product
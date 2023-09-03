import {robot,discount}  from "../assets/index"
import MotionText from "./MotionText"
const Hero = () => {
  return (
    <div id="Home">
        <div className="flex gap-8 max-md:items-center  max-md:flex-col  mt-14 ">

                <div className="intro  flex-1">

                    <div className=" cursor-pointer mb-4 w-fit gap-3 bg-discount-gradient flex items-center rounded-xl p-2 ">
                        <img src={discount} alt="" />
                        <div className=" text-gray-400 text-xl"> 
                        Discount For 
                        <span className="text-white"> 1 Month</span>  Account</div>
                    </div>

                    <div className="flex flex-wrap break-words">
                        <div className="text-6xl mb-8 max-sm:text-4xl  whitespace-nowrap leading-[80px] max-md:leading-[60px] font-semibold">
                        <MotionText >  The Next </MotionText> 
                        <MotionText del={2}><div className="text-gradient">Generation</div></MotionText>  
                        <MotionText  del={3}> Payment Method.</MotionText>  
                        </div>
                    </div>




<div className="text-gray-400 leading-8  max-w-md">
 <MotionText del={4}> Our team of experts uses a methodology to</MotionText>  
<MotionText del={5}>identify the credit cards most likely to fit your needs.  </MotionText> 
<MotionText del={6}>We examine annual percentage rates, annual fees.</MotionText> 

</div>


                </div>

                <div className="img-wrapper  z-0 relative flex-1 flex justify-end ">
                    <img src={robot} className=" max-h-[600px]" alt="" />
                    <div className="pink__gradient w-2/3 h-2/3  absolute right-10 top-5 z-[-1]"></div>
                    <div className="blue__gradient w-1/2 h-1/2  absolute left-10 bottom-5 z-[-1]"></div>
                </div>

        </div>
        <div className="flex gap-20  max-sm:gap-6  my-10  mb-36 w-fit justify-center flex-wrap mx-auto">
            <div className="flex gap-4  items-center">
                <div className="text-5xl max-sm:text-3xl font-semibold">3800+</div>
                <div className="text-gradient  text-xl">USER ACTIVE</div>
            </div>

            <div className="flex gap-4  items-center">
                <div className="text-5xl  max-sm:text-3xl font-semibold">230+</div>
                <div className="text-gradient  text-xl">TRUSTED BY COMPANY</div>
            </div>

            <div className="flex gap-4 items-center">
                <div className="text-5xl  max-sm:text-3xl font-semibold">$230M+</div>
                <div className="text-gradient text-xl">TRANSACTION</div>
            </div>
        </div>

    </div>
  )
}

export default Hero
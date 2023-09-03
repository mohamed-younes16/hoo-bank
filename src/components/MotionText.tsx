
import { motion ,useAnimation ,useInView} from 'framer-motion'
import {useRef,useEffect} from "react"
const MotionText = ({children,del=1}) => {
  const ref = useRef(null) 
  const anim1 = useAnimation()
  const anim2 = useAnimation()
  const isintersecting = useInView(ref)

  useEffect(() => {
    if(isintersecting) {
        anim1.start("show")
        anim2.start("show")
    }
    else {
      anim1.start("initial")
      
  }
    
  }, [isintersecting])
  

  

  return (
    <motion.div ref={ref}
    variants={{
      initial:{y:75,opacity:0},
      show:{y:0,opacity:1}}
    }

    transition={{duration:.4,delay:del*.4}}
    initial="initial"
    animate={anim1}
    className='relative w-fit overflow-hidden'

    >
        {children}
        <motion.div
        className=' z-30 top-0 absolute bg-secondary w-full h-full '
        transition={{duration:.4,delay:.4+ del * .4}}
        variants={{
          initial:{translate:"0",rotateX:"0deg"},
          show:{translate:"110%",rotateX:".5turn"}}
        }
        animate={anim2}
        >

        </motion.div>
    </motion.div>
  )
}

export default MotionText
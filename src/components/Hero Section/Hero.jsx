import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
 
  return (
    <header>
      <div className="text-center lg:px-20 sm:px-12 px-5 py-24">
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration:2 , delay: 1}}>
          <h1
            className="lg:text-6xl md:text-[55px] text-[50px] lg:w-[900px] w-full mx-auto font-bold :leading-[79px] leading-[70px] sm:mb-10 mb-6"
          >
            Learn A New Skill <span className="text-primary">Anytime</span>,{" "}
            <span className="text-primary">Anyday</span> And{" "}
            <span className="text-primary">Anywhere</span>
          </h1>
          <p className="lg:text-[22px] text-[20px] lg:w-[900px] w-full mx-auto sm:mb-10 mb-7">
            Empowering individuals to build and enhance professional Skills and
            discover new hobbies, master new skills efficiently with our online
            courses.
          </p>
         
        </motion.div>
        <Link to="/signup">
          <motion.button
           initial={{x: '-100vw'}}
           animate={{x: 0}}
           transition={{delay:.5, type:'spring', stiffness:120}}
           className=" md:w-[400px] w-[200px] px-10 py-3 rounded-md bg-primary text-white">
            Get started
          </motion.button>
        </Link>
      </div>
    </header>
  );
};

export default Hero;

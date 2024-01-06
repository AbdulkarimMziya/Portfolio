import './hero.scss'
import { motion } from "framer-motion";

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="leftHero-container">
        <motion.div 
          className="leftContent-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants} className="title">Abdulkarim Mziya</motion.h1>
          <h2 className="subtitle">Software engineer and Web Developer</h2>
          <div className="subtext">
            Enrolled in Computing Science Bachelors with a passion in software engineering.
            Based in BC, Canada, I'm actively seeking internships or junior roles to contribute and innovate.
          </div>
          <motion.div variants={textVariants} className="socials">
            <a href='http://github.com/AbdulkarimMziya' className='btn'>GitHub Repo</a>
            <a href='http://www.linkedin.com/in/abdulkarim-mziya' className='btn'>LinkedIn</a>
          </motion.div>
        </motion.div>
      </div>

      <div className="rightHero-container">
        <div className="rightContent-container">
        <div className="container">
          <img src="hero-1.jpg" alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">
            <div className="item">
                <h3>Institution:</h3>
                <span>Thompson Rivers University</span>
              </div>
              <div className="item">
                <h3>Program:</h3>
                <span>BSC Computing Science</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
       
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Mamba Mentality
      </motion.div>
    </div>
  )
}



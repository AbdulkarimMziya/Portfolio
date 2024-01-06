import { useState } from "react";
import { motion, useInView } from "framer-motion";
import Skill from "./Skills";
import'./skills.scss'



const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
    },
  },
};


export default function AllSkills()
{
    const [skills, setSkills] = useState([
      {title: 'HTML5', imgPath:'./html-5.png', focus:'frontend',id:1},
      {title: 'CSS', imgPath:'./css-3.png', focus:'frontend',id:2},
      {title: 'JavaScript', imgPath:'./js.png', focus:'frontend',id:3},
      {title: 'React', imgPath:'./react.png', focus:'frontend',id:4},
      {title: 'Java', imgPath:'./java.png', focus:'backend',id:5},
      {title: 'Python', imgPath:'./python.png', focus:'backend',id:6},
      {title: 'PHP', imgPath:'./php.png', focus:'backend',id:7},
      {title: 'MySQL', imgPath:'./database.png', focus:'database',id:8}
  ]);
return(
  <motion.div className="wrapper" variants={variants}
  initial="initial"
  whileInView="animate">
    <div className="main-title"><h1>Tech Toolbox</h1></div>
    <motion.div variants={variants} className="all-skills-container">
        {skills.map((skill,index) => (
            <div className="all-skills-skill" key={index}>
                <Skill 
                    title={skill.title} 
                    imgPath={skill.imgPath} 
                />
            </div>
        ))} 
    </motion.div>
  </motion.div>
)
}
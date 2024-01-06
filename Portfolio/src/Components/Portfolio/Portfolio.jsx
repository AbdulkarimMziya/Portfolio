import { useState } from "react";
import { motion, useInView } from "framer-motion";
import Project from "./Project";
import './portfolio.scss'


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

  var settings = {
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        } 
      ]

  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

export default function Portfolio() {


    const[projects, setProjects] = useState([
      { 
        title:"Admin Dashbord", 
        desc:"The admin dashboard panel provides an interface to manage students and classes, displaying relevant information and recent activities.",
        imgPath:"dashboard_img.png"
      },
      {
        title:"Web Portfolio", 
        desc:"Lorem Ipsum....",
        imgPath:"portfolio_img.png"
      },
      {
        title:"To-do app", 
        desc:"Lorem Ipsum....",
        imgPath:"todo_img.png"
      }
    ])
  return (
    <motion.div 
        className='Portfolio'
        variants={variants}
        initial="initial"
        whileInView="animate"
    >
      <div className="main-title"><h1>Projects</h1></div>
        <div className="all-projects-container">
              {projects.map((project,index) => (
                <motion.div className="all-projects-project" key={index} variants={variants}>
                  <Project 
                      title={project.title}
                      desc={project.desc}
                      imgPath={project.imgPath}
                  />
                </motion.div>
              ))}
        </div>
    </motion.div>
  )
}

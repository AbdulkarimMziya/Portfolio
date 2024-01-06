import { useRef, useState } from "react";
import "./contact.scss";
import { FaLinkedin , FaGithub  } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
// import emailjs from "@emailjs/browser";

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

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const style = { color: "white", 
                  fontSize: "2.5em", 
                  margin: '5px',
                  cursor: 'pointer'
                }
  
  const underline = {textDecoration: "underline"}

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <p>Im open for project colabs, internships, Coop positions and part/full time positions.</p>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Email:</h2>
          <span>
            <a href="mailto:abdulmziya@gmail.com" style={underline}>
              abdulmziya@gmail.com
            </a>
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Profile:</h2>
          <span>
            <a href="http://www.linkedin.com/in/abdulkarim-mziya"><FaLinkedin style={style}/></a> 
            <a href="http://github.com/AbdulkarimMziya"><FaGithub style={style}/></a>
          </span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
    
  );
};

export default Contact;

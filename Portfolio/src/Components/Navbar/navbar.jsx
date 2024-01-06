import Sidebar from "../Sidebar/sidebar";
import "./navbar.scss"
import { FaLinkedin , FaInstagram, FaGithub  } from "react-icons/fa";





export default function Navbar() {
    const style = { color: "white", fontSize: "1.5em" }
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <span>Abdulkarim.</span>
            <div className="social-icons">
                <a href="http://www.linkedin.com/in/abdulkarim-mziya"><FaLinkedin style={style}/></a>
                <a href="http://github.com/AbdulkarimMziya"><FaGithub style={style}/></a>
                <a href="http://instagram.com/ak_mziya21/"><FaInstagram style={style}/></a>
            </div>
        </div>
    </div>
  )
}

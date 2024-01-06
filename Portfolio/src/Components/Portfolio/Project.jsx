import { FaGithub } from "react-icons/fa";

export default function Project({title,desc,imgPath}){

    return(
        <div  className="project" >
            <div className="project-container" >
                <div className="project-image">
                    <img src={imgPath} alt="logo"  />
                </div>
                <div className="project-info">
                    <div className="project-title">{title}</div>
                    <div className="project-desc">{desc}</div>
                </div>
                <div className="btn">
                    <a href="/"><FaGithub /> GitHub</a>
                </div>
            </div>
        </div>
    )
}
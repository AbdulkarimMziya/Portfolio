import'./skills.scss'


  export default function Skill ({title, imgPath}) 
  {

    return (
            <div  className="skill" >
                <div className="skill-container" >
                    <div className="skill-logo">
                        <img src={imgPath} alt="logo"  />
                    </div>
                    <div className="skill-title">{title}</div>
                </div>
            </div>
    )
  }


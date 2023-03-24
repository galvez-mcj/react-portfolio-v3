import React from 'react'
import "./Home.css"
import wave from "../assets/wave.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoogle, faViber } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <>
    <div className="my-container home-container">
      <div className="home-text">
        <p>Hi, there! I'm</p>
        <div className="home-heading">
          <h1 className="display-font primary bold">Ma. Christina J. Galvez</h1>
          <h2 className="display-font secondary bold">aspiring Software Engineer</h2>
        </div>
        <p>Women's Rights Advocate | Graphic Artist</p>
      </div>
      <div className="social-container">
        <ul>
            <li>
                <a 
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/galvez-mcj">
                  <FontAwesomeIcon icon={faGithub} color="#000" size="xl"/>
                </a>
            </li>
            <li>
                <a 
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/galvez-mcj/">
                  <FontAwesomeIcon icon={faLinkedin} color="#0052cc" size="xl"/>
                </a>
            </li>
            <li>
                <a 
                  target="_blank"
                  rel="noreferrer"
                  href="viber://chat?number=639164729179">
                  <FontAwesomeIcon icon={faViber} color="#000" size="xl"/>
                </a>
            </li>
            <li>
                <a 
                  target="_blank"
                  rel="noreferrer"
                  href="mailto://galvez.mcj@gmail.com/">
                  <FontAwesomeIcon icon={faGoogle} color="#0052cc" size="xl"/>
                </a>
            </li>
        </ul>
      </div>

    </div>
    {/* <img className="wave" src={wave} alt="" /> */}
    </>

  )
}

export default Home

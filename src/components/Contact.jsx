import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoogle, faViber } from '@fortawesome/free-brands-svg-icons'

import "./Contact.css"

const Contact = () => {
  return (
    <div className="main-contact">
      <div className="my-container contact-container">
        <div className="left">
          <div className="contact-text">
            <h2 className="display-font bold">Let's get in touch!</h2>
            <p>I'm interested in full-time position such as Junior/ Associate Software Engineer or Software Developer. Please don’t hesitate to contact me and let’s put your ideas into code!</p>
          </div>
          <div className="social-container">
            <ul>
              <li>
                  <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/galvez-mcj">
                    <FontAwesomeIcon icon={faGithub} color="#FFF" size="xl"/>
                  </a>
              </li>
              <li>
                  <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/galvez-mcj/">
                    <FontAwesomeIcon icon={faLinkedin} color="#FFF" size="xl"/>
                  </a>
              </li>
              <li>
                  <a 
                    target="_blank"
                    rel="noreferrer"
                    href="viber://chat?number=639164729179">
                    <FontAwesomeIcon icon={faViber} color="#FFF" size="xl"/>
                  </a>
              </li>
              <li>
                  <a 
                    target="_blank"
                    rel="noreferrer"
                    href="mailto://galvez.mcj@gmail.com/">
                    <FontAwesomeIcon icon={faGoogle} color="#FFF" size="xl"/>
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <form action="">
            <input 
              className="input-text"
              type="text"
              placeholder="Name/Company"/>
            <input
              className="input-text"
              type="email"
              placeholder="Email Address"/>
            <input 
              type="text"
              placeholder="Subject"/>
            <textarea>

            </textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact

import React from 'react'
import "./About.css"
import photo from "../assets/my-img.png"


const About = () => {
  return (
    <main className="main-content">
      <div className="my-container about-container">
        <div className="left">
          <img className="my-img" src={photo} alt="my image" />
        </div>
        <div className="right">
          <h2 className="display-font primary bold">About Me!</h2>
          <h3 className="bold">I recently graduated from the University of the Philippines Manila with a degree of Bachelor of Science in Computer Science. I am a women’s rights advocate and very passionate about learning new technologies to help the underserved.</h3>
          <p>My special problem is about Breast Cancer Detection in Two-View Film Mammography using Deep Convolutional Neural Networks. It aims to help identify tumor as benign or malignant on screening mammograms.</p>
        </div>
      </div>
    </main>


  )
}

export default About

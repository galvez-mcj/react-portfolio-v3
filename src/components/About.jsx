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
          <h1 className="primary bold">About Me!</h1>
          <p>I recently graduated from the University of the Philippines Manila with a degree of Bachelor of Science in Computer Science. I am a women’s rights advocate and very passionate about learning new technologies to help the underserved.</p>
          <p>My special problem is about Breast Cancer Detection in Two-View Film Mammography using Deep Convolutional Neural Networks. It aims to help identify tumor as benign or malignant on screening mammograms. Three popular CNN architectures - VGG 16, ResNet 50, and DenseNet 121 were used for the classification task. </p>
        </div>
      </div>
    </main>


  )
}

export default About

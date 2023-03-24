import React from 'react'
import "./Home.css"
import wave from "../assets/wave.svg"

const Home = () => {
  return (
    <>
    <div className="my-container home-container">
      <p>Hi, there! I'm</p>
      <h1 className="primary bold">Ma. Christina J. Galvez</h1>
      <h2 className="secondary bold">aspiring Software Engineer</h2>
      <p>Women's Rights Advocate | Graphic Artist</p>
    </div>
    <img className="wave" src={wave} alt="" />
    </>

  )
}

export default Home

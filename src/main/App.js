import React from 'react'
import "../styles/main.css"
import webPimage from "../assets/webpackLogo.png"

const App = () => {
  return (
    <div className='main-container'>
      <div className=''>
        <img src={webPimage} alt='webpack' height={250} width={250}/>
      </div>
      <h1 id='main-head'>Webpack app is created</h1>
      <h5 id='sub-head'>Step in and build your web app <span id='speed'>2x</span> faster - auto inject enabled</h5>
    </div>
  )
}

export default App
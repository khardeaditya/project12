import React from 'react'
import Nav from '../../component/Navbar/nav'
import Foot from './../../component/footers/footer'
import AboutImg from "./about.png"
function About() {
  return (
    <div>
      <Nav />
      <h2 className='title'>Abut Page</h2>
      <img src={AboutImg}  className='imgs'/>
      <Foot />
    </div>
  )
}

export default About

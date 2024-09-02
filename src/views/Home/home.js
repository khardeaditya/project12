import React from 'react'
import Nav from '../../component/Navbar/nav'
import HomeImg from "./home.png"
import Foot from './../../component/footers/footer'

function Home() {
  return (
    <div>
      <Nav />
      <h2 className='title'> Home Hello</h2>
      <img src={HomeImg} className='imgs'/>

      <Foot />

    </div>
  )
}


export default Home

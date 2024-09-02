import React from 'react'
import Nav from '../../component/Navbar/nav'
import Foot from './../../component/footers/footer'
import AboutImg from "./about.png"
import toast, { Toaster } from 'react-hot-toast';

function About() {
  return (
    <div>
      <Nav />
      <h2 className='title'>Abut Page</h2>
      <img src={AboutImg}  className='imgs'/>
      <button className='btn' type='button' onClick={    ()=>{
        toast.loading("Loading....")
      }
     }>
      Click Here
      </button>
      <Foot />

      <Toaster/>

    </div>
  )
}

export default About

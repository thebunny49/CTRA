import React from 'react'
import '../styles/Section1.css'
import '../styles/Button2.css'
import '../styles/Social.css'
import Waves from '../assets/bg2.mp4'
import Arrow from '../assets/down.gif'
import { motion } from "framer-motion"
function Section1() {
  return (
    <>
      <div className="main">
        <video autoPlay loop muted playsInline className='video'>
          <source src={Waves} type='video/mp4' />

        </video>
        <div className='overlay01'></div>
        <div className="trial1">

          <div className="left">

            <h1
              className='heading text-focus-in'>CRYPTO AND BLOCKCHAIN <br />DEVELOPMENT</h1>
            <p className='para' >Are you looking for ICO Marketing ? We provide crypto and blockchain development company with experience in NFT marketplace development, token development, crypto wallet development.</p>
            <br />
            <div className='know'>
              <button className='s4button' id='btn1'>
                Cryptora Service
              </button>
              <button className='s4button' id='btn1'>
                Cryptora Product
              </button>

            </div>


          </div>

        </div>
        <div className="know2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="logo-container2 know2" >
            <img src={Arrow} className='arimg2' alt="" />
            <div class="logo-container">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='cpath'>
                <a href="#section2"><path id="circlePath" fill="none" stroke-width="4" d="
          M 10, 50  
          a 40,40 0 1,1 80,0  
          a 40,40 0 1,1 -80,0  
        " /></a> 
                <text id="text" font-size="12" font-weight="bold" fill="white" >
                  <textPath id="textPath" style={{ color: 'white' }} href="#circlePath" >SCROLL DOWN SCROLL DOWN SCROLL DOWN  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

      </div>
      <div className="trial2">

      </div>
    </>
  )
}

export default Section1
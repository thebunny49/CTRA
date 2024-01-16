import React from 'react'
import TopNavbar from '../component/TopNavbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Footer from '../component/Footer'
import chat from '../assets/chat.gif'
import '../styles/Home.css'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const Home = () => {
  return (
    <>
        <TopNavbar />
        {/* <div className='support'>
          <div className='fb'>
            <span className='socialpara'>FB</span>
          </div>
          <div className='wa'>WA</div>
          <div className='ig'>INSTA</div>
          <div className='yt'>Youtube</div>
        </div> */}
       
      
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      <Section5 />
      <Section6 />
    
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </>
  )
}

export default Home
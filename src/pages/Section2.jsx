import React, { useEffect } from 'react'
import '../styles/Section2.css'
import Waves from '../assets/waves.mp4'
import AOS from 'aos';
import Image1 from '../assets/index2.mp4'
import Bullet from '../assets/bullet.svg'
import { motion } from "framer-motion"
import 'aos/dist/aos.css';
const { useLayoutEffect, useRef } = React;
function Section2() {
        // const app = useRef();
        // const circle = useRef();
        // useLayoutEffect(() => {
        //     let ctx = gsap.context(() => {
        //       // use scoped selectors
        //       gsap.to(".box", { x: -200 })
        //       // or refs
        //       gsap.to(circle.current, { rotation: 360 });

        //     }, app);

        //     return () => ctx.revert();
        //   }, []);

        useEffect(() => {
                AOS.init();
        }, [])
        return (
                <>
                        <div id='section2' className="main2">


                                <div className='sec2left' style={{ zIndex: 1 }} >
                                        <motion.p initial={{ scale: 0.9, x: -50, opacity: 0 }} whileInView={{ scale: 1, x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 0.4 }} className='s3heading'>About Us</motion.p>
                                        <motion.h1
                                                className='s2heading'
                                                initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 1 }}
                                        >
                                                Unlimited Skills for Blockchain Projects</motion.h1>
                                        <motion.p
                                                className='s2para'
                                                initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 1, delay: 0.3 }}
                                        >
                                                We are a leading new blockchain business with a team of credible programmers, licensed blockchain strategists, professional advisors, and seasoned creative experts. As your business partner, we can provide:
                                                <br />

                                        </motion.p>
                                        <motion.p initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 1, delay: 0.3 }} className='s2para'><img src={Bullet} alt="" style={{ width: 20, height: 20, color: 'white' }} />  Adaptable corporate solutions.</motion.p>
                                        <motion.p initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 1, delay: 0.3 }} className='s2para'><img src={Bullet} alt="" style={{ width: 20, height: 20, color: 'white' }} />  Different network access options to expedite company processes.</motion.p>
                                        <motion.p initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 1, delay: 0.3 }} className='s2para'><img src={Bullet} alt="" style={{ width: 20, height: 20, color: 'white' }} />  Assistance in implementing novel blockchain technologies.</motion.p>
                                        <motion.p initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 1, delay: 0.3 }} className='s2para'><img src={Bullet} alt="" style={{ width: 20, height: 20, color: 'white' }} />  NFT Marketplace, Crypto Exchange, Staking, Defi Platform, dApp, Custom Solution.</motion.p>
                                        <motion.p initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 1, delay: 0.3 }} className='s2para'><img src={Bullet} alt="" style={{ width: 20, height: 20, color: 'white' }} />  Adaptable corporate solutions.</motion.p>
                                        <motion.p initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 1, delay: 0.3 }} className='s2para'><img src={Bullet} alt="" style={{ width: 20, height: 20, color: 'white' }} />  Adaptable corporate solutions.</motion.p>
                                </div>
                                <div className='sec2right'>

                                        <video autoPlay muted loop playsInline className='sec2vdo'>
                                                <source src={Image1} type='video/mp4' />

                                        </video>
                                </div>
                        </div>







                        {/* <div ref={app} className="App">
      <div className="box">selector</div>
      <div className="circle" ref={circle}>Ref</div>
    </div> */}

                </>
        )
}

export default Section2
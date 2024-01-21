// import React from 'react'
import '../styles/ContactUs.css'

import cuimg from "/asset.svg"
import conbg from "/src/assets/contact-bg.jpg"


const ContactUs = () => {
  return (
    <>
      {/* <TopNavbar /> */}
      <img src={conbg} id='conbg' alt="" />
      <div className="contactmain container">
        <div className="contactsec1">
          <div className="contactbutton">
            <p>Contact Us</p>
          </div>
          <p className='contactpara'>Have questions or want to get in touch with us?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, at id? Nihil quis exercitationem fugiat.</p>

        </div>


        <div className="contact-details">
          <p className='detail-head' style={{ fontSize: 40 }}>Contact Details</p>
          <p className='detail-para'>Get all the details here</p>
          <div className='contact-card'>
            <div className="contact1">
              <img src={cuimg} alt="" />
              <p className='cuhead'>Call Us</p>
              <div className='contact-no'>
                <a className='contact-number' href="tel:8871192290">+918770632170</a>
                <a className='contact-number' href="tel:8871192290">+918871192290</a>
              </div>
            </div>
            <div className="contact1">
              <img src={cuimg} alt="" />
              <p className='cuhead'>Call Us</p>
              <div className='contact-no' style={{ flexDirection: "column" }}>


                <a className='contact-email' href="tel:8871192290">community@cryptora.tech</a>
                <a className='contact-email' href="tel:8871192290">support@cryptora.tech</a>
              </div>
            </div>
            <div className="contact1">
              <img src={cuimg} alt="" />
              <p className='cuhead'>Address</p>
              <div className='contact-no'>


                <a className='contact-number3' href="tel:8871192290">303 Western Corporate Near Apna Sweet Janjirwala New Palasia Indore, Madhya Pradesh</a>

              </div>
            </div>
          </div>
        </div>


        <div className="maincontact">
          <div className="contact-left">
            {/* <div className="contactbutton">
              <p>Contact Us</p>
            </div> */}
            <p className='detail-head' style={{ fontSize: 40 }}>Contact Form</p>
            <p className="mcpara" style={{ fontSize: 25 }}>Fill out the form below, and one of our frendly team member will get back to you shortly.</p>
            <div className="socialm">
              <p className="socialhead">Follow us on Social Media</p>
              {/* <div className="si">
                <img src={fb} style={{ backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" />
                <img src={fb} style={{ backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" />
                <img src={fb} style={{ backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" />
              </div> */}
            </div>
          </div>

          <div className="contact-right">

            <form action=" " method="post" id='contact-form'>
              <h1>Send Us a Message</h1>
              <div id="inputs">

                <input type="text" id="name" name="name" placeholder='Name' required />

                <input type="email" id="email" name="email" placeholder='Email' required />

                <input type="tel" id="phone" placeholder='Phone' name="phone" />

                <input type="text" id="budget" placeholder='Budget' name="budget" />
                <textarea id="message" name="message" rows="5" placeholder='Maggage' required></textarea>
              </div>







              <button  type="submit">Submit</button>
            </form>

          </div>

        </div>



      </div>
    </>
  )
}

export default ContactUs
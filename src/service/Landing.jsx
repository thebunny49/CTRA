
import "../styles/Lnading.css"

import fb from "../assets/facebook.png"
import it from "../assets/ig.png"
import tg from "../assets/tg.png"

// import Logo from '../assets/cryptora.png'
// import cwimg2 from '../assets/cryptowallet/cwimg2.png'
 

const Landing = () => {
    return (
        <>
            {/* <nav style={{ backgroundColor: "black", margin:"20px 60px" }} className="">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="" style={{ width: "150px", height: "40px" }} />
                </a>
            </nav> */}
             

        
            <div className="maincontact">
                 
                <div className="contact-left">
                    {/* <div className="contactbutton">
                        <p>Contact Us</p>
                    </div> */}
                    <p className='detail-head' style={{ fontSize: 50 }}>Launch Your Own Token With Our Expert Support</p>
                    <p className="mcpara" style={{ lineHeight:"25px", fontWeight:"500" , fontSize: 20 }}>Embark on your token journey with our expert support. From conceptualization to execution, we guide you through the process, ensuring a successful token launch tailored to your needs. Launch confidently with our dedicated assistance.</p>
                    <div className="socialm">
                        <p className="socialhead">Follow us on Social Media</p>
                        <div className=" d-flex gap-4 mt-3 si">
                            <img src={fb} style={{ backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" />
                            <img src={it} style={{ backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" />
                            <img src={tg} style={{ backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" />
                        </div>
                    </div>
                </div>

                <div className="contact-right">

                    <form action=" " method="post" id='contact-form'>
                        <h1>Send Us a Message</h1>
                        <div id="inputs">

                            <input type="text" id="name" name="name" placeholder='Name' required />

                            <input type="email" id="email" name="email" placeholder='Email' required />

                            <input type="tel" id="phone" placeholder='Phone' name="phone" />

                            {/* <input type="text" id="budget" placeholder='Budget' name="budget" /> */}
                            <textarea id="message" name="message" rows="5" placeholder='Maggage' required></textarea>
                        </div>







                        <button type="submit">Submit</button>
                    </form>

                </div>

            </div>
        </>
    )
}

export default Landing
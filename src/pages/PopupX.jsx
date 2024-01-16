
import "../styles/PopupX2.css"
import fb from "../assets/logo/pho1.svg"



const popup = () => {
  return (
    <>

      <div id="po-main">
         
        <div id="po-right">

          <div className="maincontact">
            <div className="contact-left">

              <div id="po-left-text">

                <p className='detail-head' style={{ fontSize: 40 }}>Contact Us</p>
                <p className="mcpara" style={{ fontSize: 25 }}>We are here to support you</p>
              </div>

            </div>

            <div className="contact-right">

              <form action=" " method="post" id='contact-form'>
                <h1>Get A Live Demo</h1>
                <h4 style={{ fontSize: "17px", fontWeight: "500" }}>Lets sky rocket your Dream project togather</h4>
                <div id="inputs">

                  <input type="text" id="name" name="name" placeholder='Name' required />

                  <input type="email" id="email" name="email" placeholder='Email' required />

                  <input type="tel" id="phone" placeholder='Phone' name="phone" />


                  <select id="budget" name="menu">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>

                  </select>

                  <textarea id="message" name="message" rows="5" placeholder='Maggage' required></textarea>
                </div>

                <button id="po-sub" type="submit">Submit</button>
                <h3 style={{ fontSize: 15, textAlign: "center" }} >Protect your data is our #1 priority Your information is safe with us </h3>
                <div className="si">
                  <div  >
                    <img src={fb} style={{ margin: "10px", backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" />Osiz.tech

                  </div>
                  <div>

                    <img src={fb} style={{ margin: "10px", backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" /> +91 8888888888
                  </div>
                  <div>

                    <img src={fb} style={{ margin: "10px", backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="" />Osiz_text
                  </div>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>






    </>
  )
}

export default popup
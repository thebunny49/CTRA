
import "../styles/Popup.css"
// import fb from "../assets/logo/pho1.svg"



const popup = () => {
    return (
        <>
   
            {/* another popup  */}

            <div id="pop2">
                <div id="pop2-container">
                    <form id="pop2-form" action="">

                        <div id="heading">
                            <h3>Lets Quickely Bond</h3>
                        </div>

                        <div id="bottom">

                            <input type="text" className="   ex-input " id="ex-input" placeholder="Enter Your Name" />

                            <input type="email" className="   ex-input" id="ex-input" placeholder="Enter Your email" />

                            <input type="text" className="   ex-input" id="ex-input" placeholder="Enter Your number" />

                            {/* <input type="email" className="  ex-input " id="ex-input" placeholder="select your country" /> */}

                            <select className="ex-input" placeholder="Select Your Country" id="contry">
                                <option value="" disabled selected>Select Your Country</option>
                                <option value="india">india</option>
                                <option value="Bharat">Bharat</option>
                                <option value="india">india</option>
                                <option value="Bharat">Bharat</option>
                            </select>

                            <textarea className=" ex-input" id="ex-input" placeholder="Enter your Subject" rows="2"></textarea>

                        <button style={{width:"50%", margin:"0 auto"}}  className='s4button' id='btn1'>
                            Submit
                        </button>
                        </div>

                    </form>
                </div>
            </div>

            {/* <div id="shokwave-button">
                <div className='btn-container'>
                    <button className='btn btn--shockwave is-active'>
                        Shockwave
                    </button>

                </div>
            </div> */}

            
        </>
    )
}

export default popup
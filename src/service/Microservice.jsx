
import { useState } from 'react';

// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import chat from '../assets/chat.gif'
import whatsapp from '../assets/logo/wa-logo-chat.webp'
// import Tooltip from 'react-bootstrap/Tooltip';
// import PopupX2 from '../pages/PopupX2'
import WhatsPopup from '../pages/WhatsPopup';


const Microservice = () => {
  const [popup, setpopup] = useState('false');

  const handlepopup = (state) => {
    if (state === 'true') {
      setpopup('false')
    }
    else {
      setpopup('true');
    }
  }
  return (
    <>
      {/* <div className="support" >
        {['right'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Facebook
              </Tooltip>
            }
          >
            <a href='https://bit.ly/3GmCh71' className="homecircle fb"><div className="homecircle homepulse2 fb">

            </div></a>
          </OverlayTrigger>
        ))}

        {['right'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Instagram
              </Tooltip>
            }
          >
            <a href='https://bit.ly/3LOu10J' className="homecircle ig"><div className="homecircle homepulse ig"></div></a>
          </OverlayTrigger>
        ))}

        {['right'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                WhatsApp
              </Tooltip>
            }
          >
            <a href='https://bit.ly/3GnnFUJ' className="homecircle wa"><div className="homecircle homepulse3 wa"></div></a>
          </OverlayTrigger>
        ))}

        {['right'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Telegram
              </Tooltip>
            }
          >
            <a href='https://bit.ly/38mJes2' className="homecircle yt"><div className="homecircle homepulse4 yt"></div></a>
          </OverlayTrigger>
        ))}





      </div> */}

      <div className="chatsupport" >
        <div className="chat" style={{ width: 50, height: 50, overflow: "hidden", borderRadius: "150px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <img src={chat} alt="" style={{ width: 40, height: 40 }} />
        </div>
      </div>
      <div className="chatsupport2" >
        <div style={{ display: popup === 'false' ? 'block' : 'none'    }} >
          <WhatsPopup />
        </div>
        <div onClick={() => { handlepopup(popup) }} className="chat" style={{ width: 50, height: 50, overflow: "hidden", borderRadius: "150px", backgroundColor: "#49E670", display: "flex", justifyContent: "center", alignItems: 'center' }}>
          {/* <a href="https://bit.ly/3GnnFUJ" target='blank' > */}
          <img src={whatsapp} alt="" style={{ width: 35, height: 35 }} />
          {/* </a> */}
        </div>
      </div>

      <div className='parnt    ' id="rightsupport">

        <div className=" prshare blwhatsapp">
          <a href="https://bit.ly/3GnnFUJ" target='blank'>
            <i className=" fab fa-whatsapp"></i>
            <div>
              <p className="social_side_icons">WhatsApp</p>
              <p className="social_side_content">+ 91 8770632170</p>
            </div>
          </a>
        </div>
        <div className=" prshare btwiter">
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcryptora_tech" target='blank'>
            <i className=" fab fa-x-twitter"></i>
            <div>
              <p className="social_side_icons">Twitter</p>
              <p className="social_side_content">Cryptora Community</p>
            </div>
          </a>
        </div>
        <div className=" prshare btelegram">
          <a href="https://t.me/Cryptoracommunity" target='blank'>
            <i className=" fab fa-telegram"></i>
            <div>
              <p className="social_side_icons">Telegram</p>
              <p className="social_side_content">Cryptora Community</p>
            </div>
          </a>
        </div>
        <div className=" prshare binstagram">
          <a href="https://www.instagram.com/Cryptoratech/" target='blank'>
            <i className=" fab fa-instagram"></i>
            <div>
              <p className="social_side_icons">Instagram</p>
              <p className="social_side_content">Cryptora Community</p>
            </div>
          </a>
        </div>

      </div>
    </>
  )
}

export default Microservice
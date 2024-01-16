import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import chat from '../assets/chat.gif'
import whatsapp from '../assets/whatsapp.png'
import Tooltip from 'react-bootstrap/Tooltip';
const Microservice = () => {
  return (
    <>
         <div className="support">
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
         <a href='https://bit.ly/3GmCh71'  className="homecircle fb"><div className="homecircle homepulse2 fb">
     
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
       
      
    
       
        
       </div>

       <div className="chatsupport" >
        <div className="chat" style={{width:50, height:50, overflow:"hidden",borderRadius:"150px", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:'center'}}>
          <img src={chat} alt="" style={{width:40, height:40}} />
        </div>
       </div>
       <div className="chatsupport2" >
        <div className="chat" style={{width:50, height:50, overflow:"hidden",borderRadius:"150px", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:'center'}}>
          <a href="https://bit.ly/3GnnFUJ" target='blank' ><img src={whatsapp} alt="" style={{ width: 30, height: 30 }} />  </a>
        </div>
       </div>
    </>
  )
}

export default Microservice
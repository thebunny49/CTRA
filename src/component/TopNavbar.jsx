
import { useState } from 'react'
import Logo from '../assets/cryptora.png'
import Button1 from './Button1'
import '../styles/TopNavbar.css'
import '../styles/NavOption.css'
import { Link } from 'react-router-dom'
import PopupX2 from "../pages/PopupX2"

const TopNavbar = () => {
  const [visible, setvisible] = useState('false');

  const handleVisibility = (state) => {
    if (state == 'true') {
      setvisible('false');
    }
    else {
      setvisible('true')
    }
  }
  return (
    <>
      {/* <div className="nav">
        <div className="nav2">
                <img src={Logo} alt="" style={{width:"70%", height:"70%"}} />
            </div>
            <div className="nav1">
            
            <div class="nftdropdown">
    <buttonb >
   CRYPTOCURRENCY
      
    </buttonb>
    <div class="nftdropdown-content">
     <div className="navdiv">
      <div className="navcontent">
      <a href="#">NFT Marketplace</a>
      <a href="#">NFT Smart Contract</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">Community Building</a>
      <a href="#">Social Media Marketing</a>
      </div>
     </div>
    </div>
  </div> 
            <div class="nftdropdown">
    <buttonb >
    NFT Marketplace
      
    </buttonb>
    <div class="nftdropdown-content">
     <div className="navdiv">
      <div className="navcontent">
      <a href="#">NFT Marketplace</a>
      <a href="#">NFT Smart Contract</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">Community Building</a>
      <a href="#">Social Media Marketing</a>
      </div>
     </div>
    </div>
  </div> 
 
  <div class="nftdropdown">
    <buttonb >
    Decentralized Exchange
      
    </buttonb>
    <div class="nftdropdown-content">
     <div className="navdiv">
      <div className="navcontent">
      <a href="#"><span className="navtext">NFT Marketplace</span></a>
      <a href="#">NFT Smart Contract</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">Community Building</a>
      <a href="#">Social Media Marketing</a>
      </div>
     </div>
    </div>
  </div> 
  <div class="nftdropdown">
    <buttonb >
    ICO
      
    </buttonb>
    <div class="nftdropdown-content">
     <div className="navdiv">
      <div className="navcontent">
      <a href="#">NFT Marketplace</a>
      <a href="#">NFT Smart Contract</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">Community Building</a>
      <a href="#">Social Media Marketing</a>
      </div>
     </div>
    </div>
  </div> 
  <div class="nftdropdown">
    <buttonb >
    STACKING PLATFORM
      
    </buttonb>
    <div class="nftdropdown-content">
     <div className="navdiv">
      <div className="navcontent">
      <a href="#">NFT Marketplace</a>
      <a href="#">NFT Smart Contract</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">Community Building</a>
      <a href="#">Social Media Marketing</a>
      </div>
     </div>
    </div>
  </div> 
  <div class="nftdropdown">
    <buttonb >
   CRYPTO WALLET
      
    </buttonb>
    <div class="nftdropdown-content">
     <div className="navdiv">
      <div className="navcontent">
      <a href="#">NFT Marketplace</a>
      <a href="#">NFT Smart Contract</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">NFT Marketplace Support</a>
      <a href="#">Community Building</a>
      <a href="#">Social Media Marketing</a>
      </div>
     </div>
    </div>
  </div> 

            </div>
           
            <div className="nav3">
                <Button1 />
            </div>
        </div> */}
      <nav class=" navbar navbar-expand-lg nav">

        <div class="container-fluid">
          <a class="navbar-brand" href="/">                <img src={Logo} alt="" style={{ width: "70%", height: "70%" }} />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span ><img src="/apps.png" alt="" /></span>
          </button>
          <div class="collapse navbar-collapse navcollapse" id="navbarSupportedContent">
            <div className="nav1 navbar-nav me-auto mb-2 mb-lg-0">

              <div class="nftdropdown">
                <Link to="/crypto" style={{ textDecoration: "none" }}>
                  <buttonb >
                    CRYPTOCURRENCY

                  </buttonb>
                </Link>
                {/* <div class="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">NFT Marketplace</a>
                      <a href="#">NFT Smart Contract</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">Community Building</a>
                      <a href="#">Social Media Marketing</a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div class="nftdropdown">
                <Link to="/nft" style={{ textDecoration: "none" }}>
                  <buttonb >
                    <span style={{ textAlign: 'center' }}>NFT Marketplace</span>

                  </buttonb>
                </Link>

                {/* <div class="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">NFT Marketplace</a>
                      <a href="#">NFT Smart Contract</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">Community Building</a>
                      <a href="#">Social Media Marketing</a>
                    </div>
                  </div>
                </div> */}
              </div>

              <div class="nftdropdown">
                <Link to="/decentralized" style={{ textDecoration: "none" }}>
                  <buttonb >
                    DEX

                  </buttonb>
                </Link>

                {/* <div class="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#"><span className="navtext">NFT Marketplace</span></a>
                      <a href="#">NFT Smart Contract</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">Community Building</a>
                      <a href="#">Social Media Marketing</a>
                    </div>
                  </div>
                </div> */}
              </div>

              <div class="nftdropdown">
                <Link to="/ico" style={{ textDecoration: "none" }}>
                  <buttonb >
                    ICO

                  </buttonb>
                </Link>

                {/* <div class="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">NFT Marketplace</a>
                      <a href="#">NFT Smart Contract</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">Community Building</a>
                      <a href="#">Social Media Marketing</a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div class="nftdropdown">

                <Link to="/stacking" style={{ textDecoration: "none" }}>
                  <buttonb >
                    STACKING PLATFORM

                  </buttonb>
                </Link>
                {/* <div class="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">NFT Marketplace</a>
                      <a href="#">NFT Smart Contract</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">Community Building</a>
                      <a href="#">Social Media Marketing</a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div class="nftdropdown">

                <Link to="/cryptowallet" style={{ textDecoration: "none" }}>
                  <buttonb >
                    CRYPTO WALLET

                  </buttonb>
                </Link>
                {/* <div class="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">NFT Marketplace</a>
                      <a href="#">NFT Smart Contract</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">Community Building</a>
                      <a href="#">Social Media Marketing</a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div class="nftdropdown">
                <Link to="/blockchain" style={{ textDecoration: "none" }}>
                  <buttonb >
                    Blockchain

                  </buttonb>
                </Link>

                {/* <div class="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">NFT Marketplace</a>
                      <a href="#">NFT Smart Contract</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">NFT Marketplace Support</a>
                      <a href="#">Community Building</a>
                      <a href="#">Social Media Marketing</a>
                    </div>
                  </div>
                </div> */}
              </div>

            </div>
            <div className="nav3"  >
              <div id="div" onClick={() => handleVisibility(visible)}  >
                <Button1 />
              </div> 
              <div id="popup" style={{ display: visible === 'true' ? 'block' : 'none' }} >
                <PopupX2 />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopNavbar
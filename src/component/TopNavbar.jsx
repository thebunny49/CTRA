
import { useState } from 'react'
import Logo from '../assets/cryptora.png'
import Button1 from './Button1'
import '../styles/TopNavbar.css'
import '../styles/NavOption.css'
import { Link } from 'react-router-dom'
import PopupX2 from "../pages/PopupX2"
import "../component/TopNavbar.css"

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
            
            <div className="nftdropdown">
    <buttonb >
   CRYPTOCURRENCY
      
    </buttonb>
    <div className="nftdropdown-content">
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
            <div className="nftdropdown">
    <buttonb >
    NFT Marketplace
      
    </buttonb>
    <div className="nftdropdown-content">
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
 
  <div className="nftdropdown">
    <buttonb >
    Decentralized Exchange
      
    </buttonb>
    <div className="nftdropdown-content">
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
  <div className="nftdropdown">
    <buttonb >
    ICO
      
    </buttonb>
    <div className="nftdropdown-content">
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
  <div className="nftdropdown">
    <buttonb >
    STACKING PLATFORM
      
    </buttonb>
    <div className="nftdropdown-content">
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
  <div className="nftdropdown">
    <buttonb >
   CRYPTO WALLET
      
    </buttonb>
    <div className="nftdropdown-content">
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
      <nav className="topclass bg-black   navbar navbar-expand-lg nav">

        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={Logo} alt="" style={{ width: "90%", height: "90%" }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span ><img src="/apps.png" alt="" /></span>
          </button>
          <div className="collapse navbar-collapse navcollapse" id="navbarSupportedContent">
            <div className="nav1 navbar-nav me-auto mb-2 mb-lg-0">

              <div className="nftdropdown">
                <Link to="/crypto" style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* CRYPTOCURRENCY */}
                    Coin Development
                  </buttonb>
                </Link>
                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">Smart Contract Development</a>
                      <a href="#">Tokent/Coin development</a>
                      <a href="#">white Paper Design</a>
                      <a href="#">Tokenomices Design</a>
                      <a href="#">Custom Smart Contract</a>
                      <a href="#">Meme Token Development</a>
                      <a href="#">Stable Coin Development</a>
                      <a href="#">ICO/IEO/STO coin Development</a>
                      <a href="#">MLM Dex Contract Development</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nftdropdown">
                <Link to="/nft" style={{ textDecoration: "none" }}>
                  <buttonb >
                    <span style={{ textAlign: 'center' }}>NFT Marketplace</span>

                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">NFT Marketplace Development</a>
                      <a href="#">NFT Game Developmet</a>
                      <a href="#">NFT Sport Platform</a>
                      <a href="#">NFT Buy and sell Platform</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nftdropdown">
                <Link to="/decentralized" style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* DEX */}
                    Exchange
                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#"><span className="navtext">Exchange Development</span></a>
                      <a href="#">spot Trade Development</a>
                      <a href="#">P2P Development</a>
                      <a href="#">Crypto Algo Trade</a>
                      <a href="#">Binance Clone</a>
                      <a href="#">Launchpad Development</a>
                      <a href="#">Wallet Development</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nftdropdown">
                <Link to="/ico" style={{ textDecoration: "none" }}>
                  <buttonb >
                    ICO MAKETING
                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <a href="#">Social Media Marketing</a>
                      <a href="#">Influencer Marketing</a>
                      <a href="#">Listing Services</a>
                      <a href="#">Email Marketing</a>
                      <a href="#">Airdrop Planning</a>
                      <a href="#">Community Building</a>
                      <a href="#">Auditing Services</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nftdropdown">

                <Link to="/stacking" style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* STACKING PLATFORM */}
                    Blockchain Solution
                  </buttonb>
                </Link>
                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <Link to="/stacking">STACKING PLATFORM</Link>
                      <Link to="/decentralized">DECENTRALIZED EXCHANGE </Link>
                      <Link to="/cryptowallet">WALLET DEVELOPMENT </Link>
                      <Link to="/blockchain">BLOCKCHAIN</Link>
                      <a href="#">MLM Software</a>

                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="nftdropdown">

                <Link to="/cryptowallet" style={{ textDecoration: "none" }}>
                  <buttonb >
                    CRYPTO WALLET

                  </buttonb>
                </Link>
                <div className="nftdropdown-content">
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
              </div> */}

              <div className="nftdropdown">
                <Link to="/Aboutus" style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* Blockchain */}
                    Cryptora
                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent">
                      <Link to="/contact-us">Contact-Us</Link>
                      <Link to="/Aboutus">About Us</Link>
                    </div>
                  </div>
                </div>
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
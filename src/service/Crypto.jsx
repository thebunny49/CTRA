import React from 'react'
import './Crypto.css'
import TopNavbar from '../component/TopNavbar'
import './Service.css'
import Footer from  '../component/Footer'
import token1 from '../assets/token1.png'
import token2 from '../assets/token2.svg'
import token3 from '../../public/Crypto/token1.jpg'
import Waves from '../assets/crypto1.mp4'
const Crypto = () => {
    const data= {
        // nftsec1
        "heading1":"TOKEN DEVELOPMENT SERVICES",
        "para1": "For companies at every level of growth, Cryptora provides complete token services. We collaborate with clients to create ICOS white papers, providing deep expertise in the technology that underpins the service's capabilities.",
        "button1":"Expert Consultancy",
        "button2":"Download Broucher",
    
        // nftsec2
        "small2":"TOP FEATURES",
        "heading2":"What We Provide For Your Successful Business",
        "paragraph2":"Cryptora's real-world expertise allows us to provide our clients with comprehensive token production tools across industry hosts. Here are the features of Token Development Services.",
     
      //  nftsec3
        "small3":"OUR SERVICES",
      "heading3":"TOKEN DEVELOPMENT SERVICES",
      "paragraph3":"Cryptora, the premier Token Development Company, creates Tokens on the Ethereum, Tron, and Ripple frameworks for players looking for Tokens for efficient digital asset management",
       
      "cardheading1":"Ethereum Token",
        "cardparagraph1":"The Token Development Services aid in the development of Ethereum tokens. ERC20 , ERC777, ERC721, ERC827, ERC223, and the ERC1155 are some of the Ethereum Tokens.",
       
        "cardheading2":"Tron Token",
        "cardparagraph2":"The Tron Tokens can be created using the Token Development process. It creates DeFi tokens that execute quality of service across the Tron Blockchain network architecture.",
        
        "cardheading3":"BEP Token",
        "cardparagraph3":"The BEP20 Token Development process results in the design and creation of tokens. It uses BNB as their base currency and is compliant with the platforms that run on the Binance Smart Chain.",
        
        "cardheading4":"Solana Token",
        "cardparagraph4":"Solana Token Development Company, Developcoins pioneers in token creation services on Solana and other blockchain networks with custom smart contract.",
        
        "cardheading5":"Polygon Token",
        "cardparagraph5":"Polygon token development company offers best-in-class token development service to create crypto tokens on Polygon blockchain network.",
        
        "cardheading6":"NFT Development",
        "cardparagraph6":"NFT token development services are built around usability. Our NFT token developers ensure NFT tokens are properly created with secure functionality.",
      
      // nftsec4
       "small4":"FEATURES",
       "heading4":"FEATURES OF TOKEN DEVELOPMENT",
       "paragraph4":"We help you launch your own NFT marketplace and attract the growing community of NFT users. NFT marketplaces built by us are feature-rich, decentralized, and facilitate tokenization of all kinds of assets, including artwork, gaming cards, software licenses, digital collectibles, and real-world assets.",
    
       //s5main
       "small5":"FEATURES",
      "heading5":"WHY CHOOSE CRYPTORA FOR ICO MARKETING",
      "paragraph5":" Cryptora's real-world expertise allows us to provide our clients with comprehensive token production tools across industry hosts. Here are the features of Token Development Services.",
       
    
      //nftsec5
      "title1":"Detailed",
      "content1":"Your Token will comply entirely with the concept of ERC20 and will be compatible worldwide with each ERC20 wallet. It has name, symbol, and decimals.",
    
      "title2":"Burnable",
      "content2":"You will be able to burn your Token. It means that by burning any of the tokens you may opt to reduce the circulating stock.",
    
      "title3":"Mintable",
      "content3":"Via minting, you will produce tokens. Only the owner of the token will mint. If you don't want to produce any more tokens, you can also disable minting.",
    
      "title4":"Pausable",
      "content4":"You can delay your token movement. It is useful to prohibit trading until all token transactions have been unfrozen.",
    
      "title5":"Access to ownership",
      "content5":"You get complete ownership over your token. The token owners also get to mint new tokens and manage them.",
    
      "title6":"Capped",
      "content6":"You cannot create more tokens than the token limit specified. This ensures that people don't create more than declared tokens.",
      }
  return (
   <>
    <div id="cryptobody">
      <TopNavbar/>

      <div className='cryptosec1main' >
      <div className='overlay01'></div>
           <div id="cryptosec1" className=' container text-focus-in2'>
          
           <div id="cryptoleft">
                <p className='cryptohead'>{data.heading1}</p>
                <p className='cryptopara'>{data.para1}</p>
                <div className='cryptobutton'>
<button className='dexbutton'>
{data.button1}
</button>
<button className='dexbutton'>
{data.button2}
</button>

</div>
            </div>
            <div id="blockchainright">
                <div>
                
                
                </div>
            </div>
           </div>
           
        </div>


        
        <div id='cryptosec2' className="container">
            <div id="cryptoleft">
            <p className='cryptosmall'>{data.small2}</p>
                <p className='cryptoheading'>{data.heading2}</p>
                <p className='cryptoparagraph'>{data.paragraph2}</p>
                <div className='cryptobutton'>
<button className='dexbutton'>
Talk to Expert
</button>


</div>
            </div>
            <div id="cryptoright">
                <div>
                <img src={token1} alt="" style={{width:"100%", height:"100%"}} />
               
                
                </div>
            </div>
        </div>
        <div id="s5main" className='container'>
            <p className='s5small'>{data.small3}</p>
                <p className='cryptoheading'>{data.heading3}</p>
                <p className='cryptoparagraph'>
{data.paragraph3}</p>    
            </div>
        <div id='cryptosec3'>
        <div class="cryptocard">
  <div class="cryptocontent">
  <img src='/Crypto/cryptoc1.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading1}
    </p><p class="para">{data.cardparagraph1}</p>
   
  </div>
</div>
<div class="cryptocard">
  <div class="cryptocontent">
  <img src='/Crypto/cryptoc2.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading2}
    </p><p class="para">
{data.cardparagraph2}       </p>
    
  </div>
</div>
<div class="cryptocard">
  <div class="cryptocontent">
  <img src='/Crypto/cryptoc3.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading3}
    </p><p class="para">
{data.cardparagraph3}
     </p>
    
  </div>
</div>
<div class="cryptocard">
  <div class="cryptocontent">
  <img src='/Crypto/cryptoc4.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading4}
    </p><p class="para">
{data.cardparagraph4}
    </p>
    
  </div>
</div>
<div class="cryptocard">
  <div class="cryptocontent">
  <img src='/Crypto/cryptoc5.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading5}
    </p><p class="para">
{data.cardparagraph5}
    </p>
    
  </div>
</div>
<div class="cryptocard">
  <div class="cryptocontent">
  <img src='/Crypto/cryptoc6.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading6}
    </p><p class="para">
{data.cardparagraph6}
    </p>
    
  </div>
</div>


        </div>
        <div id='cryptosec2' className="container">
            <div id="cryptoleft">
            <p className='cryptosmall'>{data.small4} </p>
                <p className='cryptoheading'>{data.heading4}</p>
                <p className='cryptoparagraph'>{data.paragraph4}</p>
                <div className='cryptobutton'>
<button className='dexbutton'>
Talk to Expert
</button>


</div>
            </div>
            <div id="cryptoright">
                <div>
                <img src={token2} style={{width:300, height:300}}alt="" />
                
                </div>
            </div>
        </div>
       
        <div id="s5main" className='container'>
            <p className='s5small'>{data.small5} </p>
                <p className='cryptoheading'>{data.heading5}</p>
                <p className='cryptoparagraph'>
                {data.paragraph5}
</p>    
            </div>
        <div id='cryptosec5' className="container">
        <section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/Crypto/crypto1.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title1}</div>
      <div class="n5hover_content">
        <p> {data.content1}</p>
      </div>
    </div>
  </div>       
</section>
<section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/Crypto/crypto2.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title2}</div>
      <div class="n5hover_content">
        <p>{data.content2}</p>
      </div>
    </div>
  </div>       
</section>
<section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/Crypto/crypto4.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title3}</div>
      <div class="n5hover_content">
      <p>{data.content3}</p>      </div>
    </div>
  </div>       
</section>

<section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/Crypto/crypto41.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title4}</div>
      <div class="n5hover_content">
      <p>{data.content4}</p>      </div>
    </div>
  </div>       
</section>
<section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/Crypto/crypto5.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title5} </div>
      <div class="n5hover_content">
      <p>{data.content5}</p>      </div>
    </div>
  </div>       
</section>
<section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/Crypto/crypto6.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title6}</div>
      <div class="n5hover_content">
      <p>{data.content6}</p>      </div>
    </div>
  </div>       
</section>



        </div>
       <Footer />
        </div>
   </>
  )
}

export default Crypto
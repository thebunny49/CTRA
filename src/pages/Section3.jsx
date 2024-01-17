import React from 'react'
import S3Cards from '../component/S3Cards'
import '../styles/Section3.css'
import { Link } from 'react-router-dom'
const Section3 = () => {

  return (
    <>
      <div className="semain">
        <div className="t-area">
          <p className='s3heading'>OUR SERVICES</p>
          <p className='s3para1'>What we can do for you</p>
          <p className='s3para2'>By using exclusive in-house ideas that have been tried and refined over time, we assist crypto and blockchain based company brands in achieving their goals and idea in business expansion through innovative & creative approaches.</p>

        </div>
        <div className="s3main">
          <Link to="/crypto" style={{ textDecoration: "none" }}>
            <S3Cards title="Token Development" text="The Token Development Services aid in the development of Ethereum tokens. ERC20 and the BEP20 are some of the Ethereum Tokens." />
          </Link>
          <S3Cards title="Crypto Exchange" text="DEXs, or decentralized exchanges, allow consumers to purchase and sell cryptocurrencies without the involvement of brokers." />
          <Link to="/nft" style={{ textDecoration: "none" }}>
            <S3Cards title="NFT Marketplace" text="NFT marketplaces built by us are feature-rich, decentralized, and facilitate tokenization of all kinds of assets, artwork, gaming cards." />

          </Link>
          <Link to="/ico" style={{ textDecoration: "none" }}>
            <S3Cards title="ICO Marketplace" text="Cryptora is the premier NFT game development company that can assist you in launching your gaming platform based on bespoke blockchain and NFTs." />

          </Link>
          <Link to="/cryptowallet" style={{ textDecoration: "none" }}>
            <S3Cards title="Wallet Development" text="Users have complete control over their private keys and funds with a decentralized wallet supported by institutional-grade security and ease of usage." />

          </Link>
          <Link to="/blockchain" style={{ textDecoration: "none" }}>
            <S3Cards title="Blockchain Consulting" text="Our blockchain consultants understand your project-specific needs and help you identify the right blockchain protocol that suits your business case." />

          </Link>
          <Link to="/staking" style={{ textDecoration: "none" }}>
            <S3Cards title="Staking Platform" text="Staking Platforms are in high demand alongside the NFT marketplaces and are the basis for a variety of NFT-based services. They are rich in its features." />

          </Link>
          <Link to="/decentralized" style={{ textDecoration: "none" }}>
            <S3Cards title="DAPP Development" text="We design and develop peer to peer Decentralised Applications for a wide array of industries, including healthcare, supply chain and logistics, utility and startups." />

          </Link>

        </div>

      </div>
    </>
  )
}

export default Section3
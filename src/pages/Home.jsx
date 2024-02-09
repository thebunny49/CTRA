import { Helmet } from 'react-helmet'
// import React from 'react'
// import TopNavbar from '../component/TopNavbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Footer from '../component/Footer'

import '../styles/Home.css'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <title>Blockchain Development Company in India - Cryptora</title>
        <meta name='description' content='Cryptora is a leading company in Crypto and blockchain development services including Token Development, NFT Marketplace, Crypto Wallet and Consulting Services. ' />
        <meta name="keywords" content="Blockchain Development, Blockchain Development Company, Blockchain Development Services,Blockchain App Development Company,Blockchain App Development Services, Blockchain Software Development,Blockchain Software Development Company, Blockchain Development Company,Blockchain Application Development Company" />
        <meta property="og:site_name" content="Cryptora" />
        <meta property="og:url" content="https://cryptora.tech/" />
        <meta property="og:title" content="Blockchain Development Company in India - Cryptora" />
        <meta property="og:description" content="Cryptora is a leading company in blockchain development services including Token Development, Crypto Wallet and Consulting Services." />
        <meta name="keywords" content="Blockchain Development, Blockchain Development Company, Blockchain Development Services, Blockchain App Development Company, Blockchain App Development Services, Blockchain Software Development, Blockchain Software Development Company, Blockchain Development Company, Blockchain Application Development Company" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content=" Add Website Logo URL" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://cryptora.tech/" />
        <meta name="twitter:title" content="Blockchain Development Company in India - Cryptora" />
        <meta name="twitter:description" content="Cryptora is a leading company in blockchain development services including Token Development, Crypto Wallet and Consulting Services." />
        <link rel="canonical" href="https://cryptora.tech" />
      </Helmet>

      <div style={{ overflowX: "hidden" }} >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Footer />

      </div>
    </>
  )
}

export default Home
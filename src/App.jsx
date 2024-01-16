import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import chat from './assets/chat.gif';
import Microservice from './service/Microservice';
import ContactUs from './pages/ContactUs';
import Aboutus from './pages/Aboutus';
import PopupX from './pages/PopupX';
import PopupX2 from './pages/PopupX2';
// import Services from './service/Services';

// Lazy-loaded components
const Services = lazy(() => import('./service/Services'));
const Service = lazy(() => import('./pages/C-Service'));
const NFTDev = lazy(() => import('./service/NFTDev'));
const ICO = lazy(() => import('./service/ICO'));
const Blockchain = lazy(() => import('./service/Blockchain'));
const Crypto = lazy(() => import('./service/Crypto'));
const Decentralized = lazy(() => import('./service/Decentralized'));
const CryptoWallet = lazy(() => import('./service/CryptoWallet'));
const StackingPlatform = lazy(() => import('./service/StackingPlatform'));


// Loading spinner component
const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
   <div className="loader">
</div>
  </div>
);
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes (replace with actual data fetching)
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 9000); // 3000 milliseconds (3 seconds)

    return () => clearTimeout(delay); // Cleanup the timeout when the component unmounts
  }, []);
  return (
    <>
     <Microservice />
      <BrowserRouter>
        <Suspense fallback={isLoading ? <Loader /> : null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="nft" element={<NFTDev />} />
            <Route path="crypto" element={<Crypto />} />
            <Route path="ico" element={<ICO />} />
            <Route path="blockchain" element={<Blockchain />} />
            <Route path="decentralized" element={<Decentralized />} />
            <Route path="cryptowallet" element={<CryptoWallet />} />
            <Route path="stacking" element={<StackingPlatform />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="c-service" element={<Service />} />
            <Route path="Aboutus" element={<Aboutus/>}/>
            <Route path="PopupX" element={<PopupX/>}/>  
            <Route path="PopupX2" element={<PopupX2/>}/>  
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;

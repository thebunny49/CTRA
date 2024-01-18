import React from 'react'
import '../styles/Footer.css'
import Arrow from '../assets/arre.gif'
import { Link } from 'react-router-dom'
const Footer = () => {
	return (
		<>
			<div className="fmain">
				<footer className="footer-02" >
					<div className="container" style={{ paddingTop: 73 }}>
						<div className="row justify-content-center">
							<div className="col-10 col-lg-6">
								<div className="subscribe mb-5">
									<form action="#" className="subscribe-form" >
										<div className="form-group d-flex" style={{ flexDirection: 'row', }}>
											<input type="text" className="form-control rounded-left" placeholder="Enter email address" style={{ paddingLeft: 30 }} />
											<button className='s4button' style={{ color: 'black', fontWeight: 800, borderRadius: 50, width: "60%", fontSize: 12 }}>
												Contact Now <img src={Arrow} alt="" className='arrow' style={{ width: 25, height: 25 }} />
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-lg-5" >
								<div className="row">
									<div className="col-md-12 col-lg-8 mb-md-0 mb-4">
										<h2 className="footer-heading">Cryptora</h2>
										<p>We provide crypto and blockchain development company with experience in NFT marketplace development, token development, crypto wallet development.</p>

									</div>
									<div className="col-md-12 col-lg-8 mb-md-0 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>




										<a style={{ textAlign: 'left' }} ><p>Whatsapp & Call Number  (Worldwide 24*7)</p></a>
										<a> + 91 8770632170</a>
										<a>info@digitalonebox.com</a>
									</div>
								</div>
							</div>
							<div className="col-md-8 col-lg-7">
								<div className="row">
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Quick Links</h2>
										<ul className="list-unstyled">

											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Cryptocurrency Token Development</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">ICO Marketing</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">NFT Marketplace Development</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Decentralized Exchange</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Staking Platform DApp</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Multichain Crypto Wallet</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Blockchain Consulting</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Decentralized Applications</a></li>
										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">About</h2>
										<ul className="list-unstyled">
											{/* <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Staff</a></li> */}
											{/* <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Team</a></li> */}
											{/* <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Careers</a></li> */}
											{/* <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Blog</a></li> */}
											<li><Link to="c-service" style={{ textDecoration: 'none' }} className="py-1 d-block">Services</Link></li>
											<li><Link to="Aboutus" style={{ textDecoration: 'none' }} className="py-1 d-block">About Us</Link></li>
											<li><Link to="/contact-us" style={{ textDecoration: 'none' }} className="py-1 d-block">Contact Us</Link></li>
										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Privacy</h2>
										<ul className="list-unstyled">
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Terms and condition</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Privacy Policy</a></li>

										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Social</h2>
										<ul className="list-unstyled">
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Facebook</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Twitter</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Instagram</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Googleplus</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-md-6 col-lg-8">


							</div>

						</div>
					</div>
				</footer>
			</div>

		</>
	)
}

export default Footer
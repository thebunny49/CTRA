import { useState } from 'react'
import '../styles/Section6.css'
import fwimg1 from "/Framework/fwimg1.png"
import fwimg2 from "/Framework/fwimg2.png"
import fwimg3 from "/Framework/fwimg3.png"
import fwimg4 from "/Framework/fwimg4.png"
import fwimg5 from "/Framework/fw1.png"
import fwimg6 from "/Framework/fw2.png"

import fwimg21 from "/Framework/fwicon21.png"
import fwimg22 from "/Framework/fwicon22.png"
import fwimg23 from "/Framework/fwicon23.png"
import fwimg24 from "/Framework/fwicon24.png"
import fwimg25 from "/Framework/fwicon25.png"
import fwimg26 from "/Framework/fwicon26.png"

import fwimg31 from "/Framework/tools1.png"
import fwimg32 from "/Framework/tools2.png"
import fwimg33 from "/Framework/tools3.png"
import fwimg34 from "/Framework/tools4.png"
import fwimg35 from "/Framework/tools5.png"
import fwimg36 from "/Framework/tools6.png"

import fwimg41 from "/Framework/lang1.png"
import fwimg42 from "/Framework/lan2.png"
import fwimg43 from "/Framework/lang3.png"
import fwimg44 from "/Framework/lang4.png"
import fwimg45 from "/Framework/lang5.png"
import fwimg46 from "/Framework/lang6.png"

import folderimg from "../assets/logo/folderimg.png"
const Section6 = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  }
  return (
    <>
      <div className="s7main ">
        <div className="t-area">
          <p className='s7para1'> Empowering Innovation Through Our Cutting-Edge Tech Stack</p>

          <div className="conta">
            <div id="contaniner">

              <div id="tabs">
                <input type="radio" name="tabs" id="home-ch"
                  onClick={() => handleSectionChange('home')}
                />
                <label htmlFor="home-ch" style={{ background: activeSection === 'home' ? '#7B61FF' : 'none' }} id="home-lb"  ><div><i className="fa-solid fa-house"></i> Framework</div></label>

                <input type="radio" name="tabs" id="blog-ch"
                  onClick={() => handleSectionChange('blog')} />

                <label htmlFor="blog-ch" style={{ background: activeSection === 'blog' ? '#7B61FF' : 'none' }} id="blog-lb"><div><i className="fa-brands fa-blogger"></i> Frontend/Backend</div></label>

                <input type="radio" name="tabs" id="code-ch"
                  onClick={() => handleSectionChange('code')} />

                <label htmlFor="code-ch" style={{ background: activeSection === 'code' ? '#7B61FF' : 'none' }} id="code-lb"><div><i className="fa-solid fa-code"></i> Tools</div></label>

                <input type="radio" name="tabs" id="project-ch"
                  onClick={() => handleSectionChange('project')} />

                <label htmlFor="project-ch" style={{ background: activeSection === 'project' ? '#7B61FF' : 'none' }} id="project-lb"><div><i className="fa-solid fa-bars-progress"></i> Language</div></label>

              </div>
              <div id="text">

                <div id="home-txt" style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
                  <p className="txt-head">FRAMEWORKS</p>
                  <div className="fw">
                    <div className='boxdetail'>
                      <div className="fwbox">
                        <img src={fwimg1} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg2} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg3} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                    </div>
                    <div className='boxdetail'>
                      <div className="fwbox">
                        <img src={fwimg4} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg5} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg6} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                    </div>



                  </div>
                </div>

                <div id="blog-txt" style={{ display: activeSection === 'blog' ? 'block' : 'none' }}>
                  <p className="txt-head">FRONTEND/BACKEND</p>
                  <div className="fw">
                    <div className='boxdetail'>
                      <div className="fwbox">
                        <img src={fwimg21} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg22} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg23} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                    </div>
                    <div className='boxdetail'>
                      <div className="fwbox">
                        <img src={fwimg24} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg25} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg26} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                    </div>



                  </div>
                </div>

                <div id="code-txt" style={{ display: activeSection === 'code' ? 'block' : 'none' }}>

                  <p className="txt-head">TOOLS</p>
                  <div className="fw">
                    <div className='boxdetail'>
                      <div className="fwbox">
                        <img src={fwimg31} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg32} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg33} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                    </div>
                    <div className='boxdetail'>
                      <div className="fwbox">
                        <img src={fwimg34} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg35} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg36} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                    </div>



                  </div>
                </div>

                <div id="project-txt" style={{ display: activeSection === 'project' ? 'block' : 'none' }}>

                  <p className="txt-head">LANGUAGE</p>
                  <div className="fw">
                    <div className='boxdetail'>
                      <div className="fwbox">
                        <img src={fwimg41} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg42} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg43} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                    </div>
                    <div className='boxdetail'>
                      <div className="fwbox">
                        <img src={fwimg44} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg45} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                      <div className="fwbox">
                        <img src={fwimg46} className='fwimg' alt="" />
                        <p>Icon1</p>
                      </div>
                    </div>



                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <div id="pdf-cards">
        <a target='blank' id='card' href="../assets/pdf/CRYPTORA SERVICE PROPOSAL 1.pdf">
              <h5 className="card-text">Pitch Desk</h5>
              <img className="rounded center" src={folderimg} alt="image" width="74px" height="59px" />
        </a>
        <a target='blank' id='card' href=" ../assets/pdf/CRYPTORA SERVICE PROPOSAL 1.pdf">
    
              <h5 className="card-text">Service Catalogue</h5>
              <img className="rounded center" src={folderimg} alt="image" width="74px" height="59px" />
 
        </a>
        <a target='blank' id='card' href="../assets/pdf/CRYPTORA  PRODUCT PROPOSAL 3.pdf">
    
              <h5 className="card-text">Product Catalogue</h5>
              <img className="rounded center" src={folderimg} alt="image" width="74px" height="59px" />
 
        </a>

      </div>
    </>
  )
}

export default Section6
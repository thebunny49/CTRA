import React from 'react'
import '../styles/Section7.css'

const Section7 = () => {
  return (
    <>
         
    <div className="s8main">
    <div class="testimonials-clean">
        <div class="container">
        <header class="text-center  text-white" style={{display:'flex', justifyContent:'center', flexDirection:'column', paddingTop:50}}>
            <p  class="s2heading">Testimonials</p>
           <div style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
           <p class="font-italic mb-1 testimonialpara" >Our customers love us! Read what they have to say below. They are just some of those who have trusted our services. Project delivered, happy customer with Cryptora Tech.</p>
           
           </div>
        </header>
            
            <div class="row people">
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                        <h5 class="name">Ben Johnson</h5>
                        <p class="title">CEO of Company Inc.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
                        <h5 class="name">Carl Kent</h5>
                        <p class="title">Founder of Style Co.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
                        <h5 class="name">Emily Clark</h5>
                        <p class="title">Owner of Creative Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/* blog */}



    </div>
    </>
  )
}

export default Section7
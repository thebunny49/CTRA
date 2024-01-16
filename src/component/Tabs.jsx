import React from 'react'
import './Tabs.css'

const Tabs = () => {
  return (
    <>
        <section class="py-5 header">
    <div class="container py-4">
        <header class="text-center mb-5 pb-5 text-white">
            <h1 class="display-4">Empowering Innovation Through Our Tech Stack</h1>
            <p class="font-italic mb-1">With a robust and adaptable technology foundation, we empower our teams and clients to push boundaries, embrace creativity, and pioneer the future. Join us on this exciting journey, where innovation knows no bounds, and together, we'll shape a world defined by limitless possibilities.</p>
           
        </header>


        <div class="content">
    
    <div class="container">
      

      <div class="d-flex carousel-nav">
        <a href="#" class="col active">First Tab</a>
        <a href="#" class="col">Second Tab</a>
        <a href="#" class="col">Third Tab</a>
      </div>


      <div class="owl-carousel owl-1">

        <div class="media-29101 d-md-flex w-100">
          <div class="img">
            <img src="images/hero_1.jpg" alt="Image" class="img-fluid" />
          </div>
          <div class="text">
            <a class="category d-block mb-4" href="#">Travel &mdash; First Tab</a>
            <h2><a href="#">Take your mobile photography to the next level</a></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fuga optio dolorem, fugit voluptates sint ducimus praesentium iste!</p>
          </div>
        </div> 

        <div class="media-29101 d-md-flex w-100">
          <div class="img">
            <img src="images/hero_2.jpg" alt="Image" class="img-fluid" />
          </div>
          <div class="text">
            <a class="category d-block mb-4" href="#">Travel &mdash; Second Tab</a>
            <h2><a href="#">Take your mobile photography to the next level</a></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fuga optio dolorem, fugit voluptates sint ducimus praesentium iste!</p>
          </div>
        </div> 

        <div class="media-29101 d-md-flex w-100">
          <div class="img">
            <img src="images/hero_3.jpg" alt="Image" class="img-fluid" />
          </div>
          <div class="text">
            <a class="category d-block mb-4" href="#">Travel &mdash; Third Tab</a>
            <h2><a href="#">Take your mobile photography to the next level</a></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fuga optio dolorem, fugit voluptates sint ducimus praesentium iste!</p>
          </div>
        </div> 

        

      </div>
    </div>
  </div>
    </div>
</section>
    </>
  )
}

export default Tabs
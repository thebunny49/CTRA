
import './Tabs.css'

const Tabs = () => {
  return (
    <>
      <section className="py-5 header">
        <div className="container py-4">
          <header className="text-center mb-5 pb-5 text-white">
            <h1 className="display-4">Empowering Innovation Through Our Tech Stack</h1>
            <p className="font-italic mb-1">With a robust and adaptable technology foundation, we empower our teams and clients to push boundaries, embrace creativity, and pioneer the future. Join us on this exciting journey, where innovation knows no bounds, and together, we'll shape a world defined by limitless possibilities.</p>

          </header>


          <div className="content">

            <div className="container">


              <div className="d-flex carousel-nav">
                <a href="#" className="col active">First Tab</a>
                <a href="#" className="col">Second Tab</a>
                <a href="#" className="col">Third Tab</a>
              </div>


              <div className="owl-carousel owl-1">

                <div className="media-29101 d-md-flex w-100">
                  <div className="img">
                    <img src="images/hero_1.jpg" alt="Image" className="img-fluid" />
                  </div>
                  <div className="text">
                    <a className="category d-block mb-4" href="#">Travel &mdash; First Tab</a>
                    <h2><a href="#">Take your mobile photography to the next level</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fuga optio dolorem, fugit voluptates sint ducimus praesentium iste!</p>
                  </div>
                </div>

                <div className="media-29101 d-md-flex w-100">
                  <div className="img">
                    <img src="images/hero_2.jpg" alt="Image" className="img-fluid" />
                  </div>
                  <div className="text">
                    <a className="category d-block mb-4" href="#">Travel &mdash; Second Tab</a>
                    <h2><a href="#">Take your mobile photography to the next level</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fuga optio dolorem, fugit voluptates sint ducimus praesentium iste!</p>
                  </div>
                </div>

                <div className="media-29101 d-md-flex w-100">
                  <div className="img">
                    <img src="images/hero_3.jpg" alt="Image" className="img-fluid" />
                  </div>
                  <div className="text">
                    <a className="category d-block mb-4" href="#">Travel &mdash; Third Tab</a>
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
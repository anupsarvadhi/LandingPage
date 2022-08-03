import React from 'react'
import '../componant/style.css'
import { BsArrowDownShort, BsArrowRight } from 'react-icons/bs'
import video from './Assets/video/one.mp4'

const Contain = () => {
  return (
    <>
      <section className="main-section">
        <div className="main-overlay"></div>

        <video className="hero__video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="main-content h-100 container-custom position-relative">
          <div className="d-flex h-100 align-items-center video-heading">
            <div className="text-white">
              <h1 className="heading fw-bold mb-4">
                Discover The Taste Of Real Coffee.
              </h1>
              <p className="lead mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <a
                href="/"
                className="mt-2 btn btn-lg btn-outline-light text-light"
                role="button"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>

        <a href="#scroll-down" className="scroll-btn">
          Explore <BsArrowDownShort className="bi" />
        </a>
      </section>
      <a href="/" id="scroll-down">
        .
      </a>
      <section className="steps container-custom">
        <div className="row">
          <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter">
            <img
              src={require('./Assets/Image/1-coffe.jpg')}
              alt="Coffe Flavour"
              className="img-fluid pb-4 steps-section"
            />
          </div>

          <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
            <div className="steps__content-width">
              <span>01</span>
              <h1 className="h2 mb-4">Amazing Coffee Flavour</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia totam dolorem quasi! Quis fugiat totam id fuga non
                distinctio incidunt amet nesciunt itaque, tempore repellat eos
                natus quo mollitia laborum.
              </p>
              <a href="/">
                Read More <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="steps steps--background">
        <div className="container-custom">
          <div className="row">
            <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter order-sm-1">
              <img
                src={require('./Assets/Image/2-health.jpg')}
                alt="Health Benefits"
                className="img-fluid pb-4 steps-section"
              />
            </div>

            <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
              <div className="steps__content-width">
                <span>02</span>
                <h1 className="h2 mb-4">Surprising Health Benefits</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia totam dolorem quasi! Quis fugiat totam id fuga non
                  distinctio incidunt amet nesciunt itaque, tempore repellat eos
                  natus quo mollitia laborum.
                </p>
                <a href="/">
                  Read More <BsArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps container-custom">
        <div className="row">
          <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter">
            <img
              src={require('./Assets/Image/3-essential.jpg')}
              alt="Essential Nutrients"
              className="img-fluid pb-4 steps-section"
            />
          </div>

          <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
            <div className="steps__content-width">
              <span>03</span>
              <h1 className="h2 mb-4">Essential Nutrients</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia totam dolorem quasi! Quis fugiat totam id fuga non
                distinctio incidunt amet nesciunt itaque, tempore repellat eos
                natus quo mollitia laborum.
              </p>
              <a href="/">
                Read More <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white py-4">
        <div className="container-custom my-4">
          <div className="row">
            <div className="col-12 col-sm-4 mb-4">
              <img
                src={require('./Assets/Image/1-coffee-footer.jpg')}
                className="mb-4 img-fluid"
                alt="Coffe Flavour"
              />
              <h3>Amazing Coffee Flavour</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>

            <div className="col-12 col-sm-4 mb-4">
              <img
                src={require('./Assets/Image/2-health-footer.jpg')}
                className="mb-4 img-fluid"
                alt="Health Benefits"
              />
              <h3>Health Benefits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>

            <div className="col-12 col-sm-4 mb-4">
              <img
                src={require('./Assets/Image/3-essential-footer.jpg')}
                className="mb-4 img-fluid"
                alt="Essential Nutrients"
              />
              <h3>Essential Nutrients</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                veniam ullam illo dolorum dolor. Dolor, velit vitae? Fugiat
                quidem nostrum nobis sit beatae consequuntur quisquam iusto
                reprehenderit voluptatibus officia? Natus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contain

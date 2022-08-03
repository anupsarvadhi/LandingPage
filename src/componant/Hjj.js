import React from 'react'

const Hjj = () => {
  return (
    <>
      <nav className="collapse navbar-collapse dropdown-nav" id="navbar">
        <div className="dropdown-nav__container container-xxl d-flex align-items-start align-items-md-center">
          <div className="row align-items-start">
            <div className="col-12 col-sm-4 mt-4">
              <a href="/" className="row text-decoration-none">
                <div className="col-2 col-sm-12 mb-4">
                  <img
                    src={require('./Assets/Image/1-coffe.jpg')}
                    alt="Coffe Flavour"
                    className="img-fluid"
                    width="553"
                    height="746"
                    loading="lazy"
                  />
                </div>
                <div className="col-10">
                  <h3>Amazing Flavour</h3>
                  <p>Find out more about our aAmazing Flavour</p>
                  <p>
                    Learn More <i className="bi bi-arrow-right-short"></i>
                  </p>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-4 mt-4">
              <a href="/" className="row text-decoration-none">
                <div className="col-2 col-sm-12 mb-4">
                  <img
                    src={require('./Assets/Image/2-health.jpg')}
                    alt="Coffe Flavour"
                    className="img-fluid"
                    width="553"
                    height="746"
                    loading="lazy"
                  />
                </div>
                <div className="col-10">
                  <h3>Surprising Benefits</h3>
                  <p>Find out more about our Surprising Benefits</p>
                  <p>
                    Learn More <i className="bi bi-arrow-right-short"></i>
                  </p>
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-4 mt-4">
              <a href="/" className="row text-decoration-none">
                <div className="col-2 col-sm-12 mb-4">
                  <img
                    src={require('./Assets/Image/3-essential.jpg')}
                    alt="Coffe Flavour"
                    className="img-fluid"
                    width="553"
                    height="746"
                    loading="lazy"
                  />
                </div>
                <div className="col-10">
                  <h3>Essential Nutrients</h3>
                  <p>Find out more about our Essential Nutrients</p>
                  <p>
                    Learn More <i className="bi bi-arrow-right-short"></i>
                  </p>
                </div>
              </a>
            </div>
          </div>

          <button
            className="navbar-toggler dropdown-nav__closeNavBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <BsX className="list-btn" /> */}aaa
          </button>
        </div>
      </nav>
    </>
  )
}

export default Hjj

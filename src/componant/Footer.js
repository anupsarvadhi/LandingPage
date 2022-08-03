import React from 'react'
import './style.css'
import { BsFacebook, BsTwitter, BsInstagram, BsCup } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-white">
        <div className="container-custom d-flex justify-content-between align-items-center py-3 border-highlight">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="me-2 text-muted text-decoration-none">
              <BsCup />
              <span>&copy; 2022 GorillaCoffee</span>
            </a>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-white">
            <li className="ms-3">
              <a className="text-muted" href="/">
                <BsInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/">
                <BsTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="/">
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer

  import React from "react";
  import { Link } from "react-router-dom";

  const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom ">
        {/*logo*/}
        <div className="container-fluid px-5">
          <Link className="navbar-brand text-md fw-semibold" to="/" style={{color:"#8a4af3"}}>
            Jillion Technologies
          </Link>

          {/*button*/}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*ul list*/}
          <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold" style={{color:"#8a4af3"}}>
              <li className="nav-item">
                <Link className="nav-link" to="#" style={{color:"#8a4af3"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#feature" style={{color:"#8a4af3"}}>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#products"  style={{color:"#8a4af3"}}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#testimonial"  style={{color:"#8a4af3"}} >
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#contact"  style={{color:"#8a4af3"}}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;

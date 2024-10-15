import React from "react";
import HeroImg from "../../assets/hero-img.png";
const Hero = () => {
  return (
    <>
      <div className="container-fluid px-5 mt-5">
        <div className="row align-items-center">
          {/*text*/}
          <div className=" col-12 col-md-6 mb-4 mb-md   ">
            <h2 style={{ color: "#4C25D9" }}>WE MAKE OUR IDEA's</h2>
            <h2 style={{ color: "#FFC745" }}>INTO REALITY</h2>
            <p className="w-100 w-md-75 ">
              Some quick example text build on the card title and make up the
              bulk of the card's content.Some quick example text build on the
              card title and make up the bulk of the card's content{" "}
            </p>
            <div className="d-flex gap-3 ">
              <button
                className="btn text-light"
                style={{ background: "#3a1ca6" }}
              >
                Get Started
              </button>
              <button className="  custom-btn" style={{ color: "#8a4af3" }}>
                Contact Us
              </button>
            </div>
          </div>

          {/*Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center mt-4     ">
            <img src={HeroImg} alt="main image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

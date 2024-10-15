import React from "react";
import Test1 from "../../assets/test-1.jpg";
import Test2 from "../../assets/test-2.jpg";
import Test3 from "../../assets/test-3.jpg";

const Testimonial = () => {
  return (
    <>
      <div className=" container-fluid mt-5 ">
        <h1 className="text-center">Testimonial</h1>
        <div className="row justify-content-center px-5 ">
          <div
            id="carouselExampleControls"
            className="carousel slide col-sm-12 col-md-10 col-lg-8"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner text-center ">
              <div className="carousel-item active col-12  mx-auto  ">
                <img
                  src={Test1}
                  className="d-block mb-2 mx-auto "
                  alt="..."
                  width={"150px"}
                  height={"150px"}
                  style={{ borderRadius: "50%" }}
                ></img>
                <p className="w-100 w-md-75 mx-auto">
                  They transformed our vision into a stunning, fully functional
                  website. We saw an immediate increase in user engagement after
                  launch. Their expertise in modern web technologies and
                  attention to detail were impressive. Great job
                </p>
                <h3 className="text-success fs-3">
                  Priya Natarajan{" "}
                  <span className="fs-6" style={{ color: "GrayText" }}>
                    Founder, Priya’s Organic Foods
                  </span>
                </h3>
              </div>
              <div className="carousel-item col-12 mx-auto  ">
                <img
                  src={Test2}
                  className="d-block  mb-2 mx-auto"
                  alt="..."
                  width={"150px"}
                  height={"150px"}
                  style={{ borderRadius: "50%" }}
                ></img>
                <p className="w-75 mx-auto">
                  The website designed by the team exceeded our expectations!
                  It's visually appealing, user-friendly, and has significantly
                  improved our online presence. Our customers love the seamless
                  navigation, and it has positively impacted our business.
                  Highly recommend!
                </p>
                <h3 className="text-success fs-3">
                  PAUL WILSON{" "}
                  <span className="fs-6" style={{ color: "GrayText" }}>
                    Media Analyst
                  </span>
                </h3>
              </div>
              <div className="carousel-item col-12 mx-auto">
                <img
                  src={Test3}
                  className="d-block   mb-2 mx-auto"
                  alt="..."
                  width={"150px"}
                  height={"150px"}
                  style={{ borderRadius: "50%" }}
                ></img>
                <p className="w-75 mx-auto">
                  Working with this developer was a game-changer for us. The
                  professionalism and technical skills were top-notch. Our
                  project was delivered ahead of schedule, and the end product
                  was flawless. Truly an excellent experience!
                </p>
                <h3 className="text-success fs-3">
                  Michael Leespa{" "}
                  <span className="fs-6" style={{ color: "GrayText" }}>
                    CEO, Tech Innovators
                  </span>
                </h3>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            > 
              <span
                className="carousel-control-prev-icon text-bg-secondary "
                aria-hidden="true"style={{
                  backgroundColor: "#28a745", // Button background color
                  borderRadius: "50%",
                  padding: " 20px",
                }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon  text-bg-secondary "
                aria-hidden="true"  style={{
                  backgroundColor: "#28a745", // Button background color
                  borderRadius: "50%",
                  padding: "10px",
                }}
                
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

import React from "react";

import ContactImg from "../../assets/contact-img.png";
const About = () => {
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="row w-100 px-5  mx-auto">
          <div className="col-12 col-md-6">
            <img src={ContactImg} className="w-75" alt="contact" />
          </div>
          <div className="col-12 col-md-6 mt-5  ">
            <form action="">
              <div class="mb-3">
                <label for="input1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="input1"
                  placeholder="Name"
                ></input>
                <label for="input2" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="input2"
                  placeholder="name@example.com"
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="custom-btn px-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

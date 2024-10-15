import React from "react";
import Man from "../../assets/man.png";
import ComputerMan from "../../assets/computer-man.png";

const Features = () => {
  return (
    <>
      <div className="container-fluid mt-5 py-3 ">
        <h3 className="text-center">Feature</h3>

        <div className="row w-100 mx-auto mt-5 py-5 px-5" >

          {/*card-1 */}
          <div className="col-12 mb-4 ">
            <div className="row align-align-items-center ">
              <div className="col-12 col-md-6 ">
                <img src={Man} alt="man image"style={{ maxWidth: "60%", height: "auto" }} />
              </div>
              <div className="col-12 col-md-6 mt-4  text-md-start text-center    ">
                <h3>Card</h3>
                <p>
                  Some quick example text build on the card title and make up the bulk of the card's content
                  
                </p>
              </div>
            </div>

            {/*card-2*/}
          </div>
          <div className="col-12 mt-5 ">
            <div className="row align-align-items-center ">
            <div className="col-12 col-md-6 mt-4  text-md-start text-center  ">
                <h3>Card</h3>
                <p className="">
                  Some quick example text build on the card title and make up the bulk of the card's content
                </p>
              </div>
              <div className="col-12 col-md-6 ">
                <img src={ComputerMan} alt="man image"style={{ maxWidth: "60%", height: "auto" }} />
              </div>
              
            </div>
          </div>

          {/*card-3 */}
          <div className="col-12 mt-5 ">
            <div className="row align-align-items-center ">
              <div className="col-12 col-md-6 ">
                <img src={Man} alt="man image"style={{ maxWidth: "60%", height: "auto" }} />
              </div>
              <div className="col-12 col-md-6 mt-4  text-md-start text-center  ">
                <h3>Card</h3>
                <p>
                  Some quick example text build on the card title and make up the bulk of the card's content
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Features;

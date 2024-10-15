import React from "react";
import Img1 from "../../assets/3190343.jpg";
import Img2 from "../../assets/image-3.jpg";
import Img3 from "../../assets/programming-background-collage.jpg";

const Products = () => {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center my-4">Products</h1>

        <div className="row gx-4 gy-4 mx-auto" style={{ width: "95%" }}>
          <div className="col-md-4 col-sm-6 col-12">
            <div className="card h-100 rounded-3 px-5 py-1" >
              <img src={Img1} className="card-img-top mx-auto mt-5 " alt="Product 1" ></img>
              <div className="card-body">
                <h5 className="card-title mt-1">Card title 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="card h-100 px-5 py-1" >
              <img src={Img2} className="card-img-top mx-auto mt-5"  alt="Product 2" ></img>
              <div className="card-body">
                <h5 className="card-title mt-1">Card title 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12">
            <div className="card h-100 py-1 px-5" >
              <img src={Img3} className="card-img-top mx-auto mt-5 " alt="Product 3" ></img>
              <div className="card-body">
                <h5 className="card-title mt-1">Card title 3</h5>
                <p className="card-text ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

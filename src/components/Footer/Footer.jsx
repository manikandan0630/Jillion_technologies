import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid'>
        <div className="row p-5 w-100 mx-auto mt-5 custom-bg ">
            <div className="col-12 col-md-3 mb-3">
                <h3 className='mb-4'>CONTACT US</h3>
                <h4>Email</h4>
                <span>contact@company.com</span>
                <h4>Phone</h4>
                <span>7893794872</span>
                <h4>Address</h4>
                <span>C-230,Sector-30,Noida-201301</span>
            </div>
            <div className="col-12 col-md-3 mb-3 ">
                <h3 className='mb-4'>COMPANY</h3>
                <div className='d-flex flex-column'>
                <a href="#" >About Us</a>
                <a href="#">Service</a>
                <a href="#">Portfolio</a>
                <a href="#">Development Process</a>
                <a href="#">Career</a>
                </div>
               
            </div>
            <div className="col-12 col-md-3 mb-3 "  >
                <h3 className='mb-4'>SERVICE</h3>
                <span className=''>Website Development</span><br></br>
                <span>Mobile App Development</span><br></br>
                <span>E-Commerce Development</span><br></br>
                <span>Customer Software Development</span>
            </div>
            <div className="col-12 col-md-3 mb-3">
                <h3 className='mb-4'>SUPPORT</h3>
                <h6 className='fw-semibold'>Contact</h6>
                <h6 className='fw-semibold'>Term & Policy</h6>
            </div>
        </div>
    </div>
  )
}

export default Footer
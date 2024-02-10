import React from 'react'
import vendorImage1 from "../../assets/img/vendor-1.jpg";
import vendorImage2 from "../../assets/img/vendor-2.jpg";
import vendorImage3 from "../../assets/img/vendor-3.jpg";
import vendorImage4 from "../../assets/img/vendor-4.jpg";
import vendorImage5 from "../../assets/img/vendor-5.jpg";
import vendorImage6 from "../../assets/img/vendor-6.jpg";
import vendorImage7 from "../../assets/img/vendor-7.jpg";
import vendorImage8 from "../../assets/img/vendor-8.jpg";
const Vendor = () => {
  return (
    <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col">
        <div className="owl-carousel vendor-carousel">
          <div className="bg-light p-4">
            <img src={vendorImage1} alt="vendor1" />
          </div>
          <div className="bg-light p-4">
            <img src={vendorImage2} alt="vendor2" />
          </div>
          <div className="bg-light p-4">
            <img src={vendorImage3} alt="vendor3"  />
          </div>
          <div className="bg-light p-4">
            <img src={vendorImage4} alt="vendor4" />
          </div>
          <div className="bg-light p-4">
            <img src={vendorImage5} alt="vendor5"  />
          </div>
          <div className="bg-light p-4">
            <img src={vendorImage6} alt="vendor6"  />
          </div>
          <div className="bg-light p-4">
            <img src={vendorImage7} alt="vendor7" />
          </div>
          <div className="bg-light p-4">
            <img src={vendorImage8} alt="vendor8"  />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Vendor
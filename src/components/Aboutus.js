import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import image from "../image/s2.jpg";
import image1 from "../image/s3.jpg";
import image2 from "../image/service1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const Service = () => {
  return (
    <div id="about">
      <div className="container-fluid width-80 ">
        <div className="center">
          <div>
            <p className="h1">ABOUT OUR VISION</p>
            <center>
              <hr
                style={{
                  width: "18rem",
                  borderTop: "4px solid black",
                }}
              ></hr>
            </center>
          </div>
        </div>

        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <div className="mx-4">
              <div
                data-aos="zoom-in-right"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <p className="text-size3">
                  LEADING WITH A DIFFERENT<br></br> APPROACH
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mt-2">
              <div data-aos="zoom-in-right">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                </p>
                <br></br>
                <a
                  href="https://www.instagram.com/mern_web_developer/"
                  className="button "
                  target="_blank"
                >
                  Work with us
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* <div className="center">
          <h5 className="text-secoundary font-style ">
            MODERNISTIC APPROACH TO PROJECTS
          </h5>
          <h1 className="font-style "> Balaji builder & constractor</h1>
        </div> */}

        <br></br>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card-3 center card-style card-6 mt-4 zoom">
              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <img
                  src={image}
                  alt="error"
                  className="img-size-style  img-fluid"
                />
                <br></br> <br></br>
                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card-3 center card-style card-6 mt-4 zoom">
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <img
                  src={image1}
                  alt="error"
                  className="img-size-style img-fluid"
                />
                <br></br> <br></br>
                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card-3 center card-style card-6 mt-4 zoom">
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <img
                  src={image2}
                  alt="error"
                  className="img-size-style img-fluid"
                />
                <br></br> <br></br>
                <p className="text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Service;

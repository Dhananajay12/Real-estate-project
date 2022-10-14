import React, { useEffect } from "react";
import image from "../image/b6.jpg";
import image2 from "../image/b8.jpg";
import image3 from "../image/b7.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; //
import { Carousel } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // for (var i = 0; i < 5 ;xss=removed> {
  //   console.log(i) }, 0)

  return (
    <>
      {/* <div className="background-img" id="home">
        <div
          className="text-white padding text-size"
          data-aos="zoom-out-up"
          data-aos-duration="3000"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <div className="center mt-5">
            <div>
              <center>
                <hr
                  style={{
                    width: "20rem",
                    borderTop: "4px solid ",
                  }}
                ></hr>
                <a className="button2">Work with us </a>
              </center>
            </div>
          </div>
        </div>
      </div> */}

      <div id="home">
        <Carousel fade className="margin-top2">
          <Carousel.Item>
            <img
              className="d-block w-100 imagesize "
              src={image}
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="slide-down  ">
                <p className="top-margin font-size-slider2 font-style">
                  Welcome to our organization{" "}
                </p>
                <p className="text-white font-size-slider font-style">
                  The bitterness of poor quality remains long after the
                  sweetness of low price is forgotten.
                </p>

                <button className="button2 mx-2">KNOW MORE</button>
                <button className="button2 mx-2">SEE PROJECTS</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imagesize"
              src={image2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="slide-down ">
                <p className="top-margin font-size-slider2 font-style">
                  Welcome to our{" "}
                  <span className="text-white"> organization </span>{" "}
                </p>
                <p className="text-white font-size-slider font-style">
                  The bitterness of poor quality remains long after the
                  sweetness of low price is forgotten.
                </p>
                <button className="button2 mx-2">KNOW MORE</button>
                <button className="button2 mx-2">SEE PROJECTS</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imagesize"
              src={image3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="slide-down  top">
                <p className="top-margin font-size-slider2 font-style">
                  Welcome to our{" "}
                  <span className="text-white"> organization </span>{" "}
                </p>
                <p className="text-white font-size-slider font-style">
                  Building is about getting around the obstacles that are
                  presented to you.
                </p>
                <button className="button2 mx-2">KNOW MORE</button>
                <button className="button2 mx-2">SEE PROJECTS</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <img src={image} alt="error" className="img-fluid  size" /> */}
    </>
  );
};

export default Home;

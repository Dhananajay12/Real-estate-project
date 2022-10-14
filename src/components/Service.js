import React, { useEffect } from "react";
import image from "../image/o1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import image2 from "../image/s1.jpg";
import { BiNotepad, BiBuildingHouse } from "react-icons/bi";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css"; //

const Offering = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="background2">
        <div className="container-fluid width-80">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="center2">
                <p className="text-white text-size2">
                  You can dream, create, design, and build the most wonderful
                  place in the world. But it requires people to make the dream a
                  reality.
                </p>
                <br></br>
                <a href="/" className="button2">
                  BEST DEAL FOR OUR CUSTOMERS
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="center2 ">
                <p className="text-white text-size2">
                  Building is about getting around the obstacles that are
                  presented to you.
                </p>
                <br></br>
                <a href="/" className="button2">
                  BEST DEAL FOR OUR CUSTOMERS
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="center2">
                <p className="text-white text-size2">
                  The bitterness of poor quality remains long after the
                  sweetness of low price is forgotten.
                </p>
                <br></br>
                <a href="/" className="button2">
                  BEST DEAL FOR OUR CUSTOMERS
                </a>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="container-fluid width-80">
        <div className="center">
          <div>
            <p className="h1">SERVICES WE PROVIDE</p>
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
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <div
              className="mt-1"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="d-flex">
                <BiNotepad fontSize="30px" />
                <h3>Fast Positon</h3>
              </div>
              <p className="mx-4 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
            <div
              className="mt-5"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="d-flex">
                <BiBuildingHouse fontSize="30px" />
                <h3>Letest Design</h3>
              </div>

              <p className="mx-4 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="mt-5"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={image2} alt="error1" className=" img-fluid rounded" />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
      </div>

      <br></br>
    </>
  );
};

export default Offering;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
const Review = () => {
  return (
    <>
      <div id="review">
        <div className="background3">
          <div className="container-fluid width-80">
            <br></br>
            <br></br>
            <br></br>

            <div className="center ">
              <p className="h5 text-white">ABOUT REVIEW</p>
              <h2 className=" text-white">HAPPY CLIENT</h2>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="center3 "
                  style={{
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    paddingTop: "3%",
                    paddingBottom: "0%",
                  }}
                >
                  <h4 className="text-white ">
                    “Spend a lot of time talking to customers face-to-face.
                    You’d be amazed how many companies don’t listen to their
                    customers.”
                  </h4>
                  <br></br>

                  <h5 className="text-white">Jhon deo / manager</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className="center3 "
                  style={{
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    paddingTop: "3%",
                    paddingBottom: "0%",
                  }}
                >
                  <h4 className="text-white ">
                    “Spend a lot of time talking to customers face-to-face.
                    You’d be amazed how many companies don’t listen to their
                    customers.”
                  </h4>
                  <br></br>
                  <h5 className="text-white">Jhon deo / manager</h5>
                  <br></br>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div
                  className="center3 "
                  style={{
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    paddingTop: "3%",
                    paddingBottom: "0%",
                  }}
                >
                  <h4 className="text-white ">
                    “Spend a lot of time talking to customers face-to-face.
                    You’d be amazed how many companies don’t listen to their
                    customers.”
                  </h4>
                  <br></br>
                  <h5 className="text-white">Jhon deo / manager</h5>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Review;

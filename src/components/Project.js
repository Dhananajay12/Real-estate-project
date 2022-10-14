import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import AOS from "aos";
import "aos/dist/aos.css"; //
// import required modules
import { EffectCreative } from "swiper";

import image1 from "../image/p1.jpg";
import image2 from "../image/p2.jpg";
import image3 from "../image/p3.jpg";
import image4 from "../image/p4.jpg";
import image5 from "../image/p5.jpg";
import image6 from "../image/p6.jpg";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="project">
        <div className="center">
          <div>
            <p className="h1">OUR PROJECTS </p>
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
        <div className="background-projects">
          <div className="container-fluid width-80">
            <br></br>
            <br></br>
            <br></br>

            <div className="row">
              <div className="col-md-6">
                <Swiper
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  modules={[EffectCreative]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    {" "}
                    <div className="background4 img-fluid mx-1">
                      <div className="text-white padding ">
                        <h1>SLIDE RIGHT TO SEE ALL PROJECTS</h1>
                        <div className="center mt-5">
                          <div>
                            <center>
                              <hr
                                style={{
                                  width: "20rem",
                                  borderTop: "4px solid ",
                                }}
                              ></hr>
                              <br></br>
                              <a href="/" className="button2">
                                Work with us{" "}
                              </a>
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="background1 img-fluid mx-1 ">
                      <div
                        className="text-white padding "
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        <h1>SLIDE RIGHT TO SEE ALL PROJECTS</h1>
                        <div className="center3 mt-5">
                          <div>
                            <center>
                              <hr
                                style={{
                                  width: "20rem",
                                  borderTop: "4px solid ",
                                }}
                              ></hr>
                              <br></br>
                              <a href="/" className="button2">
                                Work with us{" "}
                              </a>
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    {" "}
                    <div className="background5 img-fluid mx-1">
                      <div className="text-white padding ">
                        <h1>SLIDE RIGHT TO SEE ALL PROJECTS</h1>
                        <div className="center mt-5">
                          <div>
                            <center>
                              <hr
                                style={{
                                  width: "20rem",
                                  borderTop: "4px solid ",
                                }}
                              ></hr>
                              <br></br>
                              <a href="/" className="button2">
                                Work with us{" "}
                              </a>
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="background6 img-fluid mx-1">
                      <div className="text-white padding ">
                        <h1>SLIDE RIGHT TO SEE ALL PROJECTS</h1>
                        <div className="center mt-5">
                          <div>
                            <center>
                              <hr
                                style={{
                                  width: "20rem",
                                  borderTop: "4px solid ",
                                }}
                              ></hr>
                              <br></br>
                              <a href="/" className="button2">
                                Work with us{" "}
                              </a>
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="background7 img-fluid mx-1">
                      <div className="text-white padding ">
                        <h1>SLIDE RIGHT TO SEE ALL PROJECTS</h1>
                        <div className="center mt-5">
                          <div>
                            <center>
                              <hr
                                style={{
                                  width: "20rem",
                                  borderTop: "4px solid ",
                                }}
                              ></hr>
                              <br></br>
                              <a href="/" className="button2">
                                Work with us{" "}
                              </a>
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <br></br>
              </div>
              <div className="col-md-6 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae aliquet nec ullamcorper sit amet risus nullam eget. Nunc
                consequat interdum varius sit amet mattis vulputate. Nunc mi
                ipsum faucibus vitae aliquet. Risus at ultrices mi tempus
                imperdiet. Molestie nunc non blandit massa enim nec. Viverra
                mauris in aliquam sem fringilla ut. Scelerisque viverra mauris
                in aliquam. In iaculis nunc sed augue. Tellus molestie nunc non
                blandit massa enim. Purus sit amet volutpat consequat. Integer
                enim neque volutpat ac tincidunt vitae. Ac turpis egestas
                integer eget aliquet nibh praesent. In vitae turpis massa sed
                elementum tempus egestas. Dictum varius duis at consectetur
                lorem donec. Quisque sagittis purus sit amet volutpat consequat
                mauris. Viverra maecenas accumsan lacus vel facilisis volutpat
                est velit egestas. Pharetra pharetra massa massa ultricies mi
                quis hendrerit. Leo duis ut diam quam nulla porttitor massa id
                neque. Augue neque gravida in fermentum et sollicitudin. Odio
                aenean sed adipiscing diam donec adipiscing tristique risus.
                Nisl condimentum id venenatis a condimentum vitae sapien
                pellentesque. Mi sit amet mauris commodo. Cras sed felis eget
                velit aliquet sagittis. Quam vulputate dignissim suspendisse in
                est ante in. Eros donec ac odio tempor orci dapibus ultrices in.
                Morbi blandit cursus risus at. Magna ac placerat vestibulum
                lectus. Quis enim lobortis scelerisque
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container-fluid width-80 ">
          <div className="center">
            <div>
              <p className="h1">FUTURE PROJECTS </p>
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
        </div>
        <br></br>
        <br></br>
        <div className="container-fluid width-80">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="container1">
                  <div className="card">
                    <div className=" image">
                      <img className="img-size" src={image5} alt="error" />
                    </div>
                    <div className="content">
                      <h3>Dubai Project</h3>
                      <p>DIn publishing and graphic design, Lorem ipsum is a</p>
                      <button className="button2 card-6">KNOW MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="container1">
                  <div className="card">
                    <div className=" image">
                      <img className="img-size" src={image2} alt="error" />
                    </div>
                    <div className="content">
                      <h3>Abhu-Dhabi Project</h3>
                      <p>DIn publishing and graphic design, Lorem ipsum is a</p>
                      <button className="button2 card-6">KNOW MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="container1">
                  <div className="card">
                    <div className=" image">
                      <img className="img-size" src={image3} alt="error" />
                    </div>
                    <div className="content">
                      <h3>Qatar Project</h3>
                      <p>DIn publishing and graphic design, Lorem ipsum is a</p>
                      <button className="button2 card-6">KNOW MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="container1">
                  <div className="card">
                    <div className=" image">
                      <img className="img-size" src={image4} alt="error" />
                    </div>
                    <div className="content">
                      <h3>Mumbai Project</h3>
                      <p>DIn publishing and graphic design, Lorem ipsum is a</p>
                      <button className="button2 card-6 ">KNOW MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="container1">
                  <div className="card">
                    <div className=" image">
                      <img className="img-size" src={image1} alt="error" />
                    </div>
                    <div className="content">
                      <h3>Saudi Project</h3>
                      <p>DIn publishing and graphic design, Lorem ipsum is a</p>
                      <button className="button2  card-6">KNOW MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className=""
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="container1">
                  <div className="card">
                    <div className=" image">
                      <img className="img-size" src={image6} alt="error" />
                    </div>
                    <div className="content">
                      <h3>Dubai Project</h3>
                      <p>DIn publishing and graphic design, Lorem ipsum is a</p>
                      <button className="button2 card-6">KNOW MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Project;

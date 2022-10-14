import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <div className="center ">
        <p className="h2 ">CONTACT INFO</p>
        <center>
          <hr
            style={{
              width: "18rem",
              borderTop: "4px solid black",
            }}
          ></hr>
        </center>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.<br></br>{" "}
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid width-80 ">
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-6  h5 mt-2">
              <BsFillTelephoneForwardFill className="icons2"></BsFillTelephoneForwardFill>{" "}
              Have any quetions?
              <br></br>
              <p className="mx-5"> 9137319282 </p>
              <br></br>
              <AiOutlineMail className="icons2"></AiOutlineMail> Have any query?{" "}
              <br></br>
              <p className="mx-5"> Dhananjay@gmail.com </p>
              <br></br>
              <HiLocationMarker className="icons2"></HiLocationMarker> Reach
              out!<br></br>
              <p className="" style={{ paddingLeft: "14%" }}>
                {" "}
                Satyam apt.,Nadivali,Haji malang road,Kalyan east, Thane{" "}
              </p>
              <br></br>
              <br></br>
              <a href="/">
                <i
                  className="fa fa-instagram fa-3x zoom "
                  style={{
                    marginTop: "1.2rem",
                    marginBottom: "1.2rem",
                    paddingRight: "1.5rem",
                  }}
                ></i>
              </a>
              <a href="/">
                <i
                  className="fa fa-twitter-square fa-3x zoom   "
                  style={{ paddingRight: "1.5rem", paddingLeft: "1rem" }}
                ></i>
              </a>
              <a href="/">
                <i
                  className="fa fa-facebook-square fa-3x zoom  "
                  style={{ paddingRight: "1.5rem", paddingLeft: "1rem" }}
                ></i>
              </a>
              <a href="/">
                <i
                  className="fa fa-skype fa-3x zoom "
                  style={{ paddingRight: "1.5rem", paddingLeft: "1.5rem" }}
                ></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <p
              classname="maps"
              style={{
                width: "102.6%",
                height: "20rem",
                border: "0",
                allowfullscreen: "",
                loading: "lazy",
              }}
            >
              <iframe
                style={{
                  width: "98%",
                  height: "27rem",
                  border: "0",
                  allowfullscreen: "",
                  loading: "lazy",
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1344.973033651639!2d73.13160425779049!3d19.211233581817854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795099d4905cf%3A0x4b6abc3b8d666d9e!2sMaa%20Laxmi%20Enterprises!5e1!3m2!1sen!2sin!4v1665684051526!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid footer">
        <h5>Copyright received by Dhananjayavare786@gmail.com </h5>

        <h5>Design and Developed by Dhananjay</h5>
      </div>
    </>
  );
};

export default Contact;

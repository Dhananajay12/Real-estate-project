import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="center ">
          <p className="h2 ">CONTACT INFO</p>
          <center>
            <hr
              style={{
                width: "18rem",
                borderTop: "4px solid rgb(68, 62, 6)",
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
              {/* <BsFillTelephoneForwardFill className="icons2"></BsFillTelephoneForwardFill>{" "}
                Have any quetions?
                <br></br>
                <p className="mx-5"> 9137319282 </p>
                <br></br>
                <AiOutlineMail className="icons2"></AiOutlineMail> Have any
                query? <br></br>
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
                 </a> */}
              <div className="mt-2" style={{ width: "100%" }}>
                <h5 clas>Full Name:</h5>

                <input type="text" placeholder="Name" className="input-flied" />
              </div>

              <div className="mt-3">
                <h5>Phone No:</h5>
                <input
                  type="tel"
                  placeholder="Number"
                  className="input-flied"
                />
              </div>
              <div className="mt-3">
                <h5>Message:</h5>
                <textarea
                  id="w3review"
                  placeholder="Message"
                  className="textarea"
                  name="w3review"
                  rows="4"
                  cols="50"
                />
              </div>
            </div>
            <div className="col-md-6">
              <br></br>
              <p
                className="maps mt-2"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259.27437887139365!2d73.1315971128225!3d19.21075839190138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795099d4905cf%3A0x4b6abc3b8d666d9e!2sMaa%20Laxmi%20Enterprises!5e0!3m2!1sen!2sin!4v1665767385670!5m2!1sen!2sin"
                ></iframe>
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container-fluid footer">
          <h5>Copyright received by Dhananjayavare786@gmail.com </h5>

          <h5>Design and Developed by Dhananjay</h5>
        </div>
      </div>
    </>
  );
};

export default Contact;

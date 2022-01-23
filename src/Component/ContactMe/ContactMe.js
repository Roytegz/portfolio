import React, { useState,useRef } from "react";
import Typical from "react-typical";
//import axios from "axios";
//import { toast } from "react-toastify";
import emailjs from "emailjs-com";

import imgBack from "../../../src/images/mailz1.png";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animation from "../../Utilities/Animation";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g5mxf4j",
        "template_l9zmwkp",
        formRef.current,
        "user_YZrddwZCfNakwcnfIQLxR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 

  
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [message, setMessage] = useState("");
 // const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

 // const handleName = (e) => {
  //  setName(e.target.value);
  //};
 // const handleEmail = (e) => {
  //  setEmail(e.target.value);
  //};
 // const handleMessage = (e) => {
 //   setMessage(e.target.value);
 // };
  //console.log(name);
  //const submitForm = async (e) => {
   // e.preventDefault();
    //try {
     // let data = {
      //  name,
      //  email,
      //  message,
     // };
     // setBool(true);
     // const res = await axios.post(`/contact`, data);
      //if (name.length === 0 || email.length === 0 || message.length === 0) {
       // setBanner(res.data.msg);
       // toast.error(res.data.msg);
        //setBool(false);
      //} else if (res.status === 200) {
      //  setBanner(res.data.msg);
       // toast.success(res.data.msg);
       // setBool(false);}

       // setName("");
        //setEmail("");
        //setMessage("");
     // }
   // } catch (error) {
     // console.log(error);
   // }
  //};*\

  return (
    <div className="main-container fadeIn" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/itz_royy/">
            <i className="fa fa-instagram" />
          </a>
          
         
          <a href="https://twitter.com/itz_roiyy">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          
          <form ref={formRef} onSubmit={handleSubmit}>
            
            <label htmlFor="name">Name</label>
            <input type="text"  name="user_name" />

            <label htmlFor="email">Email</label>
            <input type="email"  name="user_email" />

            <label htmlFor="message">Message</label>
            <textarea type="text"  name='message' />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
              {done && "Thank you..."}
            </div>
          </form>
        </div>
      </div>
      <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
    </div>
  );
}
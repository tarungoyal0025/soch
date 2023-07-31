import React from "react";
import "./Copyright.css";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="row copyright">
        <div className=" col-md-6">
          <p className="">
            &copy;{currentYear} SOCH. All Rights Reserved. Designed By{" "}
            &nbsp;
            <a
              target="_blank"
              className="text-dark"
              href="https://www.linkedin.com/in/tarungoyal0025/"
            >
              Tarun Goyal
            </a>
          </p>
        </div>
        <div className=" col-md-4">
          <a
            href="https://github.com/tarungoyal0025"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            GitHub
          </a>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/tarungoyal0025/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
           Linkedin
          </a>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <a
            href="mailto:goyaltarun0025@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="foot-icon" />
           Gmail
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            href="https://www.instagram.com/tarungoyal_0025/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="foot-icon" />
            Instagram
          </a>
        
        </div>
      </div>
    </>
  );
};

export default Copyright;

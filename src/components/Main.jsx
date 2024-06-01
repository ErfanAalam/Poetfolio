import React from "react";
import "./Main.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import MailIcon from "@mui/icons-material/Mail";
import {motion} from 'framer-motion'



const Main = () => {
  return (
    <>
      <section>
        <motion.div className="details"
        animate={{x:0 }}
        initial={{x:-1000 }}
        transition={{duration:0.6}}
        >

          <div className="name">
            Hello ......
          </div>
          <div className="name">
           I am Erfan Aalam

          </div>

          <div className="detail">
            Web Developer
          </div>
          <div className="detail">
            MERN Stack Developer
          </div>
          <div className="detail">
            JavaScript developer
          </div>

          <div className="icons">
            <div className="icon">
              <a href="https://www.linkedin.com/in/erfan-aalam-1957b9271" target="_blank">
                <LinkedInIcon />
              </a>
            </div>

            <div className="icon">
              <a href="https://github.com/ErfanAalam" target="_blank">
                <GitHubIcon />
              </a>
            </div>

            <div className="icon">
              <a href="https://x.com/ErfanAalam03?t=Rg9Pk0LDYEaar-MAFf9Mfw&s=09" target="_blank">
                <XIcon />
              </a>
            </div>

            <div className="icon">
              <a href="mailto:erfankhansiwani@gmail.com" target="_blank">
                <MailIcon />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="image"
        animate={{x:0 }}
        initial={{x:1000 }}
        transition={{duration:0.6}}
        ></motion.div>
      </section>
    </>
  );
};

export default Main;

import { Button, Grid } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/About.css";
import cpplogo from "../image/C++_Logo.jpg";
import htmllogo from "../image/Html_logo.jpg";
import reactlogo from "../image/React_logo.png";
import githublogo from "../image/github-logo.png";
import jslogo from "../image/javacript_logo.png";
import aboutImage from "../image/jexo-73REk-BB7-Y-unsplash.jpg";
import materialuilogo from "../image/materialui_logo.jpg";
import reduxlogo from "../image/react-redux-logo.png";
import Experience from "./Experience";

const About = () => {
  const handleClick = () => {
    window.open("Ankur_Resume_June.pdf", "_blank", "noreferrer");
  };
  return (
    <Fragment>
      <Grid container className="container">
        <Grid item xs={12} sm={12} md={12} className="typo">
          <div className="main-heading">ABOUT ME</div>
        </Grid>
        <Grid container className="datacontainer" justifyContent="space-evenly">
          <Grid
            item
            className="about-Image"
            xs={12}
            sm={12}
            md={5}
            sx={{
              backgroundImage: `url(${aboutImage})`,
              height: "63%",
              borderRadius: "30px 30px 30px 30px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
          <Grid item xs={12} sm={12} md={5} className="content">
            <div className="about">
              I am Ankur Sharma, a passionate web designer based in Kanpur. With
              a Master's degree in technology from Pranveer Singh Institute of
              Technology, I have cultivated a deep understanding of modern web
              development practices.
            </div>
            <div className="about">
              Currently, I work as a Web Application Developer at Pinnacle
              Finserv Advisors, where I leverage my expertise in React Js,
              Material UI, JavaScript, HTML, and GitHub to build innovative and
              user-friendly web applications.
            </div>
            <div className="about">
              I am driven by a relentless curiosity and a passion for continuous
              learning. Whether it’s exploring new technologies or tackling
              challenging projects, I thrive in environments that push me to
              grow.
            </div>
            <div className="about">
              Looking ahead, I aim to take on leadership roles where I can
              mentor upcoming developers and lead innovative projects.
            </div>
            <div className="about buttons">
              <Button variant="outlined" size="large" onClick={handleClick}>
                DOWNLOAD CV
              </Button>
            </div>
          </Grid>
          <Grid container className="lastcontainer">
            <Grid item className="skills" xs={12} sm={12} md={12}>
              SKILLS
            </Grid>
            <Grid item xs={12} sm={12} md={12} className="button">
              <img
                src={cpplogo}
                alt="none"
                width="95vh"
                height="80vh"
                className="image-margin"
              />
              <img
                src={htmllogo}
                alt="none"
                width="95vh"
                height="80vh"
                className="image-margin"
              />
              <img
                src={reactlogo}
                alt="none"
                width="95vh"
                height="80vh"
                className="image-margin"
              />
              <img
                src={jslogo}
                alt="none"
                width="95vh"
                height="80vh"
                className="image-margin"
              />
              <img
                src={githublogo}
                alt="none"
                width="95vh"
                height="80vh"
                className="image-margin"
              />
              <img
                src={materialuilogo}
                alt="none"
                width="95vh"
                height="80vh"
                className="image-margin"
              />
              <img
                src={reduxlogo}
                alt="none"
                width="95vh"
                height="80vh"
                className="image-margin"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default About;

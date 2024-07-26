import { Button, Grid } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/About.css";
import aboutImage from "../image/jexo-73REk-BB7-Y-unsplash.jpg";

const About = () => {
  const handleClick = () => {
    window.open("Ankur_Resume_June.pdf", "_blank", "noreferrer");
  };
  return (
    <Fragment>
      <Grid id="About" container className="container">
        <Grid item xs={12} sm={12} md={12} className="main-heading">
          ABOUT ME
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justifyContent="space-evenly">
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              className="my-image"
              sx={{
                backgroundImage: `url(${aboutImage})`,
                height: "auto",
                overflow: "hidden",
                borderRadius: "30px 30px 30px 30px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Grid container className="about" spacing={2}>
                <Grid item>
                  I am Ankur Sharma, a passionate web designer based in Kanpur.
                  With a Master's degree in technology from Pranveer Singh
                  Institute of Technology, I have cultivated a deep
                  understanding of modern web development practices.
                </Grid>
                <Grid item>
                  Currently, I work as a Web Application Developer at Pinnacle
                  Finserv Advisors, where I leverage my expertise in React Js,
                  Material UI, JavaScript, HTML, and GitHub to build innovative
                  and user-friendly web applications.
                </Grid>
                <Grid item>
                  At Pinnacle, I am responsible for creating reusable
                  components, optimizing code for better performance, solving
                  bugs, and debugging effectively.
                </Grid>

                <Grid item>
                  I am driven by a relentless curiosity and a passion for
                  continuous learning. Whether it’s exploring new technologies
                  or tackling challenging projects, I thrive in environments
                  that push me to grow.
                </Grid>
                <Grid item>
                  Looking ahead, I aim to take on leadership roles where I can
                  mentor upcoming developers and lead innovative projects.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Button size="large" className="download" onClick={handleClick}>
            DOWNLOAD CV
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default About;

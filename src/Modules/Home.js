import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Header from "../Component/Header";
import "../Styles/Home.css";
import image from "../image/new_image.png";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const Home = () => {
  return (
    <Fragment>
      <Grid container id="Home">
        <Grid item xs={12} sm={12} md={12}>
          <Header />
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container className="main">
              <Grid item xs={12} sm={12} md={6} className="left">
                <div style={{ color: "white" }}>Hello,</div>
                <div className="second" style={{ color: "white" }}>
                  I'm <span style={{ color: "yellow" }}>Ankur</span>
                </div>
                <div className="third" style={{ color: "white" }}>
                  Website Designer
                </div>
                <div className="forth">
                  I am a skilled and passionate web designer with 2 years of
                  experience in React.js, Material UI, JavaScript, and GitHub
                  desktop, and I’m expanding my skill set with Next.js.
                </div>
              </Grid>
              <Grid
                item
                xs={11}
                sm={11}
                md={5}
                className="right"
                sx={{
                  backgroundImage: `url(${image})`,
                  // height: "80%",
                  height: { xs: "60%", sm: "60%", md: "80%" },
                  borderRadius: "30px 30px 30px 30px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginTop: { xs: 2, sm: 2, md: 0 },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <About />
      <Experience />
      <Education />
      <Skills />
    </Fragment>
  );
};

export default Home;

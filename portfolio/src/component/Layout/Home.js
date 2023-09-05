import React, { Fragment } from "react";
import { Box,  Typography } from "@mui/material";
import Animation from "../../Animation/Animation";
import "../../styles/Home.css";
import Avatar from "@mui/material/Avatar";
import AvatarImage from "../../Images/76804f67ba38f85e4802d250e5b15504.jpg";
import About from "../../Pages/About";
import Skills from "../../Pages/Skills";
import Contact from "../../Pages/Contact";

const Home = () => {
  return (
    <Fragment>
      <body>
        <Box className="box">
          <Typography sx={{ mt: 6, color: "white" }}>
            <Animation />
          </Typography>
          <Avatar
            alt="Image"
            src={AvatarImage}
            sx={{ ml: 100, width: 370, height: 350, mt: -38 }}
          />
        </Box>
      </body>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </Fragment>
  );
};

export default Home;

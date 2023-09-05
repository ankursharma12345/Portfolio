import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import ReactTyped from "react-typed";
import "../styles/Animation.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Animation = () => {
  const handleClick = ()=>{
      
  }
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/ankur-sharma-896bab1a0/",
      "_blank",
      "noreferrer"
    );
  };
  const handleGit = () => {
    window.open("https://github.com/ankursharma12345", "_blank", "noreferrer");
  };
  return (
    <Fragment>
      <Typography variant="h4" sx={{ color: "white", mt:24}}>
        Hi, I'm{" "}
        {/*The curly braces after the text add Space between the ReactTyped and Typography*/}
        <ReactTyped
          className="React-type"
          strings={["ANKUR SHARMA"]}
          typeSpeed={50}
          loop
          style={{ color: "goldenrod" }}
        />{" "}
        {/* By default loop is true which is not anytime */}
      </Typography>
      <Typography sx={{ color: "white", display: "block", my: 3 }}>
        Completed my Masters degree from Pranveer Singh Institute of Technology,
        Kanpur Nagar, U.P. I have a <br />
        knowledge of C++, Material UI, HTML, CSS, React js.
        <span className="span">
          This portfolio is built using React js <br />
          and Material UI.
        </span>{" "}
      </Typography>
      <Button variant="contained" sx={{my:-2}} onClick={handleClick}>
        About Me
      </Button>
      <Stack spacing={3} direction="row" sx={{ mt: 3.5 }}>
        <Typography sx={{ fontSize: 25 }}>For More Details :</Typography>
        <LinkedInIcon onClick={handleLinkedIn} sx={{ fontSize: 30 }} />
        <GitHubIcon onClick={handleGit} sx={{ fontSize: 30 }} />
      </Stack>
    </Fragment>
  );
};

export default Animation;

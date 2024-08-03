import { Card, CardMedia, Grid, Tooltip } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/Skills.css";
import first_Image from "../image/Html_logo.jpg";
import second_Image from "../image/1460px-React_logo.png";
import third_Image from "../image/javacript_logo.png";
import fourth_Image from "../image/materialui_logo.jpg";
import git_hub from "../image/github_logo.jpg";
import tortoise_logo from "../image/version-control-tortoise-svn.jpg";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Skills = () => {
  const allImages = [
    first_Image,
    second_Image,
    third_Image,
    fourth_Image,
    git_hub,
    tortoise_logo,
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Fragment>
      <Grid container id="Skills" className="main-container-skills" spacing={3}>
        <Grid item xs={12} sm={12} md={12} className="heading">
          MY SKILLS
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container className="cards" spacing={4} columnGap={8.5}>
            {allImages?.map((image, index) => (
              <Grid item xs={4} sm={4} md={2} key={index}>
                <Card className="card">
                  <CardMedia
                    component="img"
                    height="130"
                    width="5"
                    image={image}
                    alt={`skill ${index}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className="mui-icon-skills">
          <Tooltip title="Previous Page" placement="right-start">
            <ArrowUpwardIcon
              onClick={() => scrollToSection("Education")}
              sx={{ backgroundColor: "white", cursor: "pointer" }}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Skills;

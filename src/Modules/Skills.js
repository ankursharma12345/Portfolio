import { Card, CardMedia, Grid } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/Skills.css";
import first_Image from "../image/Html_logo.jpg";
import second_Image from "../image/1460px-React_logo.png";
import third_Image from "../image/javacript_logo.png";
import fourth_Image from "../image/materialui_logo.jpg";
import git_hub from "../image/github_logo.jpg";
import tortoise_logo from "../image/version-control-tortoise-svn.jpg";

const Skills = () => {
  return (
    <Fragment>
      <Grid container className="main-container-skills">
        <Grid item xs={12} sm={12} md={12} className="heading">
          MY SKILLS
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container className="cards" spacing={4} columnGap={8.5}>
            <Grid item xs={4} sm={4} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="130"
                  width="5"
                  image={first_Image}
                  alt="paella dish"
                />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="130"
                  width="5"
                  image={second_Image}
                  alt="paella dish"
                />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="130"
                  width="5"
                  image={third_Image}
                  alt="paella dish"
                />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="130"
                  maxWidth="5"
                  image={fourth_Image}
                  alt="paella dish"
                />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="130"
                  width="5"
                  image={git_hub}
                  alt="paella dish"
                />
              </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="130"
                  width="5"
                  image={tortoise_logo}
                  alt="paella dish"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Skills;

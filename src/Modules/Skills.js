import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/Skills.css";
import dr from "../image/React_logo.png";

const Skills = () => {
  return (
    <Fragment>
      <Grid container className="main-container">
        <Grid item xs={12} sm={12} md={12} className="heading">
          My Skills
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container className="cards" spacing={2}>
            <Grid item xs={3} sm={3} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="100"
                  image={dr}
                  alt="paella dish"
                />
                {/* <CardContent>React Js</CardContent> */}
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Card sx={{ backgroundColor: "lightgray" }}>
                <CardContent>React Js</CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Card sx={{ backgroundColor: "lightgray" }}>
                <CardContent>React Js</CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Card sx={{ backgroundColor: "lightgray" }}>
                <CardContent>React Js</CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Card sx={{ backgroundColor: "lightgray" }}>
                <CardContent>React Js</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Skills;

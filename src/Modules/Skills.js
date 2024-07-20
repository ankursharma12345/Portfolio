import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/Skills.css";
import first_Image from "../image/Html_logo.jpg";
import second_Image from "../image/1460px-React_logo.png";

const Skills = () => {
  return (
    <Fragment>
      <Grid container className="main-container-skills">
        <Grid item xs={12} sm={12} md={12} className="heading">
          My Skills
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container className="cards" spacing={4}>
            <Grid item xs={3} sm={3} md={1.5}>
              <Card>
                <CardMedia
                  component="img"
                  height="130"
                  width="10"
                  image={first_Image}
                  alt="paella dish"
                />
                {/* <CardContent>React Js</CardContent> */}
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={1.5}>
              <Card>
                <CardMedia
                  component="img"
                  height="130"
                  width="10"
                  image={second_Image}
                  alt="paella dish"
                />
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

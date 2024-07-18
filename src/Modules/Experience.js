import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/Education.css";

const Experience = () => {
  return (
    <Fragment>
      {/* <Grid container className="expo">
        <Grid item xs={12} sm={12} md={12} className="education">
          <Typography variant="bold" sx={{ color: "black" }}>
            EDUCATION
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="card">
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography className="degree">INTERMEDIATE</Typography>
              <Typography className="schooling">
                SHIVAJI INTER COLLEGE (2016-2017)
              </Typography>

              <Typography>
                My major subjects are Physics, Chemistry and Mathematics
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography className="degree">GRADUATION</Typography>
              <Typography className="schooling">
                BRAHMANAND DEGREE COLLEGE (2017-2020)
              </Typography>

              <Typography>
                My major subjects are Physics, Chemistry and Mathematics
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography className="degree">POST-GRADUATION</Typography>
              <Typography className="schooling">
                PRANVEER SINGH INSTITUTE OF TECNOLOGY (2021-2023)
              </Typography>

              <Typography>
                My major subjects are Physics, Chemistry and Mathematics
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}

      <Grid
        container
        className="expo"
        // justifyContent="space-around"
        // alignContent="center"
        // spacing={2}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Grid
            container
            className="exp-container"
            justifyContent="space-around"
            spacing={0}
          >
            <Grid
              item
              className="left-image"
              // xs={12}
              // sm={12}
              md={5.5}
            ></Grid>
            {/* <Grid item xs={12} sm={12} variant="bold" className="education">
            EDUCATION
          </Grid> */}
            {/* <Grid container spacing={3} className="card"> */}
            <Grid item xs={12} sm={12} md={6} className="main-exp">
              <Grid
                container
                className="experience"
                rowGap={5.5}
                justifyContent="center"
              >
                <Grid item xs={12} sm={12} md={12} className="card-items">
                  <Card
                    sx={
                      {
                        // minWidth: 280,
                        // height: 120,
                        // backgroundColor: "lightblue",
                      }
                    }
                  >
                    <CardContent>
                      <Typography className="degree">HIGH SCHOOL</Typography>
                      <Typography className="schooling">
                        ST. FRANCIS XAVIER'S INTER COLLEGE (2014-2015)
                      </Typography>

                      <Typography>
                        My major subjects are Physics, Chemistry and Mathematics
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className="card-items">
                  <Card
                    sx={
                      {
                        // minWidth: 280,
                        // height: 120,
                        // backgroundColor: "lightblue",
                      }
                    }
                  >
                    <CardContent>
                      <Typography className="degree">INTERMEDIATE</Typography>
                      <Typography className="schooling">
                        SHIVAJI INTER COLLEGE (2016-2017)
                      </Typography>

                      <Typography>
                        My major subjects are Physics, Chemistry and Mathematics
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className="card-items">
                  <Card
                    sx={
                      {
                        // minWidth: 280,
                        // height: 120,
                        // backgroundColor: "lightblue",
                      }
                    }
                  >
                    <CardContent>
                      <Typography className="degree">GRADUATION</Typography>
                      <Typography className="schooling">
                        BRAHMANAND DEGREE COLLEGE (2017-2020)
                      </Typography>

                      <Typography>
                        My major subjects are Physics, Chemistry and Mathematics
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className="card-items">
                  <Card
                    sx={
                      {
                        // minWidth: 280,
                        // height: 135,
                        // backgroundColor: "lightblue",
                      }
                    }
                  >
                    <CardContent>
                      <Typography className="degree">
                        POST-GRADUATION
                      </Typography>
                      <Typography className="schooling">
                        PRANVEER SINGH INSTITUTE OF TECNOLOGY (2021-2023)
                      </Typography>

                      <Typography>
                        My major subjects are Physics, Chemistry and Mathematics
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item md={7}></Grid> */}

          {/* <Grid item md={2.8}></Grid> */}
          {/* <Grid item xs={12} sm={12} md={6}>
              <Card
                sx={{
                  // minWidth: 280,
                  // height: 120,
                  backgroundColor: "lightblue",
                }}
              >
                <CardContent>
                  <Typography className="degree">INTERMEDIATE</Typography>
                  <Typography className="schooling">
                    SHIVAJI INTER COLLEGE (2016-2017)
                  </Typography>

                  <Typography>
                    My major subjects are Physics, Chemistry and Mathematics
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  // minWidth: 280,
                  // height: 120,
                  backgroundColor: "lightblue",
                }}
              >
                <CardContent>
                  <Typography className="degree">GRADUATION</Typography>
                  <Typography className="schooling">
                    BRAHMANAND DEGREE COLLEGE (2017-2020)
                  </Typography>

                  <Typography>
                    My major subjects are Physics, Chemistry and Mathematics
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  // minWidth: 280,
                  // height: 135,
                  backgroundColor: "lightblue",
                }}
              >
                <CardContent>
                  <Typography className="degree">POST-GRADUATION</Typography>
                  <Typography className="schooling">
                    PRANVEER SINGH INSTITUTE OF TECNOLOGY (2021-2023)
                  </Typography>

                  <Typography>
                    My major subjects are Physics, Chemistry and Mathematics
                  </Typography>
                </CardContent>
              </Card>
            </Grid> */}
          {/* <Grid item md={4.2}></Grid>

            <Grid item md={3.9}></Grid> */}
          {/* <Grid item xs={12} sm={12} md={6}>
              <Card
                sx={{
                  minWidth: 280,
                  height: 120,
                  backgroundColor: "lightblue",
                }}
              >
                <CardContent>
                  <Typography className="degree">GRADUATION</Typography>
                  <Typography className="schooling">
                    BRAHMANAND DEGREE COLLEGE (2017-2020)
                  </Typography>

                  <Typography>
                    My major subjects are Physics, Chemistry and Mathematics
                  </Typography>
                </CardContent>
              </Card>
            </Grid> */}
          {/* <Grid item md={3.1}></Grid>

            <Grid item md={5}></Grid> */}
          {/* <Grid item xs={12} sm={12} md={6}>
              <Card
                sx={{
                  minWidth: 280,
                  height: 135,
                  backgroundColor: "lightblue",
                }}
              >
                <CardContent>
                  <Typography className="degree">POST-GRADUATION</Typography>
                  <Typography className="schooling">
                    PRANVEER SINGH INSTITUTE OF TECNOLOGY (2021-2023)
                  </Typography>

                  <Typography>
                    My major subjects are Physics, Chemistry and Mathematics
                  </Typography>
                </CardContent>
              </Card>
            </Grid> */}
        </Grid>
      </Grid>
      {/* <Grid item xs={12} sm={12} md={12}> */}
      {/* </Grid> */}
    </Fragment>
  );
};

export default Experience;

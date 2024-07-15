import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
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
        // className="expo"
        justifyContent="center"
        alignContent="center"
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Grid item md={12} variant="bold" className="education">
            EDUCATION
          </Grid>
          <Grid
            container
            spacing={1}
            className="card"
            sx={{ height: "100vh !important" }}
          >
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
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12}> */}
        {/* </Grid> */}
      </Grid>
    </Fragment>
  );
};

export default Experience;

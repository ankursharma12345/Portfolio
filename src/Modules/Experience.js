import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/Education.css";

const Experience = () => {
  return (
    <Fragment>
      <Grid container className="expo" id="Education">
        <Grid item xs={12} sm={12} md={12}>
          <Grid
            container
            className="exp-container"
            justifyContent="space-around"
            spacing={0}
          >
            <Grid item className="left-image" md={5.5}></Grid>
            <Grid item xs={12} sm={12} md={6} className="main-exp">
              <Grid
                container
                className="experience"
                rowGap={5.5}
                justifyContent="center"
              >
                <Grid item xs={12} sm={12} md={12} className="card-items">
                  <Card>
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
                  <Card>
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
                  <Card>
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
                    sx={{
                      height: 135,
                    }}
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
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Experience;

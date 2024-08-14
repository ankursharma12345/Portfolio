import { Card, CardContent, Grid, Tooltip, Typography } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/Education.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Education = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
                  <Card>
                    <CardContent>
                      <Typography className="degree">
                        POST-GRADUATION
                      </Typography>
                      <Typography className="schooling">
                        PRANVEER SINGH INSTITUTE OF TECNOLOGY (2021-2023)
                      </Typography>

                      <Typography>
                        My major subject is Computer Applications
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} className="mui-icon">
        <Tooltip title="Previous Page" placement="right-start">
          <ArrowUpwardIcon
            onClick={() => scrollToSection("Experience")}
            sx={{ backgroundColor: "white", cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip title="Next Page" placement="right-start">
          <ArrowDownwardIcon
            onClick={() => scrollToSection("Skills")}
            sx={{ backgroundColor: "white", cursor: "pointer" }}
          />
        </Tooltip>
      </Grid>
    </Fragment>
  );
};

export default Education;

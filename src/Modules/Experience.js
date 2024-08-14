import { Grid, Tooltip } from "@mui/material";
import React, { Fragment } from "react";
import "../Styles/Experience.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Experience = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Fragment>
      <Grid id="Experience" container className="experience-container">
        <Grid item xs={12} sm={12} md={12} className="main-heading-exp">
          MY EXPERIENCE
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} className="exp-content">
            <Grid container>
              <Grid
                item
                xs={4}
                sm={4}
                md={1.7}
                sx={{
                  fontWeight: "bold",
                  fontSize: "large",
                  marginTop: "1rem",
                  marginLeft: { xs: "1rem", sm: "2rem" },
                }}
              >
                Overview :
              </Grid>
              <Grid item xs={7} sm={7} md={9} className="first-heading">
                Pinnacle Finserv Advisors Private Limited is a Kanpur based
                Fintech Startup that aims to solve complex problems related to
                GST Compliances, E-Invoicing, Accounting, Business Process
                Automation etc through its Innovative Solutions. It is a
                Registered GST Suvidha Provider (GSP) , a license awarded by
                GSTN to Fintech Startups working on automations in GST Eco
                system
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className="exp-content">
            <Grid container>
              <Grid
                item
                xs={4}
                sm={4}
                md={1.84}
                sx={{
                  fontWeight: "bold",
                  fontSize: "large",
                  marginTop: "1rem",
                  marginLeft: { xs: "1rem", sm: "2rem" },
                }}
              >
                My Role :
              </Grid>

              <Grid item xs={7} sm={7} md={9} className="second-heading">
                <ul>
                  <li>
                    <p>
                      Developed and maintained React components, implementing
                      best practices to achieve modular, efficient, and scalable
                      code.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborated closely with back-end developers and
                      designers to ensure the website's functionality and
                      aesthetics met project specifications.
                    </p>
                  </li>
                  <li>
                    <p>
                      Integrated APIs to fetch and display data, ensuring
                      real-time updates and seamless communication between the
                      front-end and back-end.
                    </p>
                  </li>
                  <li>
                    <p>
                      Utilized front-end frameworks such as React.js and
                      Material- UI to create complex user interfaces.
                    </p>
                  </li>
                  <li>
                    <p>
                      Managed state and props to maintain a synchronized flow of
                      information between different parts of the application.
                    </p>
                  </li>
                  <li>
                    <p>
                      Identified and resolved bugs and issues through systematic
                      debugging processes, ensuring a smooth and error-free
                      application
                    </p>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className="mui-icon-for-exp">
          <Tooltip title="Previous Page" placement="right-start">
            <ArrowUpwardIcon
              onClick={() => scrollToSection("About")}
              sx={{ backgroundColor: "white", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Next Page" placement="right-start">
            <ArrowDownwardIcon
              onClick={() => scrollToSection("Education")}
              sx={{ backgroundColor: "white", cursor: "pointer" }}
            />
          </Tooltip>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </Fragment>
  );
};

export default Experience;

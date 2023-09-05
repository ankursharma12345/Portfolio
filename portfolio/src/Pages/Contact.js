import { Avatar, Box, Grid, Stack, Typography, Tooltip } from "@mui/material";
import React, { Fragment } from "react";
import "../../src/styles/Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import InstagramIcon from "@mui/icons-material/Instagram";

const Skills = () => {
  const handleGit = () => {
    window.open("https://github.com/ankursharma12345", "_blank", "noreferrer");
  };
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/ankur-sharma-896bab1a0/",
      "_blank",
      "noreferrer"
    );
  };
  return (
    <Fragment>
      <Grid container className="contactBody">
        <Box
          sx={{ textAlign: "left", paddingTop: "60px", paddingLeft: "50px" }}
        >
          <Typography
            sx={{
              color: "#40F8FF",
              fontSize: 30,
              fontWeight: 'bold'
            }}
          >
            Now, you can contact with me through the following ways :
          </Typography>

          {/* MAin Stack */}
          <Stack direction={"column"} spacing={3} sx={{ mt: 6, ml: 3 }}>
            {/* First Stack for Github */}
            <Stack direction={"row"}>
              <Tooltip title="GitHub">
                <GitHubIcon
                  onClick={handleGit}
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </Tooltip>
              <Typography variant="h5" sx={{ ml: 3, color: "yellow" }}>
                /ankursharma12345
              </Typography>
            </Stack>

            {/* Second Stack for LinkedIn */}
            <Stack direction={"row"}>
              <Tooltip title="LinkedIn">
                <LinkedInIcon
                  onClick={handleLinkedIn}
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </Tooltip>
              <Typography variant="h5" sx={{ ml: 3, color: "yellow" }}>
                ankur-sharma-896bab1a0/
              </Typography>
            </Stack>

            {/* Third Stack for MailId */}
            <Stack direction={"row"}>
              <Tooltip title="MailId">
                <EmailIcon fontSize="large" sx={{ color: "white" }} />
              </Tooltip>
              <Typography variant="h5" sx={{ ml: 3, color: "yellow" }}>
                ankursharma131198@gmail.com
              </Typography>
            </Stack>

            {/* Fourth Stack for COntact Number */}
            <Stack direction={"row"}>
              <Tooltip title="Contact">
                <ContactPhoneIcon fontSize="large" sx={{ color: "white" }} />
              </Tooltip>
              <Typography variant="h5" sx={{ ml: 3, color: "yellow" }}>
                8795988520
              </Typography>
            </Stack>

            {/* Fifthe Stack for Instagram */}
            <Stack direction={"row"}>
              <Tooltip title="Instagram">
                <InstagramIcon fontSize="large" sx={{ color: "white" }} />
              </Tooltip>
              <Typography variant="h5" sx={{ ml: 3, color: "yellow" }}>
                ankursharma131198/
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "auto",
            height: 60,
            mt: 4,
            ml: 1,
            backgroundColor: "#FBF0B2",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ color: "red", ml: 1, fontSize: 20, fontWeight: "bold" }}
          >
            HINT :{" "}
            <span style={{ color: "darkblue", fontSize: 20, fontWeight: "bold" }}>
              YOU CAN JUST CLICK ON <b>GITHUB ICON</b>, <b>LINKEDIN ICON</b> AND <b>INSTAGRAM
              ICON</b> AND YOU WILL SEE MY ACCOUNT OVER HERE
            </span>
          </Typography>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default Skills;

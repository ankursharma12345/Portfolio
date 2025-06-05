import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, Grid, Tooltip } from "@mui/material";
import { Fragment } from "react";
import aboutImage from "../image/jexo-73REk-BB7-Y-unsplash.jpg";
import "../Styles/About.css";
import getExp from "../Utils";

const About = () => {

  const { expInYears, expInMonths } = getExp();

  const handleClick = () => {
    window.open(
      process.env.PUBLIC_URL + "/Updated_Resume.pdf",
      "_blank",
      "noreferrer"
    );
  };

  const scrollToSection = ({ sectionId, direction }) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (direction === "upward") {
      document.getElementById('Header')?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } else window.history.replaceState(null, '', "#Experience");
  };
  return (
    <Fragment>
      <Grid container id="About" className="container">
        <Grid item xs={12} sm={12} md={12} className="main-heading">
          ABOUT ME
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container justifyContent="space-evenly">
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              className="my-image"
              sx={{
                backgroundImage: `url(${aboutImage})`,
                height: "auto",
                overflow: "hidden",
                borderRadius: "30px 30px 30px 30px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Grid container className="about" spacing={2}>
                <Grid item>
                  I am Ankur Sharma, a passionate web designer based in Kanpur.
                  With a Master's degree in technology from Pranveer Singh
                  Institute of Technology, I have cultivated a deep
                  understanding of modern web development practices.
                </Grid>
                <Grid item>
                  Currently,{" "}
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    I work as a Web Application Developer at Pinnacle Finserv
                    Advisors
                  </span>
                  , where I leverage my expertise in{" "}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    React Js, Material UI, JavaScript, HTML, GitHub and Tortoise
                    SVN
                  </span>{" "}
                  to build innovative and user-friendly web applications.
                </Grid>
                <Grid item>
                  At Pinnacle, I am responsible for creating reusable
                  components, optimizing code for better performance, solving
                  bugs, and debugging effectively.
                </Grid>
                <Grid item>
                  {`Over the past ${expInYears}.${expInMonths} years, I have gained experience in web
                  development, focusing on front-end technologies. My journey
                  has equipped me with the skills to deliver high-quality,
                  scalable web applications and to continuously improve user
                  experience through innovative solutions.`}
                </Grid>

                <Grid item>
                  I am driven by a relentless curiosity and a passion for
                  continuous learning. Whether it’s exploring new technologies
                  or tackling challenging projects, I thrive in environments
                  that push me to grow.
                </Grid>
                <Grid item>
                  Looking ahead, I aim to take on leadership roles where I can
                  mentor upcoming developers and lead innovative projects.
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Button size="large" className="download" onClick={handleClick}>
            DOWNLOAD CV
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className="mui-icon">
          <Tooltip title="Previous Page" placement="right-start">
            <ArrowUpwardIcon
              onClick={() => {
                scrollToSection({ sectionId: "Home", direction: "upward" })
              }}
              sx={{ backgroundColor: "white", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Next Page" placement="right-start">
            <ArrowDownwardIcon
              onClick={() => {
                scrollToSection({ sectionId: "Experience", direction: "downWard" })
              }}
              sx={{ backgroundColor: "white", cursor: "pointer" }}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default About;

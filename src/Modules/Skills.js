import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Card, CardMedia, Grid, Tooltip } from "@mui/material";
import { Fragment } from "react";
import "../Styles/Skills.css";
import html from "../image/HTML.jpg";
import js from "../image/JS.jpg";
import mui from "../image/MUI.jpg";
import nextjs from "../image/Nextjs.png";
import react from "../image/React.png";
import redux from "../image/Redux.jpg";
import tortoise_logo from "../image/TortoiseSVN.jpg";
import tailwindcss from "../image/tailwindcss.png";

const Skills = () => {
  const allImages = [
    html,
    react,
    js,
    mui,
    tortoise_logo,
    redux,
    nextjs,
    tailwindcss
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState(null, '',"#Education");
  };


  return (
    <Fragment>
      <Grid container id="Skills" className="main-container-skills" spacing={3}>
        <Grid item xs={12} sm={12} md={12} className="heading">
          MY SKILLS
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container className="cards" spacing={4} columnGap={8.5}>
            {allImages?.map((image, index) => (
              <Grid item xs={4} sm={4} md={2} key={index}>
                <Card className="card">
                  <CardMedia
                    component="img"
                    height="130"
                    width="5"
                    image={image}
                    alt={`skill ${index}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className="mui-icon-skills">
          <Tooltip title="Previous Page" placement="right-start">
            <ArrowUpwardIcon
              onClick={() =>  scrollToSection("Education")}
              sx={{ backgroundColor: "white", cursor: "pointer" }}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Skills;

import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import "../../src/styles/Skills.css";
import Banner from "../Images/mahdis-mousavi-T4-_zzN0tKA-unsplash.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "../Images/C++.png";
import Divider from "@mui/material/Divider";
import Image1 from "../Images/html.png";
import Image2 from "../Images/js.png";
import Image3 from "../Images/Material.png";
import Image4 from "../Images/css.png";
import Image5 from "../Images/js.png";

const Skills = () => {
  return (
    <Fragment>
      <Grid container className="skillsBody">

        {/* Left-side image */}
        <Box>
          <Avatar
            sx={{ width: 420, height: 700, ml: 0 }}
            variant="square"
            src={Banner}
          ></Avatar>
        </Box>
        <Card
          sx={{
            backgroundColor: "black",
            height: 220,
            width: 245,
            ml: 4,
            mt: 7,
          }}
        >
          <CardMedia>
            <Avatar src={Image} sx={{ ml: 12.5, mt: 1.5, height: 45, width: 45}}></Avatar>
          </CardMedia>
          <Divider
            color="white"
            sx={{ borderBottomWidth: 2.5, marginTop: 1 }}
          />
          <CardContent sx={{mt:-2}}>
            <Typography variant="h6" component="div" sx={{color:'skyblue'}}>
              {" "}
              I am familiar with this language and also know the OOPS concept of
              that.
            </Typography>
          </CardContent>
        </Card>

        {/* Second Card */}
        <Card
          sx={{
            backgroundColor: "black",
            height: 220,
            width: 245,
            ml: 4,
            mt: 7,
          }}
        >
          <CardMedia>
            <Avatar src={Image1} sx={{ ml: 12.5, mt: 1.5 , height: 45, width: 45}}></Avatar>
          </CardMedia>
          <Divider
            color="white"
            sx={{ borderBottomWidth: 2.5, marginTop: 1 }}
          />
          <CardContent sx={{mt:-2}}>
            <Typography variant="h6" component="div" sx={{color:'skyblue'}}>
              {" "}
              I have used HTML in my React project in the JSX.
            </Typography>
          </CardContent>
        </Card>

        {/* Third Card */}
        <Card
          sx={{
            backgroundColor: "black",
            height: 220,
            width: 245,
            ml: 4,
            mt: 7,
          }}
        >
          <CardMedia>
            <Avatar src={Image2} sx={{ ml: 12.5, mt: 1.5 , height: 45, width: 45}}></Avatar>
          </CardMedia>
          <Divider
            color="white"
            sx={{ borderBottomWidth: 2.5, marginTop: 1 }}
          />
          <CardContent sx={{mt:-2}}>
            <Typography variant="h6" component="div" sx={{color:'skyblue'}}>
              {" "}
             I have used Javascript in all my React project and learning things everyday.   
            </Typography>
          </CardContent>
        </Card>
        
        {/* Fourth Card */}
        <Card
          sx={{
            backgroundColor: "black",
            height: 220,
            width: 245,
            ml: 56.5,
            mt: -50 ,
          }}
        >
          <CardMedia>
            <Avatar src={Image3} sx={{ ml: 12.5, mt: 1.5 , height: 45, width: 45}}></Avatar>
          </CardMedia>
          <Divider
            color="white"
            sx={{ borderBottomWidth: 2.5, marginTop: 1 }}
          />
          <CardContent sx={{mt:-2}}>
            <Typography variant="h6" component="div" sx={{color:'skyblue'}}>
              {" "}
             I have used Javascript in all my React project and learning things everyday.   
            </Typography>
          </CardContent>
        </Card>

        {/* Fifth Card */}
        <Card
          sx={{
            backgroundColor: "black",
            height: 220,
            width: 245,
            ml: 91.1,
            mt: -50 ,
          }}
        >
          <CardMedia>
            <Avatar src={Image4} sx={{ ml: 12.5, mt: 1.5 , height: 45, width: 45}}></Avatar>
          </CardMedia>
          <Divider
            color="white"
            sx={{ borderBottomWidth: 2.5, marginTop: 1 }}
          />
          <CardContent sx={{mt:-2}}>
            <Typography variant="h6" component="div" sx={{color:'skyblue'}}>
              {" "}
             I am using CSS at all my React project and this Portfolio is built using some CSS in it.   
            </Typography>
          </CardContent>
        </Card>

        {/* Sixth Card */}
        <Card
          sx={{
            backgroundColor: "black",
            height: 220,
            width: 245,
            ml: 125.8,
            mt: -50 ,
          }}
        >
          <CardMedia>
            <Avatar src={Image5} sx={{ ml: 12.5, mt: 1.5 , height: 45, width: 45}}></Avatar>
          </CardMedia>
          <Divider
            color="white"
            sx={{ borderBottomWidth: 2.5, marginTop: 1 }}
          />
          <CardContent sx={{mt:-2}}>
            <Typography variant="h6" component="div" sx={{color:'skyblue'}}>
              {" "}
              I have the basic knowledge of Javascript which I used in my portfolio project. 
            </Typography>
          </CardContent>
        </Card>
        
      </Grid>
    </Fragment>
  );
};

export default Skills;

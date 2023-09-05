import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { AppBar, Link, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "../../styles/Header.css";
import Banner from "../../Images/Screenshot (1).png";

const Header = () => {
  return (
    <Fragment>
      <AppBar sx={{ backgroundColor: "black" }}>
        <Box sx={{ display: "flex" }}>
          <Avatar sx={{ ml: 2, mt: 1 }} src={Banner} />
          <Typography
            variant="h6"
            sx={{ ml: 1, mt: 1.5, color: "#FF8033", fontWeight: "bold" }}
          >
            ANKUR SHARMA
          </Typography>
          <ul className="listcontainer">
            <li>
              <Link href="/Portfolio/">HOME</Link>
            </li>
            <li>
              <Link href="#about">ABOUT</Link>
            </li>
            <li>
              <Link href="#skills">SKILLS</Link>
            </li>
            <li>
              <Link href="#contact">CONTACT ME</Link>
            </li>
          </ul>
        </Box>
      </AppBar>
    </Fragment>
  );
};

export default Header;

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Fragment, useState } from "react";
import "../Styles/Header.css";
import Contact from "../Modules/Contact";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const handleOpenNavMenu = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setOpenMenu(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const calculateMenuWidth = () => {
    // Calculate the menu width based on the current screen size
    if (isMobile) {
      return "100%"; // Use full width for smaller screens
    } else {
      return "30ch"; // Use a fixed width for larger screens
    }
  };

  const openAbout = () => {
    debugger;
    document.getElementById("about")?.click();
  };

  const handleClick = React.useCallback((e) => {
    setOpenContact(true);
  }, []);
  const handleCloseContact = React.useCallback(() => {
    setOpenContact(false);
  }, []);

  const propsForContact = {
    open: openContact,
    handleClose: handleCloseContact,
    initialData: {},
  };

  return (
    <Fragment>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Grid container>
            <Grid
              item
              md={12}
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
              }}
            >
              <IconButton
                onClick={handleOpenNavMenu}
                sx={{ color: "white", padding: "0px" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                // anchorOrigin is used to position the popup menu
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={openMenu}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .mobileview": {
                    // & is used to target the element with className="mobileview" in the component
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center the items horizontally
                    justifyContent: "center", // Center the items vertically
                  },
                }}
                PaperProps={{
                  style: {
                    maxHeight: "none", // Disable max height
                    width: calculateMenuWidth(), // Dynamically calculate width
                    backgroundColor: "#a4ace0",
                  },
                }}
              >
                <Grid item className="close-icon" onClick={handleCloseNavMenu}>
                  <CloseIcon />
                </Grid>
                <Grid item className="mobileview">
                  <Button
                    sx={{ display: "block" }}
                    onClick={handleCloseNavMenu}
                  >
                    HOME
                  </Button>
                  <Button
                    sx={{ display: "block" }}
                    onClick={handleCloseNavMenu}
                  >
                    ABOUT
                  </Button>
                  <Button
                    sx={{ display: "block" }}
                    onClick={handleCloseNavMenu}
                  >
                    EXPERIENCE
                  </Button>
                  <Button
                    sx={{ display: "block" }}
                    onClick={() => {
                      handleClick();
                      handleCloseNavMenu();
                    }}
                  >
                    CONTACT
                  </Button>
                </Grid>
              </Menu>
            </Grid>
            <Grid container justifyContent="space-evenly">
              <Grid
                item
                md={5}
                className="item"
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "cursive",
                    color: "goldenrod",
                  }}
                >
                  ANKUR SHARMA{" "}
                  <span id="spanstyle">Web Application Developer</span>
                </Typography>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "space-evenly",
                  },
                }}
              >
                <Button id="home">HOME</Button>
                <Button id="about" onClick={openAbout}>
                  ABOUT
                </Button>
                <Button id="experience">EXPERIENCE</Button>
                <Button id="contact" onClick={handleClick}>
                  CONTACT
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Contact {...propsForContact} />
    </Fragment>
  );
};
export default Header;

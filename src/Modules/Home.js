// import { Grid } from "@mui/material";
// import React, { Fragment } from "react";
// import Header from "../Component/Header";
// import "../Styles/Home.css";
// import image from "../image/new_image.png";
// import About from "./About";
// import Experience from "./Experience";

// const Home = () => {
//   return (
//     <Fragment>
//       <Header />
//       <Grid container className="main">
//         <Grid item xs={12} sm={12} md={6} className="left">
//           <div style={{ color: "white" }}>Hello,</div>
//           <div className="second" style={{ color: "white" }}>
//             I'm <span style={{ color: "yellow" }}>Ankur</span>
//           </div>
//           <div className="third" style={{ color: "white" }}>
//             Website Designer
//           </div>
//           <div className="forth">
//             I am skilled and passionate web designer having 1+ year experience
//             in React Js, Material UI, Javascript and GitHub
//           </div>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={5}
//           justifyContent="space-around"
//           className="right"
//           sx={{
//             backgroundImage: `url(${image})`,
//             height: "80%",
//             borderRadius: "30px 30px 30px 30px",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             marginTop: { xs: 2, sm: 2, md: 0 },
//           }}
//         ></Grid>
//       </Grid>
//       <Grid container>
//         <Grid item xs={12} sm={12} md={12} className="container">
//           <About />
//         </Grid>
//       </Grid>
//       <Grid container>
//         <Grid item xs={12} sm={12} md={12} className="expo">
//           <Experience />
//         </Grid>
//       </Grid>
//     </Fragment>
//   );
// };

// export default Home;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Header from "../Component/Header";
import "../Styles/Home.css";
import image from "../image/new_image.png";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";

const Home = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container className="main">
            <Grid item xs={12} sm={12} md={6} className="left">
              <div style={{ color: "white" }}>Hello,</div>
              <div className="second" style={{ color: "white" }}>
                I'm <span style={{ color: "yellow" }}>Ankur</span>
              </div>
              <div className="third" style={{ color: "white" }}>
                Website Designer
              </div>
              <div className="forth">
                I am skilled and passionate web designer having 1+ year
                experience in React Js, Material UI, Javascript and GitHub
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              // justifyContent="space-around"
              className="right"
              sx={{
                backgroundImage: `url(${image})`,
                height: "80%",
                borderRadius: "30px 30px 30px 30px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginTop: { xs: 2, sm: 2, md: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <About />

      <Experience />
      <Skills />
    </Fragment>
  );
};

export default Home;

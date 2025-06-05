import React, { Fragment } from "react";
import Home from "./Modules/Home";
import Header from "./Component/Header";


function App() {
  return (
    <Fragment>
      <Header/>
      <Home />
      {/* <Home/> */}
    </Fragment>
  );
}

export default App;

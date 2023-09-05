import React, { Fragment } from 'react';
import Layout from './component/Layout/Layout';
// import About from './Pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Skills from './Pages/Skills';
// import Contact from './Pages/Contact';
import Home from './component/Layout/Home';

function App() {
  return (
   <Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/About" element={<About/>}></Route>
          <Route path="/Skills" element={<Skills/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route> */}
        </Route>
      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;

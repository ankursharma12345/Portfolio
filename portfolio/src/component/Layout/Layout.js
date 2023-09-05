import React, { Fragment } from 'react'
import Header from './Header'
import Home from './Home'
// import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <Fragment>
    <Header/>
    <Home/>
    {/* <Outlet/> */}
  </Fragment>
  )
}

export default Layout

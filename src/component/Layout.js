import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="leftSide">
          <div className="home">
            <Link to="/">Home</Link>
          </div>
          <div className="comp">
            <Link to="/a">ComponentA</Link>
          </div>
          <div className="comp">
            <Link to="/b">ComponentB</Link>
          </div>
        </div>
        <div className="rightSide">
          <div className="right">
            <Link to="/c">ComponentC</Link>
          </div>
          <div className="right">
            <Link to="/d">ComponentD</Link>
          </div>
          <div className="right">
            <Link to="/e">ComponentE</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

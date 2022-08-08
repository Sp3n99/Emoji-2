import React from 'react'
import "./topbar.scss"
import test from "./test";
import { useEffect } from 'react';

const Navbar = () => {


  useEffect(() => {
    test("spencer");
  }, []);

  return (
    <div className="topbar">
        <h1>Emoji Creator</h1>
    </div>
  )
}

export default Navbar
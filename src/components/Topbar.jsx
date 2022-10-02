import React from 'react'
import "./topbar.scss"
import test from "./test";
import { useEffect } from 'react';

const Navbar = () => {


  useEffect(() => {
    test("spencer");
  }, []);

  return (
    <div className="topbar" style={{backgroundColor: '#505050', color: '#eeeeee'}}>
        <h1>Stellar Emojis</h1>
    </div>
  )
}

export default Navbar
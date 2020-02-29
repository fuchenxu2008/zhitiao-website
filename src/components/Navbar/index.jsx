import React from 'react';
import zhitaoLogo from '../../static/images/zhitiao_logo.png';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src={zhitaoLogo} alt="" />
        <h2>纸条 Zhitiao</h2>
      </div>
    </div>
  );
}

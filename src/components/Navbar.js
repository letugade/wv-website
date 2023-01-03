import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React, { useLayoutEffect } from "react";

import logo from "../assets/logo.svg"

function Navbar() {
    let { collapseSidebar } = useProSidebar();
  return (
    <Sidebar defaultCollapsed="true" style={{ width: "20vw"}}>
        <div>
            <img src={logo} />
        </div>
        <Menu>
        <MenuItem routerLink={<Link to="/home"/>}> Home</MenuItem>
        <MenuItem routerLink={<Link to="/about-us"/>}> About Us</MenuItem>
        <SubMenu label="Projects">
            <MenuItem routerLink={<Link to="/projects/podcast"/>}> Podcast</MenuItem>
            <MenuItem routerLink={<Link to="/projects/repo"/>}> Repo</MenuItem>
            <MenuItem routerLink={<Link to="/projects/UTMC"/>}> UTMC</MenuItem>
            <MenuItem routerLink={<Link to="/projects/wakeup-club"/>}> Wakeup Club</MenuItem>
        </SubMenu>
        </Menu>
    </Sidebar>
  );
}

export default Navbar;

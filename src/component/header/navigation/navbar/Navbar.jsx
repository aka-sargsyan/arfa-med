import React from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../../windowSize/WindowSize";
import styleCss from "./Navbar.module.css"




const Navbar = (props) => {
   return (
    <div className={`${styleCss.navigation} alignItemsCenter flex justifyContentEnd width100 height100`}>
      <ul>
        <li>
          <NavLink to="/home" activeClassName={styleCss.active} className="pl0">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about_as" activeClassName={styleCss.active}>Abut As</NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName={styleCss.active}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/our_doctor" activeClassName={styleCss.active}>Our Doctors</NavLink>
        </li>
        <li>
          <NavLink to="/devices_accessories" activeClassName={styleCss.active}>Devices and Accessories</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName={styleCss.active} className="pr0">Blog</NavLink>
        </li>
      </ul>
    </div>)
}

export default Navbar;


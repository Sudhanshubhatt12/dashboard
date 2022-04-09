import React from "react";
import "./sidebar.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";


const Sidebar = () => {
 
  return (
    <div className="sidebar">
    <GrUserAdmin id='admin'/>
      <ul className="sidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className="row">
              <Link to={val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

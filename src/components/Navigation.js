import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>Home</li>
        </NavLink>

        <li className="nav-portfolio">Portfolio
          <ul className="nav-projects">
            <NavLink to="/project-1" activeClassName="nav-active" className="hover">
              <li>Projet 1</li>
            </NavLink>
            <NavLink to="/project-2" activeClassName="nav-active" className="hover">
              <li>Projet 2</li>
            </NavLink>
            <NavLink to="/project-3" activeClassName="nav-active" className="hover">
              <li>Projet 3</li>
            </NavLink>
            <NavLink to="/project-4" activeClassName="nav-active" className="hover">
              <li>Projet 4</li>
            </NavLink>
            <NavLink to="/project-5" activeClassName="nav-active" className="hover">
              <li>Projet 5</li>
            </NavLink>
            <NavLink to="/project-6" activeClassName="nav-active" className="hover">
              <li>Projet 6</li>
            </NavLink>
            <NavLink to="/project-7" activeClassName="nav-active" className="hover">
              <li>Projet 7</li>
            </NavLink>
            <NavLink to="/project-8" activeClassName="nav-active" className="hover">
              <li>Projet 8</li>
            </NavLink>
            <NavLink to="/project-9" activeClassName="nav-active" className="hover">
              <li>Projet 9</li>
            </NavLink>
          </ul>
        </li>

        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

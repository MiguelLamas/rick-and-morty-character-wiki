import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <Link className="fs-3 ubuntu navbar-brand">
          Rick & Morty Character <span className="text-primary">WiKi</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

          <div class="navbar-nav">
            <NavLink to="/" class="nav-link">
              Characters
            </NavLink> 
            <NavLink to="/episodes" class="nav-link">
              Episodes
            </NavLink>
            <NavLink to="/location" class="nav-link">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "../styles/NavBarStyles.css";
function NavBarComponents() {
  return (
    <>
      <header>
        {/* <h2>Yasu</h2> */}
        <div class="hamburger-menu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about-yasu">about</a>
          <a href="#publications">Publications</a>
        </div>
      </header>
    </>
  );
}

export default NavBarComponents;

import React from "react";

function Navbar() {
  return (
    <div>
      {/* Navbar- will contains links for smooth scrolling */}
      <nav>
        <ul className="header">
          <li>Home</li>
          <li>Book A Tour</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

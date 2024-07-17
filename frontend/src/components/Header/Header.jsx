import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here.</h2>
        <p>
          Savor authentic African cuisine, crafted with love and tradition.
          Order now and bring the vibrant flavors of Africa to your table.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

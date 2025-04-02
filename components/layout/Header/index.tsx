import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";

const Header = () => {
  return (
    <nav className="flex flex-col overflow-x-clip z-50" >
      <Top />
      <Bottom />
    </nav>
  );
};

export default Header;

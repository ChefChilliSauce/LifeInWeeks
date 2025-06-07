import React, { useState, useEffect } from "react";

function Header(props) {
  return (
    <header className="bg-gray-100 border-b border-gray-300 ] select-none">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="font-medium text-lg  text-gray-900 ">Life in Weeks</div>
        <nav className="flex font-semibold">
          <a onClick={props.click}>Add Milestone</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

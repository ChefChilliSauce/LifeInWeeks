import React, { useState, useEffect } from "react";

function Header() {
  return (
    <header className="bg-gray-100 border-b border-gray-300 ]">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="font-medium text-lg select-none text-gray-900 ">
          Life in Weeks
        </div>
        <nav className="flex font-semibold"></nav>
      </div>
    </header>
  );
}

export default Header;

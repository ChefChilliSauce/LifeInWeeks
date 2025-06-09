import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // For close button

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 border-b border-gray-300 select-none">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="font-medium text-lg text-gray-900">Life in Weeks</div>

        <nav className="hidden md:flex font-semibold space-x-4">
          <a
            className="cursor-pointer hover:underline"
            onClick={props.clickAddMilestone}
          >
            Add Milestone
          </a>
          <a
            className="cursor-pointer hover:underline"
            onClick={props.clickRemoveMilestone}
          >
            Remove Milestone
          </a>
          <a
            className="cursor-pointer hover:underline"
            onClick={props.clickLogout}
          >
            Logout
          </a>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-8 pb-4 animate-fade-in">
          <div className="flex flex-col space-y-3 font-semibold">
            <a
              className="cursor-pointer hover:underline"
              onClick={() => {
                setMenuOpen(false);
                props.clickAddMilestone();
              }}
            >
              Add Milestone
            </a>
            <a
              className="cursor-pointer hover:underline"
              onClick={() => {
                setMenuOpen(false);
                props.clickRemoveMilestone();
              }}
            >
              Remove Milestone
            </a>
            <a
              className="cursor-pointer hover:underline"
              onClick={() => {
                setMenuOpen(false);
                props.clickLogout();
              }}
            >
              Logout
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;

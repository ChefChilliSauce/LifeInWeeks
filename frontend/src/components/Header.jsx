import React from "react";

function Header(props) {
  return (
    <header className="bg-gray-100 border-b border-gray-300 ] select-none">
      <div className="flex justify-between items-center px-8 py-6">
        <div className="font-medium text-lg  text-gray-900 ">Life in Weeks</div>
        <nav className="flex font-semibold space-x-4">
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
      </div>
    </header>
  );
}

export default Header;

import React from "react";

function FooterAuthLight() {
  const year = new Date().getFullYear();
  const linkClass = "text-xs text-[#4ade80] hover:underline";
  return (
    <footer className="bg-white select-none">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6">
        <div className="font-light text-sm text-center md:text-left text-[#131313]">
          ⓒ {year} Chef Chilli Sauce. Built with love and magic.
        </div>{" "}
        <div className="mb-2 md:mb-0">
          <a
            href="/terms"
            className="text-xs text-[#4ade80] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of use
          </a>
          <span className="text-xs text-[#4ade80]"> | </span>
          <a
            href="/privacy"
            className="text-xs text-[#4ade80] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy
          </a>

          <p className="text-sm font-light text-[#131313]">
            complete code on{" "}
            <a
              href="https://github.com/ChefChilliSauce/LifeInWeeks.git"
              className="text-[#4ade80] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterAuthLight;

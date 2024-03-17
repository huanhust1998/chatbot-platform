import React from "react";
import { logo } from "../../assets/images";

const MENU_ITEMS = [
  "Platform",
  "Solutions",
  "Developers",
  "Company",
  "Resources",
];

const Header = () => {
  return (
    <div className="w-full px-60 flex justify-between items-center h-12">
      <div className="flex items-center justify-center gap-1">
        <img src={logo} alt="logo" width={40} />
        <h1 className="text-14 font-bold">Chatbot</h1>
      </div>
      <div className="flex gap-2">
        {MENU_ITEMS.map((item, key) => (
          <div key={key}>
            <span className="text-14 text-gray-80 font-semibold">{item}</span>
          </div>
        ))}
      </div>
      <div>
        <span>
          Sign in
        </span>
        <button>
          <span>BOOK A MEETING</span>
        </button>
      </div>
    </div>
  );
};
export default Header;

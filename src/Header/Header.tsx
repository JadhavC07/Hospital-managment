import React from "react";
import { ButtonMedium } from "../common/Buttons";
import { Link } from "react-router-dom";

const tabs = [
  { id: 1, label: "dashboard", path: "/" },
  { id: 2, label: "all doctors", path: "/doctor" },
  { id: 3, label: "all patients ", path: "/patint" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-sky-600 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">My App</h1>
        <nav>
          {tabs.map((tab) => (
            <Link key={tab.id} to={tab.path}>
              <ButtonMedium label={tab.label} bgColor="bg-blue-700" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  active: boolean;
  name: string;
  path: string;
  icon: string;
}

const MenuItem: FC<IProps> = ({ active, name, path, icon }) => {
  return (
    <li
      className={`items-center px-2 rounded-md ${
        active && "menu-active shadow-lg"
      }`}
    >
      <Link
        className={`text-xs uppercase py-3 font-bold block transition duration-500 ease-in-out transform hover:translate-x-2 ${
          active ? "text-white" : "text-gray-800 hover:text-gray-600"
        }`}
        to={path}
      >
        <i className={"mr-2 text-sm " + icon}></i> {name}
      </Link>
    </li>
  );
};

export default MenuItem;

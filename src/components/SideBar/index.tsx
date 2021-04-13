import React, { FC } from "react";
import menus from "./menu";
import MenuItem from "./MenuItem";

interface IProps {
  hidden?: boolean;
}

const SideBar: FC<IProps> = ({ hidden }) => {
  return (
    <div
      className={`h-screen fixed bg-white px-4 left-0 z-30 ${
        !hidden ? "hidden lg:block" : "animate-leftTo"
      } w-260px`}
    >
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center w-full mx-auto py-4">
        <div className=" text-left md:pb-2 text-gray-700 mr-0  whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
          Quan Ly Ban Hang
        </div>
        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          {menus.map((item) => (
            <MenuItem
              key={item.name}
              {...item}
              active={window.location.href.indexOf(item.path) !== -1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

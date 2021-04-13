import { FC, useState } from "react";
import avatar from "../../assets/images/avatar.png";
import SideBar from "../SideBar";

const NavBar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((pre) => !pre);
  const handleCloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <div>
      <div className="nav fixed top-0 right-0  pt-3 w-full mx-8  bg-white-smoke">
        <div className="px-4 py-2 bg-white flex items-center justify-between lg:justify-end shadow-lg  rounded-lg">
          <div className="items-center justify-center lg:hidden">
            <button
              className="text-gray-400 focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul>
            <li className="flex cursor-pointer">
              <div className="flex flex-col mr-3 justify-center">
                <span className="font-medium  leading-none">John Doe</span>
                <span className="text-xs leading-none">admin</span>
              </div>
              <div className="rounded-full w-10 h-10 overflow-hidden">
                <img src={avatar} alt="avatar" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={`lg:hidden ${showMenu ? "visible" : "hidden"}`}>
        <div
          className="fixed z-50 top-0 left-0 right-0 bottom-0  bg-black opacity-20"
          onClick={handleCloseMenu}
        ></div>
        <SideBar hidden={true} />
      </div>
    </div>
  );
};

export default NavBar;

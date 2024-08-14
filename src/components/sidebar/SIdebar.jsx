import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { IoLogoCodepen } from "react-icons/io5";
import { MdAccountBox, MdDocumentScanner, MdOutlineWorkspacePremium, MdSummarize } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaPen, FaSearch } from "react-icons/fa";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../stylesheet/dashboard.css';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const Menus = [
    { title: "Search", icon: <FaSearch />, path: "/dashboard" },
    { title: "Write", icon: <FaPen />, path: "/write" },
    { title: "Summarize", icon: <MdSummarize />, path: "/upload" },
    { title: "Documents", icon: <MdDocumentScanner />, path: "/alld" },
    { title: "Settings", icon: <IoMdSettings />, path: "/profile" },
    { title: "Accounts", icon: <MdAccountBox />, path: "/login" },
    { title: "Persona", icon: <PiPersonArmsSpreadFill />, path: "/persona" },
  ];

  useEffect(() => {
    const currentMenuIndex = Menus.findIndex(menu => menu.path === location.pathname);
    if (currentMenuIndex >= 0) {
      setSelectedMenu(currentMenuIndex);
    }
  }, [location.pathname]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    navigate(Menus[index].path);
  };

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-64" : "w-20"} bg-[#F3F3ED] h-screen p-5 pt-8 relative duration-300 shadow-xl transition-all ease-in-out`}
      >
        <button
          className={`absolute -right-3 top-9 w-7 h-7 bg-[#F3F3ED] border border-[#22808D] rounded-full transform transition-transform duration-300 flex items-center justify-center ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <img src="https://i.ibb.co/dg6DT24/arrow-1.png" alt="Toggle Sidebar" className="w-4 h-4"/>
        </button>
        <div className="flex items-center gap-x-4">
          <IoLogoCodepen className={`cursor-pointer text-[#22808D] text-4xl transform transition-transform ${open && "rotate-[360deg]"}`} onClick={() => setOpen(!open)} />
          <h1 className={`text-[#14343B] font-semibold text-2xl duration-200 tracking-wide ${!open && "hidden"}`}>
            4Gen.Ai
          </h1>
        </div>

        <ul className="pt-10 mt-12 space-y-6">  {/* Increased spacing */}
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center rounded-lg p-2 cursor-pointer hover:bg-[#e8e8e5] hover:text-[#22808D] text-lg font-medium transition-colors duration-200 ${selectedMenu === index ? "bg-[#e8e8e5] text-[#22808D]" : "text-[#64645E]"}`}
              onClick={() => handleMenuClick(index)}
            >
              <Link to={Menu.path} className="flex items-center gap-x-4 w-full">
                {React.cloneElement(Menu.icon, { className: `text-2xl ${selectedMenu === index ? "text-[#22808D]" : "text-[#64645E]"}` })}
                <span className={`${!open && "hidden"} transition-colors duration-200 ${selectedMenu === index ? "text-[#22808D]" : "text-[#64645E]"}`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={`absolute bottom-8 w-4/5 flex ${open ? "px-4" : ""}`}>
          <Button
            className={`${open ? "animated-border text-gray-700 py-2 px-4 rounded-lg shadow-md bg-[#22808D] hover:bg-[#1e717a] transition-all duration-300 w-full" : "text-2xl text-[#22808D] p-2 bg-transparent hover:bg-[#e8e8e5] rounded-full transition-all duration-300"}`}
            auto
            shadow={!open}
            fullWidth={open}
          >
            {open ? "Upgrade to Premium" : <MdOutlineWorkspacePremium className="mr-10" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

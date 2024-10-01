import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";
import { IoLogoCodepen } from "react-icons/io5";
import { MdOutlineWorkspacePremium, MdSummarize } from "react-icons/md";
import { MdOutlineBroadcastOnPersonal } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiFilePdfLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiNotebookThin } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { PiPencilLineThin } from "react-icons/pi";
import '../../stylesheet/dashboard.css';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const Menus = [
    { title: "Search", icon: <IoSearchOutline />, path: "/dashboard" },
    { title: "Write", icon: <PiPencilLineThin />, path: "/write" },
    { title: "Summarize", icon: <PiNotebookThin />, path: "/upload" },
    { title: "Documents", icon: <IoDocumentsOutline />, path: "/alld" },
    { title: "Settings", icon: <CiSettings />, path: "/profile" },
    { title: "Accounts", icon: <IoPersonOutline />, path: "/login" },
    { title: "Persona", icon: <MdOutlineBroadcastOnPersonal />, path: "/persona" },
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <IoLogoCodepen className={`cursor-pointer text-[#22808D] text-4xl transform transition-transform ${open && "rotate-[360deg]"}`} onClick={() => setOpen(!open)} />
            <h1 className={`text-[#14343B] font-semibold text-2xl duration-200 tracking-wide ${!open && "hidden"}`}>
              4Gen.Ai
            </h1>
          </div>
          {/* Hide avatar when sidebar is closed */}
          {open && (
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    size: "md", // Reduced avatar size
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">@tonyreichert</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>

        <ul className="pt-10 space-y-2">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center rounded-lg p-2 cursor-pointer hover:bg-[#e8e8e5] hover:text-[#22808D] text-lg transition-colors duration-200 ${selectedMenu === index ? "bg-[#e8e8e5] text-[#22808D]" : "text-[#64645E]"}`}
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

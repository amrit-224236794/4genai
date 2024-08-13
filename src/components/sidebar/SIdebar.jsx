import React,{ useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { IoLogoCodepen } from "react-icons/io5";
import { MdAccountBox, MdDocumentScanner, MdOutlineWorkspacePremium, MdSummarize } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaPen, FaSearch } from "react-icons/fa";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link, useLocation, and useNavigate from react-router-dom
import '../../stylesheet/dashboard.css';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0); // Set initial selected menu
  const location = useLocation();
  const navigate = useNavigate();

  const Menus = [
    { title: "Search", icon: <FaSearch className={`text-2xl text-[#64645E] `} />, path: "/dashboard" },
    { title: "Write", icon: <FaPen className={`text-2xl  text-[#64645E]`} />, path: "/write" },
    { title: "Summarize", icon: <MdSummarize className={`text-2xl text-[#64645E]`} />, path: "/docr" },
    { title: "Documents", icon: <MdDocumentScanner className={`text-2xl  text-[#64645E]`} />, path: "/alld" },
    { title: "Settings", icon: <IoMdSettings className={`text-2xl  text-[#64645E]`} />, path: "/profile" },
    { title: "Accounts", icon: <MdAccountBox className={`text-2xl  text-[#64645E]`} />, path: "/login" },
    { title: "Persona", icon: <PiPersonArmsSpreadFill className={`text-2xl  text-[#64645E]`} />, path: "/persona" },
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
        className={` ${open ? "w-56" : "w-20"} bg-[#F3F3ED] h-screen p-5 pt-8 relative duration-300 shadow-lg`}
      >
        <img
          src="https://i.ibb.co/dg6DT24/arrow-1.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="Toggle Sidebar"
        />
        <div className="flex items-center gap-x-4">
          <IoLogoCodepen className={`cursor-pointer duration-500 text-[#22808D] text-4xl w-10 ${open && "rotate-[360deg] text-4xl"}`} onClick={() => setOpen(!open)} />
          <h1 className={`text-[#14343B] font-medium origin-left text-3xl duration-200 ${!open && "hidden"}`}>
            4Gen.Ai
          </h1>
        </div>

        <ul className="pt-6 mt-20">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center rounded-lg p-2 cursor-pointer hover:bg-[#e8e8e5] hover:text-[#22808D]  text-base gap-x-4 mt-6 transition-colors duration-200 ${selectedMenu === index ? "bg-[#F3F3ED] text-[#22808D]" : ""}`}
              onClick={() => handleMenuClick(index)}
            >
              <Link to={Menu.path} className="flex items-center gap-x-4 w-full">
                {React.cloneElement(Menu.icon, { className: `${selectedMenu === index ? "text-[#22808D]" : "text-[#64645E]"}` })}
                <span className={`${!open && "hidden"} hover:text-[#22808D] text-sm origin-left duration-200 ${selectedMenu === index ? "text-[#22808D]" : "text-[#64645E]"}`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={`absolute bottom-8 ${open ? "left-1/2 transform -translate-x-1/2 w-full px-4" : "left-1/2 transform -translate-x-1/2 w-20"}`}>
          <Button
            className={`${open ? "animated-border text-gray-600 py-2 px-4 rounded-lg" : ""}`}
            auto
            shadow
            fullWidth
          >
            {open ? "Upgrade to Premium" : <MdOutlineWorkspacePremium />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

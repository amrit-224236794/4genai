import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";
import { IoLogoCodepen, IoPersonOutline, IoDocumentsOutline, IoSearchOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineWorkspacePremium, MdOutlineBroadcastOnPersonal } from "react-icons/md";
import { PiNotebookThin, PiPencilLineThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../stylesheet/dashboard.css';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [historyOpen, setHistoryOpen] = useState(false); // For search history toggle
  const location = useLocation();
  const navigate = useNavigate();

  const Menus = [
    { title: "Search", icon: <IoSearchOutline />, path: "/dashboard" },
    { title: "Write", icon: <PiPencilLineThin />, path: "/write" },
    { title: "Summarize", icon: <PiNotebookThin />, path: "/upload" },
    { title: "Documents", icon: <IoDocumentsOutline />, path: "/documents" },
    { title: "Settings", icon: <CiSettings />, path: "/profile" },
    { title: "Accounts", icon: <IoPersonOutline />, path: "/login" },
    { title: "Persona", icon: <MdOutlineBroadcastOnPersonal />, path: "/persona" },
  ];

  const searchHistory = [
    {
      date: "Today",
      searches: [
        { time: "10:30 AM", query: "What is the capital of Australia?" },
        { time: "11:45 AM", query: "How to learn React efficiently?" }
      ],
    },
    {
      date: "Yesterday",
      searches: [
        { time: "09:15 AM", query: "Best practices for API integration" },
        { time: "01:30 PM", query: "Understanding JavaScript closures" }
      ],
    },
    {
      date: "Previous Chats",
      searches: [
        { time: "03:00 PM", query: "What is GraphQL and how does it work?" },
      ],
    },
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
        className={` ${open ? "w-64" : "w-20"} bg-[#F5F5F5] h-screen p-5 pt-8 relative duration-300 shadow-xl transition-all ease-in-out`}
      >
        <button
          className={`absolute -right-3 top-9 w-7 h-7 bg-[#F3F3ED] border rounded-full transform transition-transform duration-300 flex items-center justify-center ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <img src="https://i.ibb.co/28YL5Pz/right-1.png" alt="Toggle Sidebar" className="w-5 h-5"/>
        </button>
        <div className="flex items-center justify-between">
          <div className="flex items-left gap-x-4">
            <img
              src={open ? "https://i.ibb.co/VqMpVS3/Whats-App-Image-2024-10-09-at-00-17-26-removebg-preview.png" : "https://i.postimg.cc/Cd3RyzfQ/collapse.png"}
              className="w-40"
              alt="Logo"
            />
          </div>
        </div>

        <ul className="pt-8 space-y-2">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center rounded-2xl p-1 cursor-pointer hover:bg-[#e8e8e5] hover:text-[#0957D0] text-lg transition-colors duration-200 ${selectedMenu === index ? "bg-[#E8E9EA] text-[#0957D0]" : "text-[#0957D0]"}`}
              onClick={() => handleMenuClick(index)}
            >
              <Link to={Menu.path} className="flex items-center gap-x-3 w-full">
                {React.cloneElement(Menu.icon, { className: `text-2xl ${selectedMenu === index ? "text-[#0957D0]" : "text-black"}` })}
                <span className={`${!open && "hidden"} transition-colors text-base duration-200 ${selectedMenu === index ? "text-[#0957D0] font-semibold" : "text-black"}`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="my-4 border-t-2 border-gray-300"/>

        {/* Search history section */}
        <div className={`relative ${historyOpen ? "h-64" : "h-12"} transition-all duration-300`}>
          {open ? (
            <>
              <button
                className="flex justify-between items-center w-full text-lg font-semibold text-black hover:text-[#0957D0]"
                onClick={() => setHistoryOpen(!historyOpen)}
              >
                <span>{open && "Search History"}</span>
                <span className="text-2xl">{historyOpen ? "-" : "+"}</span>
              </button>

              <div
                className={`mt-2 overflow-y-auto transition-all duration-300 ${historyOpen ? "max-h-64" : "max-h-0"} ${historyOpen && "  rounded-xl p-2"}`}
                
              >
                {searchHistory.map((history, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-black font-semibold">{history.date}</h3>
                    <ul className="space-y-1">
                      {history.searches.map((search, i) => (
                       <React.Fragment key={i}>
                       <li className="text-base text-black hover:text-[#0957D0] cursor-pointer">
                         {search.query.substring(0, 35)}...  {/* Limit to 20 characters */}
                       </li>
                       <hr />
                     </React.Fragment>
                     
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div
              className="flex items-center justify-center w-full h-full cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <IoTimeOutline className="text-3xl text-black hover:text-[#0957D0]" />
            </div>
          )}
        </div>

        <div className={`absolute bottom-8 w-4/5 flex ${open ? "px-4" : ""}`}>
          <div className="flex items-center justify-between">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    size: "sm",
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

            <h1 className={`text-[#14343B] font-semibold text-base duration-200 tracking-wide ${!open && "hidden"}`}>
              Hey, Arjun
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import './App.css';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";

function App() {
  return (
    <div className="relative flex flex-col h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-[#FCFCF9] bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('')",
        }}
      ></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="sm:hidden">
          <Nav />
        </div>
        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="hidden sm:block ">
            <Sidebar />
          </div>
          <div className="flex-1 flex justify-center items-center relative">
            {/* Accounts on top */}
            <div className="hidden sm:block absolute top-4 right-8 cursor-pointer">
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
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
            </div>

            {/* Components Rendering */}
            <div className="flex justify-center items-start w-full h-full pt-4 pb-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

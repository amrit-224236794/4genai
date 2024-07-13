import React, { useState,useEffect,useContext } from "react";
import {Navbar, NavbarBrand,NavbarMenuItem, NavbarMenu,NavbarMenuToggle ,NavbarContent, NavbarItem, Link, Button, Modal, ModalContent, ModalHeader, ModalBody,Select, SelectItem, useDisclosure,DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { Logo } from "./Logo";
import { useNavigate } from 'react-router-dom';

import { IoSearch } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Nav() {

  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const history = useNavigate();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();




      return (
        <>
         <div className="border border-black bg-black">
        <nav className=" border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto w-full p-2 pl-10 pr-10">
            <Link>
              <span className="self-center w-20  font-regular whitespace-nowrap dark:text-white text-black hover:cursor-pointer">
                <img src="https://i.ibb.co/tzxdT4C/Screenshot-2024-07-13-at-1-41-47-PM.png" alt="" />
              </span>
            </Link>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <Button as={Link}  className="bg-white text-black" href="/post" variant="flat">
                Upgrade
              </Button>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="default"
                    name="Jason Hughes"
                    size="sm"
                    src="https://cdn-icons-png.freepik.com/512/64/64572.png?ga=GA1.1.656885783.1720841886"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">Configurations</DropdownItem>
                  <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </nav>
      </div>


         
         
          

          

          {/* Search Modal */}
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" className="h-96">
            <ModalContent>
              {(onClose) => (
                <>
                  {/* <ModalHeader className="flex flex-col gap-1">
                    Search
                  </ModalHeader> */}
                  <ModalBody className="mt-10">
              
                    
                    <h1 className="m-auto">Results</h1>
                  </ModalBody>
                  
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
}

export default Nav
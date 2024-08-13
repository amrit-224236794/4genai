import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from './Logo'
import { IoSearch } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineHome } from "react-icons/md";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
     
          <p className="text-black origin-left text-3xl duration-200">4Gen.ai</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
         
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

 {/* Bottom Navigation */}
 <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around border-t items-center py-3 sm:hidden z-50">
            <Button
              onPress={() => {
                history('/');
              }}
              color="default"
              variant="light"
            >
             <MdOutlineHome  className="text-2xl"/>
              {/* <Logo /> */}
            </Button>

            <Button  color="default" variant="light">
              <IoSearch className="text-2xl" />
            </Button>

            <Button
              onPress={() => {
                history("/post");
              }}
              color="default"
              variant="light"
            >
              <IoMdAdd className="text-2xl" />
            </Button>

            <Button
              onPress={() => {
                history("/dashboard");
              }}
              color="default"
              variant="light"
            >
              <CgMenuGridR className="text-2xl" />
            </Button>

            <Button
              onPress={() => {
                history("/profile");
              }}
              color="default"
              variant="light"
            >
              <CgProfile className="text-2xl" />
            </Button>
          </div>
    </>
  );
}
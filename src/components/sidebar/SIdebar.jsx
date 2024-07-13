import { useState } from "react";
import { Button } from "@nextui-org/react";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const Menus = [
      { title: "Conversations", src: "https://cdn-icons-png.freepik.com/512/81/81918.png?ga=GA1.1.656885783.1720841886" },
      { title: "Summarise", src: "https://cdn-icons-png.freepik.com/512/9460/9460933.png?ga=GA1.1.656885783.1720841886" },
      { title: "Documents", src: "https://cdn-icons-png.freepik.com/512/9757/9757060.png?ga=GA1.1.656885783.1720841886" },
      { title: "Subscription ", src: "https://cdn-icons-png.freepik.com/512/3908/3908411.png?ga=GA1.1.656885783.1720841886" },
     
    ];
  return (
        <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white border border-black h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="https://cdn-icons-png.freepik.com/512/8642/8642981.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://cdn-icons-png.freepik.com/512/13958/13958047.png?ga=GA1.1.656885783.1720841886"
            className={`cursor-pointer duration-500 w-10 ${
              open && "rotate-[360deg]"
            }`} onClick={() => setOpen(!open)}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Recents
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`${Menu.src}`} className="w-10"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <ul className="bottom-5 fixed ">
      
            <li
              
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
               `}
            >
              <img src="https://cdn-icons-png.freepik.com/512/16069/16069712.png?ga=GA1.1.656885783.1720841886" className="w-10"/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Accounts
              </span>
            </li>
         
        </ul>
      </div>

    </div>
  )
}

export default Sidebar
import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { FaFolder, FaExternalLinkAlt, FaRobot, FaTextHeight, FaListUl, FaGlobe } from "react-icons/fa";

function SearchComponent({ search, setSearch, handleInputChange, handleSearch }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const textareaRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState({
    source: "List of folders",
    model: "GPT-4.0",
    responseLength: "Auto",
    responseType: "Paragraph",
    includeWebResults: "Yes",
  });
  const dropdownRefs = useRef({});

  const iconMap = {
    source: {
      "List of folders": <FaFolder className="mr-2" />, 
      "External Sources": <FaExternalLinkAlt className="mr-2" />,
    },
    model: {
      "GPT-4.0": <FaRobot className="mr-2" />, 
      "Claude 3.5": <FaRobot className="mr-2" />, 
      "o1-mini": <FaRobot className="mr-2" />, 
      "Gemini 1.5 Pro": <FaRobot className="mr-2" />, 
      "Llama 3.1 405B": <FaRobot className="mr-2" />,
    },
    responseLength: {
      "Auto": <FaTextHeight className="mr-2" />, 
      "Short": <FaTextHeight className="mr-2" />, 
      "Medium": <FaTextHeight className="mr-2" />, 
      "Large": <FaTextHeight className="mr-2" />,
    },
    responseType: {
      "Paragraph": <FaListUl className="mr-2" />, 
      "Pointers": <FaListUl className="mr-2" />, 
      "Summary": <FaListUl className="mr-2" />,
    },
    includeWebResults: {
      "Yes": <FaGlobe className="mr-2" />, 
      "No": <FaGlobe className="mr-2" />,
    },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!Object.values(dropdownRefs.current).some(ref => ref && ref.contains(event.target))) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
<div className="animated-border w-full max-w-6xl min-w-[700px] mx-auto flex flex-col items-center justify-between rounded-3xl  bg-white shadow-xl" style={{ position: 'sticky', bottom: 0 }}>
      <div className="relative flex items-center mb-4 w-full">
        <div className="absolute left-4 flex items-center">
          <MdAttachFile className="text-gray-500 mr-3 text-2xl" />
        </div>
        <textarea
          ref={textareaRef}
          className="rounded-t-3xl p-4 pl-16 pr-16 w-full text-[#14343B] text-md focus:outline-none resize-none overflow-y-auto"
          placeholder="Ask me anything..."
          value={search}
          onChange={handleInputChange}
        />
        <div className="absolute right-4 flex items-center">
          <IoSearch
            onClick={handleSearch}
            className={`text-gray-500 ml-3 text-2xl ${search.trim() === '' ? 'cursor-not-allowed text-gray-300' : 'cursor-pointer'}`}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center text-gray-600 mt-4">
        <div className="w-full flex justify-between bg-[#F9FAFB] p-3 rounded-b-3xl">
          {Object.keys(selectedOptions).map((type) => (
            <div
              key={type}
              className="relative flex-1 flex justify-center group"
              ref={el => dropdownRefs.current[type] = el}
              onMouseEnter={() => setDropdownOpen(type)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-black text-sm flex items-center gap-1">
                {iconMap[type][selectedOptions[type]]}
                {selectedOptions[type]} <BsChevronDown />
              </button>
              {dropdownOpen === type && (
                <div className="absolute bg-white shadow-lg rounded-xl p-2 w-[240px] mt-1 z-10 border border-gray-200">
                  <ul className="text-sm">
                    {Object.keys(iconMap[type]).map((option) => (
                      <li
                        key={option}
                        onClick={() => setSelectedOptions((prev) => ({ ...prev, [type]: option }))}
                        className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg flex items-center"
                      >
                        {iconMap[type][option]}{option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;

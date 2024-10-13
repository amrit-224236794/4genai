import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { FaGlobe, FaPen, FaBook, FaCalculator, FaVideo, FaComments } from "react-icons/fa"; // Add more icons

function Tsearch({ search, setSearch, handleInputChange, handleSearch }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const textareaRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState({
    source: "Web",
  });
  const adjustHeight = (element) => {
    element.style.height = 'auto';  // Reset height to auto to shrink if necessary
    element.style.height = `${element.scrollHeight}px`; // Set height to match content
  };

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelection = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      source: option,
    }));
    setDropdownOpen(false); // Close dropdown after selection
  };

  const dropdownStyle = "absolute bg-white shadow-md rounded-lg p-2 w-[240px] mt-2 z-10 border border-gray-200";
  const dropdownItemStyle = `cursor-pointer hover:bg-gray-100 p-2 rounded-lg flex items-center transition-all`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to auto to allow shrinking
      textarea.style.height = `${textarea.scrollHeight}px`; 
    }
  }, [search]);

  return (
    <div className="relative w-full max-w-6xl min-w-[700px] mx-auto flex flex-col items-center justify-between rounded-xl p-4 bg-white shadow-lg">
      {/* Search Bar */}
      <div className="relative flex items-center mb-4 w-full">
        <div className="absolute left-4 flex items-center">
          <MdAttachFile className="text-gray-500 mr-3 text-2xl" />
        </div>
        <textarea
          ref={textareaRef}
          className="rounded-xl p-4 pl-16 pr-16 w-full text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm resize-none overflow-y-auto"
          placeholder="Ask me anything..."
          value={search}
          onChange={handleInputChange}
          rows={1} 
        />
        <div className="absolute right-4 flex items-center">
          <IoSearch
            onClick={handleSearch}
            className={`text-gray-500 ml-3 text-2xl ${search.trim() === '' ? 'cursor-not-allowed text-gray-300' : 'cursor-pointer'}`}
          />
        </div>
      </div>

      {/* Dropdown for Search Options */}
      <div className="w-full relative flex flex-col items-center">
        <button onClick={toggleDropdown} className="text-gray-600 text-lg underline">
          {selectedOptions.source}
        </button>
        {dropdownOpen && (
          <div className={dropdownStyle} ref={dropdownRef}>
            <ul className="text-sm">
              <li
                onClick={() => handleSelection("Web")}
                className={dropdownItemStyle}
              >
                <FaGlobe className="mr-2" />
                <span>Web Search</span>
              </li>
              <li
                onClick={() => handleSelection("Writing")}
                className={dropdownItemStyle}
              >
                <FaPen className="mr-2" />
                <span>Writing Assistant</span>
              </li>
              <li
                onClick={() => handleSelection("Academic")}
                className={dropdownItemStyle}
              >
                <FaBook className="mr-2" />
                <span>Academic Papers</span>
              </li>
              <li
                onClick={() => handleSelection("Math")}
                className={dropdownItemStyle}
              >
                <FaCalculator className="mr-2" />
                <span>Math Solver</span>
              </li>
              <li
                onClick={() => handleSelection("Video")}
                className={dropdownItemStyle}
              >
                <FaVideo className="mr-2" />
                <span>Video Search</span>
              </li>
              <li
                onClick={() => handleSelection("Social")}
                className={dropdownItemStyle}
              >
                <FaComments className="mr-2" />
                <span>Social Search</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tsearch;



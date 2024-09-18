import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { FaRobot, FaRulerCombined, FaListAlt, FaGlobe } from "react-icons/fa";


function SearchComponent({ search, setSearch, handleInputChange, handleSearch }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    source: "List of folders",
    model: "4GenAI",
    responseLength: "Auto",
    responseType: "Paragraph",
    includeWebResults: "Yes",
  });

  const toggleDropdown = (type) => {
    setDropdownOpen(dropdownOpen === type ? null : type);
  };

  const handleSelection = (type, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: option,
    }));
    setDropdownOpen(null); // Close dropdown after selection
  };

  const iconStyle = "text-2xl text-gray-500 cursor-pointer hover:text-blue-500";
  const dropdownStyle = "absolute bg-white shadow-lg rounded-lg p-4 w-64 mt-2 z-10";



  return (
    <div className="w-full animated-border max-w-4xl mx-auto flex flex-col items-center justify-between rounded-3xl p-6 bg-white shadow-lg">
      {/* Search Bar */}
      <div className="relative flex items-center mb-6 w-full">
        <div className="absolute left-3 flex items-center">
          <MdAttachFile className="text-gray-500 mr-3 text-2xl" />
        </div>
        <input
          type="text"
          className="rounded-2xl p-4 pl-16 w-full text-[#14343B] text-lg"
          placeholder="Ask me anything..."
          value={search}
          onChange={handleInputChange}
        />
        <div className="absolute right-3 flex items-center">
          <IoSearch
            onClick={handleSearch}
            className={`text-gray-500 ml-3 text-2xl ${search.trim() === '' ? 'cursor-not-allowed text-gray-300' : 'cursor-pointer'}`}
            style={{ opacity: search.trim() === '' ? 0.5 : 1 }}
          />
        </div>
      </div>

      {/* Dropdown Menu for Filters */}
      <div className="w-full flex flex-wrap text-gray-600 mt-4 gap-8 justify-center">
        {/* Source Dropdown */}
        <div className="relative">
          <FaListAlt className={iconStyle} onClick={() => toggleDropdown("source")} />
          {dropdownOpen === "source" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Source</p>
              <ul className="text-sm space-y-1">
                <li
                  onClick={() => handleSelection("source", "List of folders")}
                  className={`cursor-pointer hover:bg-gray-200 p-2 rounded ${
                    selectedOptions.source === "List of folders" && "bg-blue-100 text-blue-600"
                  }`}
                >
                  List of folders
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Model Dropdown */}
        <div className="relative">
          <FaRobot className={iconStyle} onClick={() => toggleDropdown("model")} />
          {dropdownOpen === "model" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Model</p>
              <ul className="text-sm space-y-1">
                {["4GenAI", "Mistral", "Llama 70B", "GPT 3.5", "GPT 4.0"].map((model) => (
                  <li
                    key={model}
                    onClick={() => handleSelection("model", model)}
                    className={`cursor-pointer hover:bg-gray-200 p-2 rounded flex items-center ${
                      selectedOptions.model === model && "bg-blue-100 text-blue-600"
                    }`}
                  >
               
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Response Length Dropdown */}
        <div className="relative">
          <FaRulerCombined className={iconStyle} onClick={() => toggleDropdown("responseLength")} />
          {dropdownOpen === "responseLength" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Response Length</p>
              <ul className="text-sm space-y-1">
                {["Auto", "Short", "Medium", "Large"].map((length) => (
                  <li
                    key={length}
                    onClick={() => handleSelection("responseLength", length)}
                    className={`cursor-pointer hover:bg-gray-200 p-2 rounded ${
                      selectedOptions.responseLength === length && "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {length}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Response Type Dropdown */}
        <div className="relative">
          <FaListAlt className={iconStyle} onClick={() => toggleDropdown("responseType")} />
          {dropdownOpen === "responseType" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Response Type</p>
              <ul className="text-sm space-y-1">
                {["Paragraph", "Pointers", "Summary"].map((type) => (
                  <li
                    key={type}
                    onClick={() => handleSelection("responseType", type)}
                    className={`cursor-pointer hover:bg-gray-200 p-2 rounded ${
                      selectedOptions.responseType === type && "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Include Web Results Dropdown */}
        <div className="relative">
          <FaGlobe className={iconStyle} onClick={() => toggleDropdown("includeWebResults")} />
          {dropdownOpen === "includeWebResults" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Include Web Results</p>
              <ul className="text-sm space-y-1">
                {["Yes", "No"].map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelection("includeWebResults", option)}
                    className={`cursor-pointer hover:bg-gray-200 p-2 rounded ${
                      selectedOptions.includeWebResults === option && "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;

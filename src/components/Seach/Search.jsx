import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { GoDependabot } from "react-icons/go";
import { CiViewBoard } from "react-icons/ci";
import { PiTreeViewThin } from "react-icons/pi";
import { PiWebhooksLogoThin } from "react-icons/pi";

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
  const dropdownStyle = "absolute bg-white shadow-lg rounded-lg p-6 w-[300px] mt-2 z-10 border border-gray-200 transition-all transform ease-out duration-300";

  const dropdownItemStyle = `cursor-pointer hover:bg-gray-100 p-4 rounded-lg flex flex-col transition-all transform ease-out duration-200`;

  return (
    <div className="animated-border w-full max-w-6xl min-w-[800px] mx-auto flex flex-col items-center justify-between rounded-3xl p-6 bg-white shadow-lg">
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
      <div className="w-full flex justify-between text-gray-600 mt-4">
        {/* Source Dropdown */}
        <div className="relative flex-1 flex justify-center group">
          <GrResources className={iconStyle} onClick={() => toggleDropdown("source")} />
          {dropdownOpen === "source" && (
            <div className={dropdownStyle}>
              <p className="font-semibold text-gray-900 mb-4">Source</p>
              <ul className="text-sm">
                <li
                  onClick={() => handleSelection("source", "List of folders")}
                  className={dropdownItemStyle}
                >
                  <span className="font-bold text-gray-700">List of Folders</span>
                  <span className="text-gray-500 text-sm">Browse through your saved folders.</span>
                </li>
                <li
                  onClick={() => handleSelection("source", "External Sources")}
                  className={dropdownItemStyle}
                >
                  <span className="font-bold text-gray-700">External Sources</span>
                  <span className="text-gray-500 text-sm">Add external data sources.</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Model Dropdown */}
        <div className="relative flex-1 flex justify-center group">
          <GoDependabot className={iconStyle} onClick={() => toggleDropdown("model")} />
          {dropdownOpen === "model" && (
            <div className={dropdownStyle}>
              <p className="font-semibold text-gray-900 mb-4">Model</p>
              <ul className="text-sm">
                {["4GenAI", "Mistral", "Llama 70B", "GPT 3.5", "GPT 4.0"].map((model) => (
                  <li
                    key={model}
                    onClick={() => handleSelection("model", model)}
                    className={dropdownItemStyle}
                  >
                    <span className="font-bold text-gray-700">{model}</span>
                    <span className="text-gray-500 text-sm">Choose the AI model for processing.</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Response Length Dropdown */}
        <div className="relative flex-1 flex justify-center group">
          <CiViewBoard className={iconStyle} onClick={() => toggleDropdown("responseLength")} />
          {dropdownOpen === "responseLength" && (
            <div className={dropdownStyle}>
              <p className="font-semibold text-gray-900 mb-4">Response Length</p>
              <ul className="text-sm">
                {["Auto", "Short", "Medium", "Large"].map((length) => (
                  <li
                    key={length}
                    onClick={() => handleSelection("responseLength", length)}
                    className={dropdownItemStyle}
                  >
                    <span className="font-bold text-gray-700">{length}</span>
                    <span className="text-gray-500 text-sm">Set the length of the response output.</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Response Type Dropdown */}
        <div className="relative flex-1 flex justify-center group">
          <PiTreeViewThin className={iconStyle} onClick={() => toggleDropdown("responseType")} />
          {dropdownOpen === "responseType" && (
            <div className={dropdownStyle}>
              <p className="font-semibold text-gray-900 mb-4">Response Type</p>
              <ul className="text-sm">
                {["Paragraph", "Pointers", "Summary"].map((type) => (
                  <li
                    key={type}
                    onClick={() => handleSelection("responseType", type)}
                    className={dropdownItemStyle}
                  >
                    <span className="font-bold text-gray-700">{type}</span>
                    <span className="text-gray-500 text-sm">Select the format of the response.</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Include Web Results Dropdown */}
        <div className="relative flex-1 flex justify-center group">
          <PiWebhooksLogoThin className={iconStyle} onClick={() => toggleDropdown("includeWebResults")} />
          {dropdownOpen === "includeWebResults" && (
            <div className={dropdownStyle}>
              <p className="font-semibold text-gray-900 mb-4">Include Web Results</p>
              <ul className="text-sm">
                {["Yes", "No"].map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelection("includeWebResults", option)}
                    className={dropdownItemStyle}
                  >
                    <span className="font-bold text-gray-700">{option}</span>
                    <span className="text-gray-500 text-sm">Choose whether to include results from the web.</span>
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

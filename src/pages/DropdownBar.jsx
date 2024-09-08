import React, { useState } from "react";
import {
  FaFolder,
  FaRobot,
  FaRulerCombined,
  FaListAlt,
  FaGlobe,
  FaSearch,
  FaFileUpload,
} from "react-icons/fa";

const ModernDropdownBar = () => {
  const [activeTab, setActiveTab] = useState("web");
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
  const dropdownStyle = "absolute bg-white shadow-lg rounded-lg p-4 w-40 mt-2 z-10";

  return (
    <div className="w-full mt-52 max-w-lg mx-auto bg-white p-4 shadow-lg rounded-lg">
      {/* Tab Buttons */}
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-4 py-2 rounded-full text-sm ${
            activeTab === "web"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600"
          } hover:bg-blue-500`}
        >
          Web
        </button>
        <button
          onClick={() => setActiveTab("chat")}
          className={`px-4 py-2 rounded-full text-sm ${
            activeTab === "chat"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600"
          } hover:bg-blue-500`}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveTab("write")}
          className={`px-4 py-2 rounded-full text-sm ${
            activeTab === "write"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600"
          } hover:bg-blue-500`}
        >
          Write
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2 mb-4">
        <FaSearch className="text-gray-500 text-xl" />
        <input
          type="text"
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
          placeholder="Search..."
        />
      </div>

      {/* File Upload */}
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center cursor-pointer">
          <FaFileUpload className="text-gray-500 text-xl mr-2" />
          <input type="file" className="hidden" />
          <span className="text-sm">Upload File</span>
        </label>
      </div>

      {/* Icon Bar with Dropdowns */}
      <div className="flex justify-around relative">
        {/* Source */}
        <div className="relative">
          <FaFolder
            className={iconStyle}
            onClick={() => toggleDropdown("source")}
          />
          {dropdownOpen === "source" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Source</p>
              <ul className="text-sm space-y-1">
                <li
                  onClick={() => handleSelection("source", "List of folders")}
                  className={`cursor-pointer hover:bg-gray-200 p-1 rounded ${
                    selectedOptions.source === "List of folders" &&
                    "bg-blue-100 text-blue-600"
                  }`}
                >
                  List of folders
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Model */}
        <div className="relative">
          <FaRobot
            className={iconStyle}
            onClick={() => toggleDropdown("model")}
          />
          {dropdownOpen === "model" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Model</p>
              <ul className="text-sm space-y-1">
                {["4GenAI", "Mistral", "Llama 70B", "Wizard", "GPT 3.5", "GPT 4.0"].map((model) => (
                  <li
                    key={model}
                    onClick={() => handleSelection("model", model)}
                    className={`cursor-pointer hover:bg-gray-200 p-1 rounded ${
                      selectedOptions.model === model &&
                      "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Response Length */}
        <div className="relative">
          <FaRulerCombined
            className={iconStyle}
            onClick={() => toggleDropdown("responseLength")}
          />
          {dropdownOpen === "responseLength" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Response Length</p>
              <ul className="text-sm space-y-1">
                {["Auto", "Short", "Medium", "Large"].map((length) => (
                  <li
                    key={length}
                    onClick={() => handleSelection("responseLength", length)}
                    className={`cursor-pointer hover:bg-gray-200 p-1 rounded ${
                      selectedOptions.responseLength === length &&
                      "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {length}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Response Type */}
        <div className="relative">
          <FaListAlt
            className={iconStyle}
            onClick={() => toggleDropdown("responseType")}
          />
          {dropdownOpen === "responseType" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Response Type</p>
              <ul className="text-sm space-y-1">
                {["Paragraph", "Pointers", "Summary"].map((type) => (
                  <li
                    key={type}
                    onClick={() => handleSelection("responseType", type)}
                    className={`cursor-pointer hover:bg-gray-200 p-1 rounded ${
                      selectedOptions.responseType === type &&
                      "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Include Web Results */}
        <div className="relative">
          <FaGlobe
            className={iconStyle}
            onClick={() => toggleDropdown("includeWebResults")}
          />
          {dropdownOpen === "includeWebResults" && (
            <div className={dropdownStyle}>
              <p className="font-semibold mb-2">Include Web Results</p>
              <ul className="text-sm space-y-1">
                {["Yes", "No"].map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelection("includeWebResults", option)}
                    className={`cursor-pointer hover:bg-gray-200 p-1 rounded ${
                      selectedOptions.includeWebResults === option &&
                      "bg-blue-100 text-blue-600"
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
};

export default ModernDropdownBar;

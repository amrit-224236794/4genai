import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

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

  const adjustHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const toggleDropdown = (type) => {
    setDropdownOpen(dropdownOpen === type ? null : type);
  };

  const handleSelection = (type, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: option,
    }));
    setDropdownOpen(null);
  };

  const dropdownStyle = "absolute bg-white shadow-lg rounded-xl p-2 w-[240px] mt-1 z-10 border border-gray-200 transition-transform ease-out duration-300";
  const dropdownItemStyle = "cursor-pointer hover:bg-gray-100 p-2 rounded-lg flex flex-col transition-all transform ease-out duration-200";

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

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      if (search.length > 0) {
        const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);
        const newHeight = Math.min(
          lineHeight * 10,
          Math.max(lineHeight * 2, textarea.scrollHeight)
        );
        textarea.style.height = `${newHeight}px`;
      } else {
        textarea.style.height = 'auto';
      }
    }
  }, [search]);

  return (
    <div className="animated-border w-full max-w-6xl min-w-[700px] mx-auto flex flex-col items-center justify-between rounded-3xl  bg-white shadow-xl" style={{ position: 'sticky', bottom: 0 }}>
      {/* Search Bar */}
      <div className="relative flex items-center mb-4  w-full">
        <div className="absolute left-4 flex items-center">
          <MdAttachFile className="text-gray-500 mr-3 text-2xl" />
        </div>
        <textarea
          ref={textareaRef}
          className="rounded-t-3xl p-4 pl-16 pr-16 w-full text-[#14343B] text-md focus:outline-none  resize-none overflow-y-auto"
          placeholder="Ask me anything..."
          value={search}
          onChange={handleInputChange}
          rows={1}
          style={{ maxHeight: '200px', minHeight: '40px' }}
        />
        <div className="absolute right-4 flex items-center">
          <IoSearch
            onClick={handleSearch}
            className={`text-gray-500 ml-3 text-2xl ${search.trim() === '' ? 'cursor-not-allowed text-gray-300' : 'cursor-pointer'}`}
            style={{ opacity: search.trim() === '' ? 0.5 : 1 }}
          />
        </div>
      </div>

      {/* Dropdown Menu for Filters */}
      <div className="w-full flex flex-col items-center justify-between text-gray-600 mt-4">
        <div className="w-full flex justify-between bg-[#F9FAFB] p-3 rounded-b-3xl">
          {["source", "model", "responseLength", "responseType", "includeWebResults"].map((type, index) => (
            <div
              key={type}
              className="relative flex-1 flex justify-center group"
              ref={el => dropdownRefs.current[type] = el}
              onMouseEnter={() => setDropdownOpen(type)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                onClick={() => toggleDropdown(type)}
                className="text-black text-sm flex items-center gap-1"
              >
                {selectedOptions[type]} <BsChevronDown />
              </button>
              {(dropdownOpen === type) && (
                <div className={`${dropdownStyle} left-2`}>
                  <p className="font-semibold text-gray-900 mb-1 text-xs">{type.replace(/([A-Z])/g, ' $1')}</p>
                  <ul className="text-sm">
                    {(type === "source" ? ["List of folders", "External Sources"] :
                      type === "model" ? ["GPT-4.0", "Claude 3.5", "o1-mini", "Gemini 1.5 Pro", "Llama 3.1 405B"] :
                      type === "responseLength" ? ["Auto", "Short", "Medium", "Large"] :
                      type === "responseType" ? ["Paragraph", "Pointers", "Summary"] :
                      ["Yes", "No"]
                    ).map((option) => (
                      <li
                        key={option}
                        onClick={() => handleSelection(type, option)}
                        className={dropdownItemStyle}
                      >
                        <span className="font-bold text-gray-700">{option}</span>
                        <span className="text-gray-500 text-xs">
                          {type === "source" && "Browse through your saved folders or add external sources."}
                          {type === "model" && "Choose the AI model for processing."}
                          {type === "responseLength" && "Set the length of the response output."}
                          {type === "responseType" && "Select the format of the response."}
                          {type === "includeWebResults" && "Choose whether to include results from the web."}
                        </span>
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
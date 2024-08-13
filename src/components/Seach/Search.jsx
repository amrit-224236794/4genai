// SearchComponent.jsx
import React, { useState } from 'react';
import { IoArrowForwardOutline, IoSearch } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

function SearchComponent({ search, setSearch, handleInputChange, handleSearch, renderDropdowns, suggestions, handleSuggestionClick }) {
  return (
    <>
      <div className="relative animated-border bottom-0 flex flex-col items-center justify-between hover:cursor-pointer rounded-3xl p-4">
        <div className="w-full relative flex items-center">
          <div className="absolute left-3 flex items-center">
            <MdAttachFile className="text-gray-500 mr-2" />
          </div>
          <input
            type="text"
            className="rounded-2xl p-3 pl-12 w-full text-[#14343B]"
            placeholder="Ask me anything..."
            value={search}
            onChange={handleInputChange}
          />
          <div className="absolute right-3 flex items-center">
            <IoSearch
              onClick={handleSearch}
              className={`text-gray-500 ml-2 ${search.trim() === '' ? 'cursor-not-allowed text-gray-300' : 'cursor-pointer'}`}
              style={{ opacity: search.trim() === '' ? 0.5 : 1 }}
            />
          </div>
        </div>

        <div className="w-full flex flex-wrap text-gray-600 mt-2 gap-2">
          {renderDropdowns()}
        </div>
      </div>

     
    </>
  );
}

export default SearchComponent;

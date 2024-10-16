import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SearchComponent from '../components/Seach/Search';
const ChatWithPDFPage = () => {
    const [isChatVisible, setIsChatVisible] = useState(true);
    const [dividerPosition, setDividerPosition] = useState(66.6); // Initial percentage width for the PDF Viewer
    const [search, setSearch] = useState(''); // State for the search input
  
    const toggleChatVisibility = () => {
      setIsChatVisible(!isChatVisible);
    };
  
    const handleMouseDown = (e) => {
      e.preventDefault();
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const newDividerPosition = (e.clientX / windowWidth) * 100;
      if (newDividerPosition >= 33.4 && newDividerPosition <= 66.6) {
        setDividerPosition(newDividerPosition);
      }
    };
  
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  
    const handleInputChange = (e) => setSearch(e.target.value);
    const handleSearch = () => {
      if (search.trim()) {
        console.log('Searching for:', search);
        // Add search functionality here
      } 
    };
    const renderDropdowns = () => {
      
          return (
            <div className="flex flex-wrap gap-2">
              <select className="flex-1 border p-2 rounded-md">
                <option>Model – 4GenAI</option>
                <option>Mistral</option>
                <option>Llama 70B</option>
                <option>Wizard</option>
                <option>GPT 3.5</option>
                <option>GPT 4.0</option>
              </select>
              <select className="flex-1 border p-2 rounded-md">
                <option>Sources – All</option>
                <option>Academic</option>
                <option>Wikipedia</option>
                <option>Social media</option>
                <option>Maths</option>
                <option>Youtube</option>
                <option>Travel</option>
              </select>
              <select className="flex-1 border p-2 rounded-md">
                <option>Response length – Auto</option>
                <option>short</option>
                <option>medium</option>
                <option>large</option>
              </select>
              <select className="flex-1 border p-2 rounded-md">
                <option>Response type – Paragraph</option>
                <option>pointers</option>
                <option>summary</option>
              </select>
            </div>
          )
       
      
    };
  
    const handleSuggestionClick = (suggestion) => {
      setSearch(suggestion);
    };
  
    return (
      <div className="flex min-h-screen w-full">
        {/* PDF Viewer Section */}
        <div
          className="p-4 flex flex-col"
          style={{ width: `${isChatVisible ? dividerPosition : 100}%` }}
        >
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-bold text-[#14343B]">Chat with Documents</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleChatVisibility}
            >
              {isChatVisible ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          </div>
          {/* PDF content placeholder */}
          <div className="h-full flex items-center justify-center  rounded flex-grow">
            <span className="text-gray-500">Chat goes here</span>
          </div>
          {/* Move Search Component to the bottom of the PDF section */}
          <div className="mt-auto">
            <SearchComponent
              search={search}
              setSearch={setSearch}
              handleInputChange={handleInputChange}
              handleSearch={handleSearch}
              renderDropdowns={renderDropdowns}
              suggestions={[]} // Pass suggestions if any
              handleSuggestionClick={handleSuggestionClick}
            />
          </div>
        </div>
  
        {/* Divider */}
        {isChatVisible && (
          <div
            className="w-1 cursor-col-resize bg-gray-300"
            onMouseDown={handleMouseDown}
          />
        )}
  
        {/* Chat with PDF Section */}
        {isChatVisible && (
          <div
            className="p-4 flex flex-col"
            style={{ width: `${100 - dividerPosition}%` }}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold text-[#14343B]">PDF viewer</h2>
            </div>
            {/* Chat content placeholder */}
            <div className="flex-1 flex items-center justify-center border rounded mb-4">
              <span className="text-gray-500">Pdf goes here</span>
            </div>
          </div>
        )}
      </div>
    );
  };


export default ChatWithPDFPage;

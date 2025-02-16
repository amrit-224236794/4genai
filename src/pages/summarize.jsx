import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SearchComponent from '../components/Seach/Search';

const ChatWithPDFPage = () => {
    const [isChatVisible, setIsChatVisible] = useState(true);
    const [dividerPosition, setDividerPosition] = useState(66.6);
    const [search, setSearch] = useState('');
    const [messages, setMessages] = useState([
      { id: 1, text: "Hello! How can I assist you today?", sender: "AI" },
      { id: 2, text: "Can you summarize this document?", sender: "User" },
      { id: 3, text: "Sure! The document discusses the impact of AI on modern industries.", sender: "AI" },
  ]);

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

    const renderDropdowns = () => (
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
      </div>
    );

    return (
      <div className="flex min-h-screen w-full">
        <div className="p-4 flex flex-col" style={{ width: `${isChatVisible ? dividerPosition : 100}%` }}>
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-bold text-[#14343B]">Chat with Documents</h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={toggleChatVisibility}>
              {isChatVisible ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          </div>
          <div className="flex flex-col flex-grow space-y-4 overflow-y-auto p-2 border rounded-md h-96">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-3 rounded-lg max-w-xs ${msg.sender === "AI" ? "bg-gray-200 self-start" : "bg-blue-500 text-white self-end"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-auto">
            <SearchComponent search={search} setSearch={setSearch} renderDropdowns={renderDropdowns} suggestions={[]} />
          </div>
        </div>
        {isChatVisible && <div className="w-1 cursor-col-resize bg-gray-300" onMouseDown={handleMouseDown} />}
        {isChatVisible && (
          <div className="p-4 flex flex-col" style={{ width: `${100 - dividerPosition}%` }}>
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold text-[#14343B]">PDF viewer</h2>
            </div>
            <div className="flex-1 flex items-center justify-center border rounded mb-4">
              <span className="text-gray-500">Pdf goes here</span>
            </div>
          </div>
        )}
      </div>
    );
};

export default ChatWithPDFPage;

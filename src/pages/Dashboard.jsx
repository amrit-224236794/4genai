// Dashboard.jsx
import React, { useState } from 'react';
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import SearchComponent from "../components/Seach/Search"
import '../stylesheet/dashboard.css';

function Dashboard() {
  const [lists] = useState([
    { id: 4, title: 'Web', content: '', icon: <TbWorldWww /> },
    { id: 5, title: 'Chat with Documents', content: '', icon: <MdOutlineDocumentScanner /> },
    { id: 6, title: 'Write', content: '', icon: <TfiWrite /> }
  ]);

  const [activeTab, setActiveTab] = useState(4); // Set default tab to 'Web'
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState(['4Gen.AI?', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea']);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value) {
      setSuggestions(['Market size of longevity technology', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea'].filter(s => s.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions(['Market size of longevity technology', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea']);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    setActiveTab(1);
  };

  const renderDropdowns = () => {
    switch (activeTab) {
      case 4:
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
        );
      case 5:
        return (
          <div className="flex flex-wrap gap-2">
            <select className="flex-1 border p-2 rounded-md">
              <option>Source – List of folders</option>
            </select>
            <select className="flex-1 border p-2 rounded-md">
              <option>Model – 4GenAI</option>
              <option>Mistral</option>
              <option>Llama 70B</option>
              <option>Wizard</option>
              <option>GPT 3.5</option>
              <option>GPT 4.0</option>
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
            <select className="flex-1 border p-2 rounded-md">
              <option>Include web results – Yes</option>
              <option>No</option>
            </select>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-wrap gap-2">
            <select className="flex-1 border p-2 rounded-md">
              <option>What to write – Auto</option>
              <option>Email</option>
              <option>Message</option>
              <option>Comment</option>
              <option>Paragraph</option>
              <option>Article</option>
              <option>Blog post</option>
              <option>Ideas</option>
              <option>Outline</option>
              <option>Social media post</option>
            </select>
            <select className="flex-1 border p-2 rounded-md">
              <option>Tone of voice – Default</option>
              <option>Amicable</option>
              <option>casual</option>
              <option>friendly</option>
              <option>professional</option>
              <option>witty</option>
              <option>funny</option>
              <option>formal</option>
            </select>
            <select className="flex-1 border p-2 rounded-md">
              <option>Response length – Auto</option>
              <option>short</option>
              <option>medium</option>
              <option>large</option>
            </select>
            <select className="flex-1 border p-2 rounded-md">
              <option>Persona</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-36">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-semibold text-[#14343B]">For Everything Gen AI</h1>
        </div>
        <div className="container mx-auto p-4 mt-5">
          <div className="flex justify-center space-x-2 mb-6">
            {lists.map(list => (
              <div
                key={list.id}
                className={`cursor-pointer px-4 py-2 rounded-2xl flex items-center space-x-2 hover:cursor-pointer hover:bg-[#22808D] hover:text-white ${activeTab === list.id ? 'bg-[#22808D] text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveTab(list.id)}
              >
                {list.icon && list.icon}
                <span>{list.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Component */}
        <SearchComponent
          search={search}
          setSearch={setSearch}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          renderDropdowns={renderDropdowns}
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
      </div>
      
    </>
  );
}

export default Dashboard;

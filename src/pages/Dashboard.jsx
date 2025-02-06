// Dashboard.jsx
import React, { useState,useContext } from 'react';
import { TbWorldWww } from "react-icons/tb";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi"; // Example icon for search
import { AiOutlineCalendar } from "react-icons/ai"; // Example icon for upcoming events
import { FaLightbulb } from "react-icons/fa"; // Example icon for ideas
import { BiSave } from "react-icons/bi"; // Example icon for tax saving
import SearchComponent from "../components/Seach/Search";
import '../stylesheet/dashboard.css';
import Genaicontext from '../context/genaicontext';

function Dashboard() {
  const{setModel} = useContext(Genaicontext);
  const{model} = useContext(Genaicontext);
  const [lists] = useState([
    { id: 4, title: 'Web', content: '', icon: <TbWorldWww className="text-lg" /> },
    { id: 5, title: 'Chat with Documents', content: '', icon: <MdOutlineDocumentScanner className="text-lg" /> },
    { id: 6, title: 'Write', content: '', icon: <TfiWrite className="text-lg" /> }
  ]);

  const [activeTab, setActiveTab] = useState(4); // Set default tab to 'Web'
  const [search, setSearch] = useState('');
  
  // Updated suggestions with icons
  const suggestions = [
    { text: '4Gen.AI?', icon: <FiSearch className="inline text-lg" /> },
    { text: 'Upcoming Fests', icon: <AiOutlineCalendar className="inline text-lg" /> },
    { text: 'What is Gen AI?', icon: <FaLightbulb className="inline text-lg" /> },
    { text: 'Tax Saving Idea', icon: <BiSave className="inline text-lg" /> }
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion.text);
  };

  const handleSearch = () => {
    setActiveTab(1);
  };

  const renderDropdowns = () => {
    switch (activeTab) {
      case 4:
        return (
          <div className="flex flex-wrap gap-2">
            <select onChange={(e) => { setModel(e.target.value); console.log(e.target.value); }} className="flex-1 border p-2 rounded-md">
              <option >Model – 4GenAI</option>
              <option>Mistral <AiOutlineCalendar className="inline text-lg" /></option>
              <option>Llama 70B</option>
              <option>Wizard</option>
              <option>GPT 3.5</option>
              <option >GPT 4.0</option>
            </select>
            <select onChange={(e) => { setModel(e.target.value); console.log(e.target.value); }} className="flex-1 border p-2 rounded-md">
              <option>Sources – All</option>
              <option>Academic</option>
              <option>Wikipedia</option>
              <option>Social media</option>
              <option>Maths</option>
              <option>Youtube</option>
              <option>Travel</option>
            </select>
            <select onChange={(e) => { setModel(e.target.value); console.log(e.target.value); }} className="flex-1 border p-2 rounded-md">
              <option>Response length – Auto</option>
              <option>short</option>
              <option>medium</option>
              <option>large</option>
            </select>
            <select onChange={(e) => { setModel(e.target.value); console.log(e.target.value); }} className="flex-1 border p-2 rounded-md">
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
              <option >GPT 4.0</option>
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
      <div  className="mt-16">
        <div className='flex items-center justify-center'>
        <img src="https://i.postimg.cc/Cd3RyzfQ/collapse.png" alt="" className='w-20' />
        </div>
        <div className="mx-auto text-center flex items-center justify-center">

          <h1 className="text-3xl font-semibold text-[#14343B]">4 Everything Gen AI</h1>
        </div>
        <div className="container mx-auto p-4 mt-5">
          <div className="flex justify-center space-x-2 mb-6">
            {lists.map(list => (
              <div
                key={list.id}
                className={`cursor-pointer px-4 py-2 rounded-2xl flex items-center space-x-2 hover:cursor-pointer hover:bg-black hover:text-white ${activeTab === list.id ? 'bg-black text-white' : 'bg-gray-100'}`}
                onClick={() => setActiveTab(list.id)}
              >
                {/* Icon on the left */}
                {list.icon}
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
        />
        
        {/* Suggestions Container */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 gap-4">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="  border border-[] rounded-2xl p-4 cursor-pointer hover:bg-gray-100 hover:text-black transition flex items-center space-x-2"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {/* Icon for each suggestion */}
                {suggestion.icon}
                <span>{suggestion.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

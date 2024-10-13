import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { GrResources } from 'react-icons/gr';
import { RiWechatChannelsLine } from 'react-icons/ri';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import SearchComponent from '../components/Seach/Search';

function Web() {
  const [activeTab, setActiveTab] = useState(4);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(['4Gen.AI?', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea']);
  const [loading, setLoading] = useState(true);
  const [showSources, setShowSources] = useState(true);

  const query = "What is POS";
  const sources = ["Website 1", "Website 2", "Website 3", "Website 4"];
  const summaryPoints = [
    {
      title: "POS stands for Point of Sale",
      content: "POS is the place where a sales transaction occurs. It’s a system used by businesses to handle sales, process payments, and manage inventory."
    },
    {
      title: "System for Managing Sales Transactions",
      content: "A POS system includes both hardware and software designed to handle sales processes, ensuring smooth business operations."
    },
    {
      title: "Hardware and Software Integration",
      content: "POS systems combine hardware components with software to streamline operations, reduce errors, and improve efficiency."
    },
  
  ];
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSuggestions(value
      ? ['Market size of longevity technology', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea'].filter(s => s.toLowerCase().includes(value.toLowerCase()))
      : ['Market size of longevity technology', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea']);
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
          <div className="flex flex-wrap gap-4">
            {['Model', 'Sources', 'Response length', 'Response type'].map((item, index) => (
              <select key={index} className="border rounded-lg p-3 shadow-md">
                <option>{item} – Auto</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="flex flex-wrap gap-4">
            {['Source', 'Model', 'Response length', 'Response type', 'Include web results'].map((item, index) => (
              <select key={index} className="border rounded-lg p-3 shadow-md">
                <option>{item} – Auto</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            ))}
          </div>
        );
      case 6:
        return (
          <div className="flex flex-wrap gap-4">
            {['What to write', 'Tone of voice', 'Response length', 'Persona'].map((item, index) => (
              <select key={index} className="border rounded-lg p-3 shadow-md">
                <option>{item} – Auto</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full p-6">
        <div role="status" className="animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4 w-48"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-[360px]"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-[330px]"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px]"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8">
          {images.map((_, index) => (
            <div key={index} className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-lg shadow-lg">
              <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM8 14H4V8h4v6Zm8 0h-4V8h4v6Zm1-10H3V3h14v1Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-6 relative mt-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 lg:pr-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">{`Showing Results from "${query}"`}</h1>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold flex items-center text-gray-700">
                <GrResources className='mr-2 text-gray-600 text-2xl' />
                Sources
              </h2>
              <button onClick={() => setShowSources(!showSources)} className="text-gray-600 hover:text-gray-800">
                {showSources ? <FaArrowUp className="text-lg" /> : <FaArrowDown className="text-lg" />}
              </button>
            </div>
            {showSources && (
              <div className="flex flex-wrap gap-4">
                {sources.map((source, index) => (
                  <div key={index} className="border p-4 bg-gray-50 rounded-lg shadow-lg relative w-full md:w-1/4">
                    <p className="text-lg font-medium">{source}</p>
                    <span className="absolute bottom-2 right-2 bg-gray-100 text-[#0957D0] p-2 rounded-full text-sm">{index + 1}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700">
              <RiWechatChannelsLine className='mr-2 text-gray-600 text-2xl' />
              Answers
            </h2>
            <ul className="list-disc pl-5 space-y-4">
              {summaryPoints.map((point, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.content}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} className="rounded-lg shadow-lg"/>
            ))}
          </div>
          <button className="bg-[#0957D0] text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-[#1d6a7f] transition-colors">
            <AiOutlinePlus className="mr-2" />
            Generate More
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 pt-6 mt-20  ">
        <SearchComponent
          search={search}
          renderDropdowns={renderDropdowns}
          onSearch={handleSearch}
          onInputChange={handleInputChange}
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      </div>
    </div>
  );
}

export default Web;

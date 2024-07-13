import React, { useState } from 'react';

function Dashboard() {
  const [tabs] = useState([
    { id: 1, title: 'Tab 1', content: '' },
    { id: 2, title: 'Tab 2', content: '' },
    { id: 3, title: 'Tab 3', content: '' }
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    const newTabs = [...tabs];
    const activeTabIndex = newTabs.findIndex(tab => tab.id === activeTab);
    newTabs[activeTabIndex].content = searchTerm; // Simulate search result
    setTabs(newTabs);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Simulate fetching suggestions
    if (value) {
      setSuggestions(['Suggestion 1', 'Suggestion 2', 'Suggestion 3'].filter(s => s.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative mb-4">
        <input
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm && (
          <button
            className="absolute right-2 top-2 text-gray-500"
            onClick={clearSearch}
          >
            x
          </button>
        )}
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border rounded w-48 mt-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <button
          className="bg-black text-white rounded p-2 mt-2 w-full"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex space-x-2 border-b">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`cursor-pointer px-4 py-2 flex-1 text-center ${activeTab === tab.id ? 'bg-gray-200' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 border rounded">
        {tabs.find(tab => tab.id === activeTab)?.content || 'No content'}
      </div>
    </div>
  );
}

export default Dashboard;

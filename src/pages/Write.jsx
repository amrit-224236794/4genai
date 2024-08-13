import React, { useState } from 'react';
import { FaBold, FaItalic, FaUnderline, FaSave, FaTrash, FaRobot } from 'react-icons/fa';

const DocumentEditorPage = () => {
  const [content, setContent] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState([
    'List down monthly budget cuts.',
    'Consider breaking up long paragraphs for better readability.'
  ]);

  const handleContentChange = (e) => {
    setContent(e.target.innerText);
  };

  const handleSave = () => {
    // Implement save functionality
    alert('Document saved!');
  };

  const handleClear = () => {
    setContent('');
  };

  const handleAiSuggestions = () => {
    // Simulate getting new AI suggestions
    setAiSuggestions([...aiSuggestions, 'Try adding examples to support your points.']);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <header className="flex justify-between items-center p-4  text-Black">
        <h1 className="text-2xl font-semibold text-[#14343B]">Document Editor</h1>
   
      </header>

      {/* Editor and AI Suggestions */}
      <main className="flex-1 flex">
        {/* Editor Section */}
        <div className="flex-1 bg-white p-4 border-r border-gray-300">
          <div className="flex items-center mb-4 space-x-2">
            <button className="p-2 border rounded hover:bg-gray-200">
              <FaBold />
            </button>
            <button className="p-2 border rounded hover:bg-gray-200">
              <FaItalic />
            </button>
            <button className="p-2 border rounded hover:bg-gray-200">
              <FaUnderline />
            </button>
       
          </div>
          <div
            contentEditable
            className="h-full p-4 border rounded bg-white"
            onInput={handleContentChange}
          >
            {content}
          </div>
        </div>

        {/* AI Suggestions Section */}
        <div className="w-1/3 p-4 bg-[#F3F3ED] border-l border-gray-300">
          <h2 className="text-xl font-semibold mb-4">AI Suggestions</h2>
          <button
            onClick={handleAiSuggestions}
            className="bg-[#22808D] text-white px-4 py-2 rounded mb-4 flex items-center"
          >
            <FaRobot className="mr-2" /> Get Suggestions
          </button>
          <ul>
            {aiSuggestions.map((suggestion, index) => (
              <li key={index} className="mb-2 p-2 bg-white border rounded">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default DocumentEditorPage;

import React, { useState,useRef,useEffect } from 'react';

const DocumentEditorPage = () => {
  const [content, setContent] = useState('');
  const [selectedOption, setSelectedOption] = useState('compose');
  const indicatorRef = useRef(null);
  const optionRefs = {
    compose: useRef(null),
    reply: useRef(null),
    grammar: useRef(null),
  };
  
  
  const [selectedButtons, setSelectedButtons] = useState({
    write: null,
    tone: null,
    length: null,
    persona: null,
  });

  const handleContentChange = (e) => {
    setContent(e.target.innerText);
  };



  const handleButtonClick = (category, value) => {
    setSelectedButtons((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };
  const handleOptionClick = (option) => {
  setSelectedOption(option);
};

useEffect(() => {
  const selectedOptionRef = optionRefs[selectedOption].current;
  if (selectedOptionRef && indicatorRef.current) {
    indicatorRef.current.style.width = `${selectedOptionRef.offsetWidth}px`;
    indicatorRef.current.style.left = `${selectedOptionRef.offsetLeft}px`;
  }
}, [selectedOption]);

  return (
    <div className="flex mt-10 w-full">
      {/* Right side: Search Bar and Options */}
      <div className="w-1/2 p-4">
      <h2 className="text-2xl font-semibold mb-4">4 Creative Gen AI</h2>
        {/* Top Options */}
        <div className="relative flex gap-2 mb-4">
  <div
    ref={indicatorRef}
    className="absolute bottom-0 h-1 bg-black transition-all duration-300 ease-in-out"
  />
  <button
    ref={optionRefs.compose}
    className={`p-2 border-b-2 ${selectedOption === 'compose' ? 'text-black font-semibold' : 'text-gray-600'}`}
    onClick={() => handleOptionClick('compose')}
  >
    Compose
  </button>
  <button
    ref={optionRefs.reply}
    className={`p-2 border-b-2 ${selectedOption === 'reply' ? 'text-black font-semibold' : 'text-gray-600'}`}
    onClick={() => handleOptionClick('reply')}
  >
    Reply
  </button>
  <button
    ref={optionRefs.grammar}
    className={`p-2 border-b-2 ${selectedOption === 'grammar' ? 'text-black font-semibold' : 'text-gray-600'}`}
    onClick={() => handleOptionClick('grammar')}
  >
    Grammar
  </button>
</div>

        {/* Conditional Render based on selectedOption */}
        {selectedOption === 'compose' && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Compose</h2>
            <input
              type="text"
              className="w-full p-3 mb-4 border rounded-2xl"
              placeholder="Ask me anything..."
            />
            {/* Options */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">What to write</h3>
              <div className="flex flex-wrap gap-2">
                {['Email', 'Message', 'Comment', 'Paragraph', 'Article', 'Blog post', 'Ideas', 'Outline', 'Social media post'].map((option) => (
                  <button
                    key={option}
                    className={`p-2 border rounded-xl ${selectedButtons.write === option ? 'bg-[#dde5f0] text-[#0957D0]' : ''}`}
                    onClick={() => handleButtonClick('write', option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Tone of Voice</h3>
              <div className="flex flex-wrap gap-2">
                {['Default', 'Amicable', 'Casual', 'Friendly', 'Professional', 'Witty', 'Funny', 'Formal'].map((option) => (
                  <button
                    key={option}
                    className={`p-2 border rounded-xl ${selectedButtons.tone === option ? 'bg-[#dde5f0] text-[#0957D0]' : ''}`}
                    onClick={() => handleButtonClick('tone', option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Response Length</h3>
              <div className="flex flex-wrap gap-2">
                {['Short', 'Medium', 'Large'].map((option) => (
                  <button
                    key={option}
                    className={`p-2 border rounded-xl ${selectedButtons.length === option ? 'bg-[#dde5f0] text-[#0957D0]' : ''}`}
                    onClick={() => handleButtonClick('length', option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Persona</h3>
              <div className="flex flex-wrap gap-2">
                {['Persona 1', 'Persona 2', 'Persona 3'].map((option) => (
                  <button
                    key={option}
                    className={`p-2 border rounded-xl ${selectedButtons.persona === option ? 'bg-[#dde5f0] text-[#0957D0]' : ''}`}
                    onClick={() => handleButtonClick('persona', option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {selectedOption === 'reply' && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Reply</h2>
            <textarea
              
              className="w-full p-3 h-40 mb-4 border rounded-3xl"
              placeholder="Original text"
            />
            <textarea
              className="w-full p-3 h-40 mb-4 border rounded-3xl"
              placeholder="What to reply"
            />
          </>
        )}

        {selectedOption === 'grammar' && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Grammar Check</h2>
            <textarea
              className="w-full p-3 mb-4 border rounded-3xl h-96"
              placeholder="Paste your document text here..."
            ></textarea>
          </>
        )}
      </div>

      {/* Left side: Writing Section */}
      <div className="w-1/2 p-4 bg-white border-r rounded-6xl border-gray-300">
       
        <div
          contentEditable
          className="h-full p-4 border rounded-3xl bg-[#F9FAFB]"
          onInput={handleContentChange} 
        >
          Preview
          {content}
        </div>
      </div>
    </div>
  );
};

export default DocumentEditorPage;

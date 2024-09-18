import React, { useState } from 'react';

const PersonaPage = () => {
  const [personas, setPersonas] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedSources, setSelectedSources] = useState('');
  const [selectedLength, setSelectedLength] = useState('');
  const [selectedResponseType, setSelectedResponseType] = useState('');
  const [editingPersonaIndex, setEditingPersonaIndex] = useState(null);

  const models = ['4GenAI', 'Mistral', 'Llama 70B', 'Wizard', 'GPT 3.5', 'GPT 4.0'];
  const sources = ['All', 'Academic', 'Wikipedia', 'Social media', 'Maths', 'YouTube', 'Travel'];
  const lengths = ['Auto', 'Short', 'Medium', 'Large'];
  const responseTypes = ['Paragraph', 'Pointers', 'Summary'];

  const handleCreateOrUpdatePersona = () => {
    const newPersona = {
      name: selectedName,
      prompt: selectedPrompt,
      model: selectedModel,
      sources: selectedSources,
      length: selectedLength,
      responseType: selectedResponseType,
    };

    if (editingPersonaIndex !== null) {
      const updatedPersonas = [...personas];
      updatedPersonas[editingPersonaIndex] = newPersona;
      setPersonas(updatedPersonas);
      setEditingPersonaIndex(null);
    } else {
      setPersonas((prev) => [...prev, newPersona]);
    }

    setSelectedName('');
    setSelectedPrompt('');
    setSelectedModel('');
    setSelectedSources('');
    setSelectedLength('');
    setSelectedResponseType('');
  };

  const handlePersonaClick = (index) => {
    setEditingPersonaIndex(index);
    const selectedPersona = personas[index];
    setSelectedName(selectedPersona.name);
    setSelectedPrompt(selectedPersona.prompt);
    setSelectedModel(selectedPersona.model);
    setSelectedSources(selectedPersona.sources);
    setSelectedLength(selectedPersona.length);
    setSelectedResponseType(selectedPersona.responseType);
    document.getElementById('optionsSection').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDeletePersona = (index) => {
    setPersonas((prev) => prev.filter((_, i) => i !== index));
    if (editingPersonaIndex === index) {
      setEditingPersonaIndex(null);
      setSelectedName('');
      setSelectedPrompt('');
      setSelectedModel('');
      setSelectedSources('');
      setSelectedLength('');
      setSelectedResponseType('');
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col lg:flex-row">
      {personas.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">No Personas Created</h2>
          <button
            onClick={() => document.getElementById('optionsSection').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#22808D] text-white px-6 py-3 rounded-lg hover:bg-[#1b6775] transition"
          >
            Create Your First Persona
          </button>
        </div>
      ) : (
        <div className="flex-1 lg:mr-4 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Manage Personas</h2>
          <ul className="list-none p-0">
            {personas.map((persona, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-4 border rounded-lg mb-4 shadow-md cursor-pointer ${
                  editingPersonaIndex === index ? 'bg-[#22808D] text-white' : 'bg-white text-gray-800 hover:shadow-lg'
                }`}
                onClick={() => handlePersonaClick(index)}
              >
                <span className="font-semibold">Persona {index + 1}</span>
                <button
                  onClick={(e) => { e.stopPropagation(); handleDeletePersona(index); }}
                  className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Options Section */}
      <div id="optionsSection" className="flex-1">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h3 className="text-2xl font-semibold mb-6">
            {personas.length === 0 ? 'Create Your First Persona' : 'Create or Edit Persona'}
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Persona Name</h4>
            <input
              type="text"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Prompt</h4>
            <textarea
              value={selectedPrompt}
              onChange={(e) => setSelectedPrompt(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full h-32"
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Select Model</h4>
            <div className="flex flex-wrap gap-3">
              {models.map((model) => (
                <button
                  key={model}
                  className={`px-4 py-2 border rounded-lg text-gray-700 transition ${
                    selectedModel === model ? 'bg-[#22808D] text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedModel(model)}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Select Sources</h4>
            <div className="flex flex-wrap gap-3">
              {sources.map((source) => (
                <button
                  key={source}
                  className={`px-4 py-2 border rounded-lg text-gray-700 transition ${
                    selectedSources === source ? 'bg-[#22808D] text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedSources(source)}
                >
                  {source}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Select Response Length</h4>
            <div className="flex flex-wrap gap-3">
              {lengths.map((length) => (
                <button
                  key={length}
                  className={`px-4 py-2 border rounded-lg text-gray-700 transition ${
                    selectedLength === length ? 'bg-[#22808D] text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedLength(length)}
                >
                  {length}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Select Response Type</h4>
            <div className="flex flex-wrap gap-3">
              {responseTypes.map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 border rounded-lg text-gray-700 transition ${
                    selectedResponseType === type ? 'bg-[#22808D] text-white' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedResponseType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCreateOrUpdatePersona}
            className="bg-[#22808D] text-white px-6 py-3 rounded-lg hover:bg-[#1b6775] transition w-full text-lg"
          >
            {editingPersonaIndex !== null ? 'Update Persona' : 'Create Persona'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonaPage;

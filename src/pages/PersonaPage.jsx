import React, { useState } from 'react';

const PersonaPage = () => {
  const [personas, setPersonas] = useState([]);
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

    setSelectedModel('');
    setSelectedSources('');
    setSelectedLength('');
    setSelectedResponseType('');
  };

  const handleCardClick = (index) => {
    setEditingPersonaIndex(index);
    const selectedPersona = personas[index];
    setSelectedModel(selectedPersona.model);
    setSelectedSources(selectedPersona.sources);
    setSelectedLength(selectedPersona.length);
    setSelectedResponseType(selectedPersona.responseType);
  };

  const handleDeletePersona = (index) => {
    setPersonas((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen  p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Manage Personas</h2>

      {personas.length === 0 ? (
        <div className="text-xl text-gray-500 mb-6">
          No personas created yet. Create your first persona!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-6">
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-md transition-all cursor-pointer ${
                editingPersonaIndex === index
                  ? 'bg-[#22808D] text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:shadow-lg'
              }`}
              onClick={() => handleCardClick(index)}
            >
              <h3 className="font-semibold text-xl mb-4">Persona {index + 1}</h3>
              <p className="mb-2">Model: <span className="font-medium">{persona.model}</span></p>
              <p className="mb-2">Sources: <span className="font-medium">{persona.sources}</span></p>
              <p className="mb-2">Response Length: <span className="font-medium">{persona.length}</span></p>
              <p className="mb-4">Response Type: <span className="font-medium">{persona.responseType}</span></p>
              <div className="flex gap-4">
                <button
                  onClick={(e) => { e.stopPropagation(); handleCardClick(index); }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleDeletePersona(index); }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h3 className="text-2xl font-semibold mb-6">Create or Edit Persona</h3>
        
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
  );
};

export default PersonaPage;

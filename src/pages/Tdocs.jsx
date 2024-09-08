import React, { useState } from 'react';
import { FaFolder, FaFileAlt, FaPlus, FaTrash, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { RiChatSmile3Fill } from 'react-icons/ri';

const Tdocs = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Default Folder', documents: ['Doc1', 'Doc2'] }
  ]);
  const [selectedFolder, setSelectedFolder] = useState(folders[0].id);
  const [newFolderName, setNewFolderName] = useState('');
  const [chatMessages, setChatMessages] = useState({});
  
  const addFolder = () => {
    const newFolder = {
      id: folders.length + 1,
      name: newFolderName,
      documents: []
    };
    setFolders([...folders, newFolder]);
    setNewFolderName('');
  };
  
  const deleteFolder = (folderId) => {
    const updatedFolders = folders.filter(folder => folder.id !== folderId);
    setFolders(updatedFolders);
  };
  
  const moveDocument = (doc, targetFolderId) => {
    setFolders(prevFolders =>
      prevFolders.map(folder => {
        if (folder.id === selectedFolder) {
          return {
            ...folder,
            documents: folder.documents.filter(d => d !== doc)
          };
        } else if (folder.id === targetFolderId) {
          return { ...folder, documents: [...folder.documents, doc] };
        }
        return folder;
      })
    );
  };
  
  const addChatMessage = (doc, message) => {
    setChatMessages(prevMessages => ({
      ...prevMessages,
      [doc]: [...(prevMessages[doc] || []), message]
    }));
  };

  return (
    <div className="document-manager flex min-h-screen w-full p-6">
      {/* Folder Sidebar */}
      <div className="folders w-1/4  p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4"><FaFolder /> Folders</h2>
        <ul className="mb-4 space-y-2">
          {folders.map(folder => (
            <li key={folder.id} className="flex items-center justify-between bg-white p-3 rounded-md shadow">
              <span className="flex items-center gap-2">
                <FaFolder className="text-yellow-500" /> {folder.name}
              </span>
              <div className="flex gap-2">
                <button className="text-blue-500" onClick={() => setSelectedFolder(folder.id)}>Open</button>
                <button className="text-red-500" onClick={() => deleteFolder(folder.id)}><FaTrash /></button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            value={newFolderName} 
            onChange={(e) => setNewFolderName(e.target.value)} 
            placeholder="New folder name" 
            className="p-2 rounded-md border border-gray-300 w-full"
          />
          <button 
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            onClick={addFolder}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Document List */}
      <div className="documents w-2/4  p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4"><FaFileAlt /> Documents</h2>
        <ul className="mb-4 space-y-2">
          {folders.find(f => f.id === selectedFolder)?.documents.map(doc => (
            <li key={doc} className="flex items-center justify-between bg-white p-3 rounded-md shadow">
              <span className="flex items-center gap-2">
                <HiOutlineDocumentAdd className="text-blue-500" /> {doc}
              </span>
              <div className="flex gap-2">
                <button 
                  className="text-blue-500" 
                  onClick={() => moveDocument(doc, 1)}
                >
                  Move to Default
                </button>
                <button 
                  className="text-green-500" 
                  onClick={() => addChatMessage(doc, prompt('Chat Message'))}
                >
                  <RiChatSmile3Fill />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Section */}
      <div className="chat w-1/4 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4"><RiChatSmile3Fill /> Chat</h2>
        {Object.keys(chatMessages).map(doc => (
          <div key={doc} className="mb-4 bg-white p-3 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-2">{doc}</h3>
            <ul className="space-y-1">
              {chatMessages[doc].map((msg, index) => (
                <li key={index} className="text-sm bg-gray-100 p-2 rounded">{msg}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tdocs;

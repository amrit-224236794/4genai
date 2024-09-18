import React, { useState } from 'react';
import { FaFolder, FaFileAlt, FaPlus, FaTrash, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { RiChatSmile3Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
const Tdocs = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Default Folder', documents: ['Doc1', 'Doc2'], subfolders: [] }
  ]);
  const [selectedFolder, setSelectedFolder] = useState(folders[0].id);
  const [newFolderName, setNewFolderName] = useState('');
  const [chatMessages, setChatMessages] = useState({});
  const [dragging, setDragging] = useState(false);

  const addFolder = (parentFolderId = null) => {
    const newFolder = {
      id: folders.length + 1,
      name: newFolderName,
      documents: [],
      subfolders: []
    };
    
    if (parentFolderId) {
      setFolders(prevFolders =>
        prevFolders.map(folder =>
          folder.id === parentFolderId
            ? { ...folder, subfolders: [...folder.subfolders, newFolder] }
            : folder
        )
      );
    } else {
      setFolders([...folders, newFolder]); // Add at the root level
    }
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

  const addChatMessage = (entity, message, isFolder) => {
    setChatMessages(prevMessages => ({
      ...prevMessages,
      [entity]: [...(prevMessages[entity] || []), message]
    }));
  };

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/docr'); // Use the navigate function to change the route
  };


  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e, folderId) => {
    e.preventDefault();
    const fileName = e.dataTransfer.files[0].name;
    setFolders(prevFolders =>
      prevFolders.map(folder =>
        folder.id === folderId
          ? { ...folder, documents: [...folder.documents, fileName] }
          : folder
      )
    );
    setDragging(false);
  };

  return (
    <div className="document-manager flex min-h-screen w-full p-6">
      {/* Folder Sidebar */}
      <div className="folders w-1/2  p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-700 mb-4"><FaFolder /> Folders</h2>
        <ul className="mb-4 space-y-2">
          {folders.map(folder => (
            <li key={folder.id} className="flex items-center justify-between bg-white p-3 rounded-md shadow">
              <span
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setSelectedFolder(folder.id)}
              >
                <FaFolder className="text-[#1a6974]" /> {folder.name}
              </span>
              <div className="flex gap-2">
                <button className="text-red-500" onClick={() => deleteFolder(folder.id)}><FaTrash /></button>
                <button
                  className="text-[#22808D]"
                  onClick={()=>navigate('/docr')}
                >
                  <RiChatSmile3Fill /> 
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add New Root Folder */}
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="New folder name"
            className="p-2 rounded-md border border-gray-300 w-full"
          />
          <button
            className="bg-[#22808D] text-white p-2 rounded-md hover:bg-[#1a6974]"
            onClick={() => addFolder(null)}
          >
            <FaPlus /> 
          </button>
        </div>
      </div>

      {/* Document List and Folder Contents */}
      <div className="documents w-1/2 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-gray-700"><FaFileAlt /> Documents & Subfolders</h2>

        {/* Subfolders */}
        <ul className="mb-4 space-y-2">
          {folders.find(f => f.id === selectedFolder)?.subfolders.map(subfolder => (
            <li key={subfolder.id} className="flex items-center justify-between bg-white p-3 rounded-md shadow">
              <span
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setSelectedFolder(subfolder.id)}
              >
                <FaFolder className="text-[#1a6974]" /> {subfolder.name}
              </span>
              <div className="flex gap-2">
                <button className="text-red-500" onClick={() => deleteFolder(subfolder.id)}><FaTrash /></button>
                <button
                  className="text-green-500"
                  onClick={() => addChatMessage(subfolder.id, prompt('Chat Message for Subfolder'), true)}
                >
                  <RiChatSmile3Fill /> Chat
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add Subfolder */}
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="New subfolder name"
            className="p-2 rounded-md border border-gray-300 w-full"
          />
          <button
            className="bg-[#22808D] text-white p-2 rounded-md hover:bg-[#1a6974]"
            onClick={() => addFolder(selectedFolder)}
          >
            <FaPlus /> 
          </button>
        </div>

        {/* Documents */}
        <ul className="mb-4 space-y-2">
          {folders.find(f => f.id === selectedFolder)?.documents.map(doc => (
            <li key={doc} className="flex items-center justify-between bg-white p-3 rounded-md shadow">
              <span className="flex items-center gap-2">
                <HiOutlineDocumentAdd className="text-blue-500" /> {doc}
              </span>
              <div className="flex gap-2">
                <select
                  className="border rounded-md p-2"
                  onChange={(e) => moveDocument(doc, parseInt(e.target.value))}
                >
                  <option value="">Move to...</option>
                  {folders.map(folder => (
                    <option key={folder.id} value={folder.id}>{folder.name}</option>
                  ))}
                </select>
                <button
                  className="text-[#22808D]"
                  onClick={handleClick}
                >
                  <RiChatSmile3Fill />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Drag and Drop File Upload */}
        <div
          className={`p-4 border-2 ${dragging ? 'border-green-500' : 'border-gray-300'} rounded-lg`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, selectedFolder)}
        >
          <p className="text-center">{dragging ? 'Drop your file here' : 'Drag & Drop files here'}</p>
        </div>
      </div>
    </div>
  );
};

export default Tdocs;

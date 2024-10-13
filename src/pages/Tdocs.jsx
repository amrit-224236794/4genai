import React, { useState } from 'react';
import { FaPlus, FaFilePdf, FaEllipsisV, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Tdocs = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Default Folder', documents: [
      { name: 'Student Athlete Resume.Pdf', size: '94.24 KB', dateCreated: '4 months ago' }
    ] }
  ]);
  const [expandedFolderId, setExpandedFolderId] = useState(null);
  const [newFolderName, setNewFolderName] = useState('');
  const [newDocumentName, setNewDocumentName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addFolder = () => {
    if (newFolderName) {
      setFolders([...folders, { id: folders.length + 1, name: newFolderName, documents: [] }]);
      setNewFolderName('');
    }
  };

  const toggleFolder = (folderId) => {
    setExpandedFolderId(expandedFolderId === folderId ? null : folderId);
  };

  const filteredFolders = folders.filter(folder =>
    folder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    folder.documents.some(doc => doc.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen w-full flex flex-col p-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Document Library</h1>
          <p className="text-gray-500">View all your uploaded documents here</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Folder Name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            className="border rounded p-2 w-64 shadow-sm"
          />
          <button onClick={addFolder} className="bg-white border px-4 py-2 rounded-lg flex items-center shadow-sm hover:shadow-md transition">
            Create folder
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center shadow-lg hover:bg-gray-800 transition">
            <FaPlus className="mr-2" /> Upload
          </button>
        </div>
      </header>
      
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 w-64 shadow-sm"
        />
        <select className="border rounded p-2 shadow-sm">
          <option>All Folders</option>
          {folders.map(folder => (
            <option key={folder.id}>{folder.name}</option>
          ))}
        </select>
        <select className="border rounded p-2 shadow-sm">
          <option>File type</option>
          <option>PDF</option>
          <option>Word Document</option>
        </select>
        <select className="border rounded p-2 shadow-sm">
          <option>Date range</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>

      <main className="flex-1">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {filteredFolders.map(folder => (
            <div key={folder.id} className="mb-4">
              <div className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer" onClick={() => toggleFolder(folder.id)}>
                <div className="flex items-center">
                  {expandedFolderId === folder.id ? <FaChevronUp /> : <FaChevronDown />}
                  <span className="ml-2 font-semibold text-gray-900">{folder.name}</span>
                </div>
              </div>
              {expandedFolderId === folder.id && (
                <div>
                  <div className="flex justify-between items-center p-4 bg-gray-50">
                    <span className="font-semibold">File Name</span>
                    <span className="font-semibold">Size</span>
                    <span className="font-semibold">Date Created</span>
                    <span className="font-semibold"></span>
                  </div>
                  {folder.documents.length > 0 ? (
                    folder.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 border-t border-gray-200"
                      >
                        <div className="flex items-center">
                          <FaFilePdf className="text-red-600 mr-2" />
                          <span className="text-gray-900">{doc.name}</span>
                        </div>
                        <span className="text-gray-700">{doc.size}</span>
                        <span className="text-gray-700">{doc.dateCreated}</span>
                        <button className="text-gray-600 hover:text-gray-800">
                          <FaEllipsisV />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-gray-500">No documents available in this folder.</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tdocs;
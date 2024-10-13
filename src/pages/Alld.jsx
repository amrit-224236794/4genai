import React, { useState } from 'react';
import { FaPlus, FaFolder, FaChevronDown, FaChevronUp, FaComments, FaTrash, FaEllipsisV, FaEdit } from 'react-icons/fa';

const DocumentManager = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Default Folder', documents: ['Document 1', 'Document 2'] },
    { id: 2, name: 'Another Folder', documents: [] }
  ]);
  const [expandedFolderId, setExpandedFolderId] = useState(null);
  const [newFolderName, setNewFolderName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [editingFolderId, setEditingFolderId] = useState(null);
  const [editFolderName, setEditFolderName] = useState('');

  const addFolder = () => {
    if (newFolderName) {
      setFolders([...folders, { id: folders.length + 1, name: newFolderName, documents: [] }]);
      setNewFolderName('');
    }
  };

  const deleteDocument = (folderId, docName) => {
    setFolders(
      folders.map(folder =>
        folder.id === folderId
          ? { ...folder, documents: folder.documents.filter(doc => doc !== docName) }
          : folder
      )
    );
  };

  const moveDocument = (docName, sourceFolderId, targetFolderId) => {
    setFolders(
      folders.map(folder => {
        if (folder.id === sourceFolderId) {
          return { ...folder, documents: folder.documents.filter(doc => doc !== docName) };
        } else if (folder.id === targetFolderId) {
          return { ...folder, documents: [...folder.documents, docName] };
        }
        return folder;
      })
    );
    setDropdownOpen(null); // Close the dropdown after moving the document
  };

  const toggleFolder = (folderId) => {
    setExpandedFolderId(expandedFolderId === folderId ? null : folderId);
  };

  const handleEditFolder = (folderId) => {
    const folder = folders.find(f => f.id === folderId);
    setEditingFolderId(folderId);
    setEditFolderName(folder.name);
  };

  const saveEditFolder = () => {
    setFolders(folders.map(folder => 
      folder.id === editingFolderId ? { ...folder, name: editFolderName } : folder
    ));
    setEditingFolderId(null);
    setEditFolderName('');
  };

  const handleDeleteFolder = (folderId) => {
    setFolders(folders.filter(folder => folder.id !== folderId));
    if (expandedFolderId === folderId) {
      setExpandedFolderId(null);
    }
  };

  return (
    <div className="min-h-screen w-full mt-10 flex flex-col p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">Documents</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="New Folder Name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            className="border rounded p-2 w-64 shadow-sm"
          />
          <button onClick={addFolder} className="bg-[#0957D0] text-white px-4 py-2 rounded-lg flex items-center shadow-lg hover:bg-[#1d6c6b] transition">
            <FaPlus className="mr-2" /> Add New
          </button>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="flex flex-col gap-6">
          {folders.map(folder => (
            <div key={folder.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
              <div className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition" onClick={() => toggleFolder(folder.id)}>
                <div className="flex items-center">
                  <FaFolder className="mr-2 text-[#0957D0]" />
                  <span className="text-lg font-semibold text-gray-900">{folder.name}</span>
                </div>
                {expandedFolderId === folder.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expandedFolderId === folder.id && (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    {editingFolderId === folder.id ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={editFolderName}
                          onChange={(e) => setEditFolderName(e.target.value)}
                          className="border rounded p-2 w-64 shadow-sm"
                        />
                        <button onClick={saveEditFolder} className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2">
                          Save
                        </button>
                        <button onClick={() => setEditingFolderId(null)} className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2">
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <button onClick={() => handleEditFolder(folder.id)} className="text-blue-600 hover:text-blue-800 mr-2">
                          <FaEdit />
                        </button>
                        <button onClick={() => handleDeleteFolder(folder.id)} className="text-red-600 hover:text-red-800">
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </div>
                  {folder.documents.length > 0 ? (
                    folder.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 mb-2 bg-gray-50 rounded-lg shadow-sm"
                      >
                        <span className="text-gray-700">{doc}</span>
                        <div className="flex items-center space-x-4">
                          <button className="text-blue-600 hover:text-blue-800">
                            <FaComments />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => deleteDocument(folder.id, doc)}
                          >
                            <FaTrash />
                          </button>
                          <div className="relative">
                            <button
                              className="text-gray-600 hover:text-gray-800"
                              onClick={() => setDropdownOpen(dropdownOpen === doc ? null : doc)}
                            >
                              <FaEllipsisV />
                            </button>
                            {dropdownOpen === doc && (
                              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl z-10 transition-all transform">
                                <div className="text-sm font-medium text-gray-900 mb-2 px-4 py-2">Move to:</div>
                                {folders
                                  .filter(f => f.id !== folder.id)
                                  .map(f => (
                                    <div
                                      key={f.id}
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-200 transition"
                                      onClick={() => moveDocument(doc, folder.id, f.id)}
                                    >
                                      {f.name}
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        </div>
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

export default DocumentManager;

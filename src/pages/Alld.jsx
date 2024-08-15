import React, { useState } from 'react';
import { FaPlus, FaFolder, FaChevronDown, FaChevronUp, FaComments, FaTrash, FaEllipsisV } from 'react-icons/fa';

const DocumentManager = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Default Folder', documents: ['Document 1', 'Document 2'] },
    { id: 2, name: 'Another Folder', documents: [] }
  ]);
  const [expandedFolderId, setExpandedFolderId] = useState(null);
  const [newFolderName, setNewFolderName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);

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

  return (
    <div className="min-h-screen w-full mt-10 flex flex-col p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Documents</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="New Folder Name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            className="border rounded p-2"
          />
          <button onClick={addFolder} className="bg-[#22808D] text-white px-4 py-2 rounded-lg flex items-center">
            <FaPlus className="mr-2" /> Add New
          </button>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {folders.map(folder => (
            <div key={folder.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                onClick={() => toggleFolder(folder.id)}
              >
                <div className="flex items-center">
                  <FaFolder className="mr-2 text-gray-700" />
                  <span className="text-lg font-semibold text-gray-800">{folder.name}</span>
                </div>
                {expandedFolderId === folder.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expandedFolderId === folder.id && (
                <div className="p-4">
                  {folder.documents.length > 0 ? (
                    folder.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 border-b border-gray-300"
                      >
                        <span>{doc}</span>
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
                              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-xl z-10">
                                <div className="text-sm font-medium text-gray-900 mb-2 px-4 py-2">Move to:</div>
                                {folders
                                  .filter(f => f.id !== folder.id)
                                  .map(f => (
                                    <div
                                      key={f.id}
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-200"
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

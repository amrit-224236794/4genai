import React, { useState } from 'react';
import { FaPlus, FaFolder, FaChevronDown, FaChevronUp, FaComments, FaTrash, FaEllipsisV, FaFileAlt } from 'react-icons/fa';

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
    <div className="min-h-screen w-full p-8 bg-gray-50">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">Document Manager</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#22808D] transition"
          />
          <button onClick={addFolder} className="bg-[#22808D] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#1a6a6f] transition">
            <FaPlus className="mr-2" /> Add Folder
          </button>
        </div>
      </header>

      <main className="flex flex-col space-y-6">
        {folders.map(folder => (
          <div key={folder.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 border-b border-gray-200"
              onClick={() => toggleFolder(folder.id)}
            >
              <div className="flex items-center space-x-3">
                <FaFolder className="text-[#22808D] text-2xl" />
                <span className="text-xl font-semibold text-gray-800">{folder.name}</span>
              </div>
              {expandedFolderId === folder.id ? <FaChevronUp className="text-gray-600 text-lg" /> : <FaChevronDown className="text-gray-600 text-lg" />}
            </div>
            {expandedFolderId === folder.id && (
              <div className="relative">
                <div className="p-4">
                  {folder.documents.length > 0 ? (
                    folder.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="relative flex justify-between items-center p-3 border-b border-gray-300 hover:bg-gray-100"
                      >
                        <div className="flex items-center space-x-3">
                          <FaFileAlt className="text-gray-600 text-lg" />
                          <span className="text-gray-700">{doc}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button className="text-[#22808D] hover:text-[#1a6a6f]" title="Comments">
                            <FaComments />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            title="Delete Document"
                            onClick={() => deleteDocument(folder.id, doc)}
                          >
                            <FaTrash />
                          </button>
                          <div className="relative">
                            <button
                              className="text-gray-600 hover:text-gray-800"
                              title="More Options"
                              onClick={() => setDropdownOpen(dropdownOpen === doc ? null : doc)}
                            >
                              <FaEllipsisV />
                            </button>
                            {dropdownOpen === doc && (
                              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-30">
                                <div className="text-sm font-medium text-gray-900 mb-2 px-4 py-2 border-b border-gray-200">Move to:</div>
                                {folders
                                  .filter(f => f.id !== folder.id)
                                  .map(f => (
                                    <div
                                      key={f.id}
                                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
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
                    <div className="text-gray-500">No documents available.</div>
                  )}
                </div>
                {/* Overlay for dropdown */}
                {dropdownOpen && (
                  <div className="fixed inset-0 bg-gray-900 opacity-50 z-20" onClick={() => setDropdownOpen(null)}></div>
                )}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default DocumentManager;

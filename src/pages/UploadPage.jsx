import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFile = (file) => {
    if (file && file.type === 'application/pdf') {
      setFile(file);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/summarize', { state: { file } });
      }, 2000); // Simulate 2 seconds upload time
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center mt-28 w-full min-h-screen p-8">
      <style>
        {`
          @keyframes fill {
            0% { width: 0; }
            100% { width: 100%; }
          }

          .animate-fill {
            animation: fill 2s ease-out forwards;
          }
        `}
      </style>
      {loading ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-[#0957D0] animate-fill"></div>
          </div>
          <p className="text-gray-700">Uploading your file...</p>
        </div>
      ) : (
        <>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-[#14343B] mb-2">Chat With Your PDFs</h1>
            <p className="text-gray-600">Drag and drop your PDF file or select one from your device.</p>
          </div>
          <div
            className="border border-dashed border-gray-300 p-8 rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <AiOutlineCloudUpload className="text-6xl text-gray-500 mb-4" />
            <p className="text-gray-700 mb-4">Drag and drop your PDF file here, or click below to select one</p>
            <input type="file" accept=".pdf" onChange={handleChange} className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="cursor-pointer bg-[#0957D0] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#14343B] transition-colors">
              Select PDF
            </label>
            {file && (
              <div className="mt-4">
                <p className="text-gray-800 font-medium">Selected file: <span className="font-normal">{file.name}</span></p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UploadPage;

import React, { useState } from 'react';
import { FaEdit, FaArrowRight, FaFileInvoice, FaFileAlt, FaUser, FaLock, FaFolderOpen } from 'react-icons/fa';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150');
  const [email, setEmail] = useState('user@example.com');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [profession, setProfession] = useState('Software Engineer');
  const [currentPlan, setCurrentPlan] = useState('Basic Plan');
  const [invoices, setInvoices] = useState(['Invoice 1', 'Invoice 2']);
  const [sharedDocuments, setSharedDocuments] = useState(['Document A', 'Document B']);
  const [activeTab, setActiveTab] = useState('profile');

  const handleResetPassword = () => {
    alert('Password reset functionality to be implemented.');
  };

  const handleUpgradePlan = () => {
    alert('Upgrade plan functionality to be implemented.');
  };

  return (
    <div className="flex ml-4 w-full min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F5F5F5] shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Profile Settings</h2>
        </div>
        <nav className="flex flex-col">
          <button className={`flex items-center p-4 rounded-2xl  hover:bg-[#E8E9EA] ${activeTab === 'profile' ? 'bg-[#E8E9EA] text-[#0957D0]' : ''}`} onClick={() => setActiveTab('profile')}>
            <FaUser className="mr-3 text-black" /> Profile
          </button>
          <button className={`flex items-center p-4 rounded-2xl  hover:bg-[#E8E9EA] ${activeTab === 'account' ? 'bg-[#E8E9EA]] text-[#0957D0]' : ''}`} onClick={() => setActiveTab('account')}>
            <FaLock className="mr-3 text-black" /> Account
          </button>
          <button className={`flex items-center p-4 rounded-2xl  hover:bg-[#E8E9EA] ${activeTab === 'invoices' ? 'bg-[#E8E9EA]] text-[#0957D0]' : ''}`} onClick={() => setActiveTab('invoices')}>
            <FaFileInvoice className="mr-3 text-black" /> Invoices
          </button>
          <button className={`flex items-center p-4 rounded-2xl  hover:bg-[#E8E9EA] ${activeTab === 'documents' ? 'bg-[#E8E9EA]] text-[#0957D0]' : ''}`} onClick={() => setActiveTab('documents')}>
            <FaFolderOpen className="mr-3 text-black" /> Shared Documents
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <div className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {firstName} {lastName}
              </h2>
              <p className="text-lg text-gray-600">{profession}</p>
              <p className="text-md text-gray-500">{email}</p>
              <button className="mt-4 px-4 py-2 bg-[#0957D0] text-white font-medium rounded-md hover:bg-[#1a6a68] transition duration-200 flex items-center">
                <FaEdit className="mr-2" /> Edit Profile
              </button>
            </div>
          </div>

          {/* Dynamic Content Based on Active Tab */}
          {activeTab === 'profile' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Profile Information</h3>
              <p className="text-md text-gray-600 mt-2">Your personal details are listed here.</p>
              {/* More profile details can go here */}
            </div>
          )}

          {activeTab === 'account' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Account Settings</h3>
              <div className="flex justify-between mt-4">
                <p className="text-md text-gray-600">Current Plan: <strong>{currentPlan}</strong></p>
                <button onClick={handleUpgradePlan} className="px-4 py-2 bg-[#0957D0] text-white rounded-md hover:bg-[#1a6a68] transition duration-200 flex items-center">
                  Upgrade Plan <FaArrowRight className="ml-2" />
                </button>
              </div>
              <button onClick={handleResetPassword} className="mt-4 px-4 py-2 bg-[#0957D0] text-white rounded-md hover:bg-[#1a6a68] transition duration-200">
                Reset Password
              </button>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Invoices</h3>
              <ul className="mt-4 space-y-2">
                {invoices.map((invoice, index) => (
                  <li key={index} className="flex items-center text-gray-600 hover:text-gray-900 transition duration-200">
                    <FaFileInvoice className="mr-2 text-gray-400" /> {invoice}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Shared Documents</h3>
              <ul className="mt-4 space-y-2">
                {sharedDocuments.map((doc, index) => (
                  <li key={index} className="flex items-center text-gray-600 hover:text-gray-900 transition duration-200">
                    <FaFileAlt className="mr-2 text-gray-400" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;

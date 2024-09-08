import React, { useState } from 'react';
import { FaEdit, FaArrowRight, FaFileInvoice, FaFileAlt } from 'react-icons/fa';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150');
  const [email, setEmail] = useState('user@example.com');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [profession, setProfession] = useState('Software Engineer');
  const [currentPlan, setCurrentPlan] = useState('Basic Plan');
  const [invoices, setInvoices] = useState(['Invoice 1', 'Invoice 2']);
  const [sharedDocuments, setSharedDocuments] = useState(['Document A', 'Document B']);

  const handleResetPassword = () => {
    alert('Password reset functionality to be implemented.');
  };

  const handleUpgradePlan = () => {
    alert('Upgrade plan functionality to be implemented.');
  };

  return (
    <div className="min-h-screen w-full p-8">
      <div className="max-w-6xl mx-auto border border-gray-300 rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center p-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 shadow-lg">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {firstName} {lastName}
            </h2>
            <p className="text-xl text-gray-500">{profession}</p>
            <p className="text-lg text-gray-400">{email}</p>
            <button className="mt-4 px-5 py-2 bg-[#22808D] text-white font-semibold rounded-md hover:bg-[#1a6a68] transition duration-200 flex items-center">
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          </div>
        </div>

        {/* Account Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
          {/* Password Section */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Password</h3>
            <button
              onClick={handleResetPassword}
              className="px-6 py-2 bg-[#22808D] text-white rounded-lg hover:bg-[#1a6a68] transition duration-200"
            >
              Reset Password
            </button>
          </div>

          {/* Current Plan Section */}
          <div className="p-8 border-t md:border-t-0 md:border-l border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Current Plan</h3>
            <p className="text-lg text-gray-600 mb-2">
              You are currently on the <strong>{currentPlan}</strong>.
            </p>
            <button
              onClick={handleUpgradePlan}
              className="px-6 py-2 bg-[#22808D] text-white rounded-lg hover:bg-[#1a6a68] transition duration-200 flex items-center"
            >
              Upgrade Plan <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Invoices Section */}
        <div className="p-8 border-t border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Invoices</h3>
          <ul className="space-y-3">
            {invoices.map((invoice, index) => (
              <li
                key={index}
                className="flex items-center text-gray-600 hover:text-gray-900 transition duration-200"
              >
                <FaFileInvoice className="mr-2 text-gray-400" /> {invoice}
              </li>
            ))}
          </ul>
        </div>

        {/* Shared Documents Section */}
        <div className="p-8 border-t border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Shared Documents</h3>
          <ul className="space-y-3">
            {sharedDocuments.map((doc, index) => (
              <li
                key={index}
                className="flex items-center text-gray-600 hover:text-gray-900 transition duration-200"
              >
                <FaFileAlt className="mr-2 text-gray-400" /> {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

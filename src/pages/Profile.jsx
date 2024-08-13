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
    <div className="min-h-screen w-full  p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Picture and Personal Information */}
        <div className="flex p-6 border-b border-gray-200">
          <div className="flex-shrink-0 mr-6">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border border-gray-300"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-2">
              {firstName} {lastName}
            </h2>
            <p className="text-gray-700 mb-2">Email: {email}</p>
            <p className="text-gray-700 mb-2">Profession: {profession}</p>
            <button className="text-[#22808D] hover:text-[#366369] flex items-center">
              <FaEdit className="mr-1" /> Edit Profile
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Password</h3>
          <button
            onClick={handleResetPassword}
            className="bg-[#22808D] text-white px-4 py-2 rounded-lg flex items-center"
          >
            Reset Password
          </button>
        </div>

        {/* Current Plan Section */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Current Plan</h3>
          <p className="text-gray-700 mb-2">You are currently on the {currentPlan}.</p>
          <button
            onClick={handleUpgradePlan}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            Upgrade Plan <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Invoices Section */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Invoices</h3>
          <ul className="list-disc pl-5">
            {invoices.map((invoice, index) => (
              <li key={index} className="mb-2">
                <FaFileInvoice className="inline mr-2 text-gray-500" /> {invoice}
              </li>
            ))}
          </ul>
        </div>

        {/* Shared Documents Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Shared Documents</h3>
          <ul className="list-disc pl-5">
            {sharedDocuments.map((doc, index) => (
              <li key={index} className="mb-2">
                <FaFileAlt className="inline mr-2 text-gray-500" /> {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// DropdownComponent.jsx
import React from 'react';
import { RiArrowDownSLine } from "react-icons/ri";

const DropdownComponent = ({ options, onOptionClick }) => {
  return (
    <div className="relative mt-1">
      <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg py-2 z-10">
        {options.map((option, index) => (
          <li
            key={index}
            className="flex items-center p-3 hover:bg-gray-100 cursor-pointer transition-colors rounded-lg"
            onClick={() => onOptionClick(option)}
          >
            <option.icon className="text-gray-600 mr-3" />
            <span className="text-gray-800">{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownComponent;

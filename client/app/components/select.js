"use client"

import { useState, useEffect } from "react";

export default function Select({ options, onSelect, placeholder, selected }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (isDropdownOpen && !event.target.closest(".relative")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);

    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-2.5 rounded-xl border-2 border-zinc-700 bg-zinc-800 hover:cursor-pointer" onClick={toggleDropdown}>
        <div className="text-left truncate">
          {selectedOption ? selectedOption.name : (selected ? selected : <span className="text-gray-400">{placeholder}</span>)}
        </div>
      </div>
      {isDropdownOpen && (
        <ul className="absolute w-72 max-h-40 overflow-y-auto z-10 mt-2 py-2.5 rounded-xl bg-zinc-800 drop-shadow-lg">
          {options.map((option) => (
            <li key={option.key} className="px-5 py-2 truncate duration-200 hover:cursor-pointer hover:bg-zinc-700/40" onClick={() => selectOption(option)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
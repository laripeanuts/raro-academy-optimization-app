import React from "react";

export interface InputProps {
  label: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name
}) => (
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      { label }
    </label>
    <div className="mt-1">
      <input
        name={name}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  </div>
)
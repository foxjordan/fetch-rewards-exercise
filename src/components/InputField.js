import { useState } from "react";
export default function InputField({ type, placeholder, label, name, value }) {
  const [error, setError] = useState(false);
  //change handler function that checks for empty fields and sets the error state to true
  const handleChange = (e) => {
    if (e.target.value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <label className="flex text-[#001A23] flex-col items-start justify-start w-full h-full p-4">
      <span className="text-sm font-semibold ">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        required
        className={`w-full h-10 px-2 mt-2 focus:ring-2 focus:ring-[#001A23] text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500`}
      />
      {error && (
        <span className="text-sm text-red-500">{label} is required</span>
      )}
    </label>
  );
}

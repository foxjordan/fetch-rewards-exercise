import { getStates, getOccupations } from "../lib/dataMethods";
import { useEffect, useState } from "react";
export default function SelectField({ name, label, onChange }) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (name === "state") {
      getStates().then((data) => setOptions(data));
    } else if (name === "occupation") {
      getOccupations().then((data) => setOptions(data));
    }
  }, [name]);

  return (
    <label className="flex flex-col text-[#001A23] items-start justify-start w-full h-full p-4">
      <span className="text-sm font-semibold ">{label}</span>
      <select
        name={name}
        onChange={onChange}
        required
        className="w-full h-10 px-2 mt-2 text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

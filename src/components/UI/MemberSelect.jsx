import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Spinner from "./Spinner";

const MemberSelect = ({
  className,
  allOptions,
  selectedOptions,
  onSelectionChange,
  disabled = false,
  buttonText,
  loading
}) => {
  const DropdownRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (DropdownRef.current && !DropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.some(
      (selected) => selected.id === option.id,
    );
    if (isSelected) {
      onSelectionChange(
        selectedOptions.filter((selected) => selected.id !== option.id),
      );
    } else {
      onSelectionChange([...selectedOptions, option]);
    }
  };

  return (
    <div className={`relative ${className}`} ref={DropdownRef}>
      <button
        type="button"
        onClick={() => setDropdown(!dropdown)}
        className={`flex items-center gap-2 rounded-lg bg-navBg2 px-4 py-2 text-white ${disabled && 'opacity-60'}`}
      >
        <span>{buttonText}</span> {dropdown && !disabled ? <ChevronUp /> : <ChevronDown />}
      </button>
      {dropdown && !disabled && (
        <div className="fromBottom absolute bottom-10 z-50 mb-1 max-h-48 w-44 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg md:w-64">
          {!loading ? allOptions.map((option) => (
            <label
              key={option.id}
              className="fromBottom flex w-full cursor-pointer items-center gap-2 border-b px-2 py-3 hover:bg-navBg1"
            >
              <input
                type="checkbox"
                onChange={() => handleOptionChange(option)}
                checked={selectedOptions.some(
                  (selected) => selected.id === option.id,
                )}
              />
              <span>{option.name}</span>
            </label>
          )) : <div className="py-3 w-fit mx-auto"><Spinner /></div>}
        </div>
      )}
    </div>
  );
};

export default MemberSelect;

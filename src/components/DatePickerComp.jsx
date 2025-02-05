import { CalendarSearch } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
const calenderIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#225522"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-calendar-days"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
);

const DatePickerComp = ({ label, placeholder, selected, change }) => {
  return (
    <div className="w-full md:w-1/2">
      <h2>{label}</h2>
      <DatePicker
        showIcon
        icon={calenderIcon}
        showYearDropdown
        dropdownMode="select"
        selected={selected}
        onChange={change}
        className="flex w-full rounded-lg border border-gray-400 px-3 py-2 focus:outline-none"
        placeholderText={placeholder}
        closeOnScroll
      />
    </div>
  );
};

export default DatePickerComp;

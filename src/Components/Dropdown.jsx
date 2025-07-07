import { useState } from "react";
import "../css/Dropdown.css";
import axios from 'axios';
export default function Dropdown({ availability, label, children=[], classname = "", onSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newLabel, setLabel] = useState(label);
  function toggleDropdown(){
    availability==true ?
    setIsOpen((prev) => (!prev)) : setIsOpen((prev) => prev);
  }
  function getSelection({selection}){
    setLabel(selection);
    onSelect?.(selection);
  }
  return (
    <div
      className={`dropdown_parent ${isOpen ? "active" : ""} ${classname}`}
    >
      <div  onClick={toggleDropdown} className="dropdown_header">
        <div>{newLabel}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#ffffff"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </div>
       <div onClick={toggleDropdown} className={`dropdown_children ${isOpen ? "open" : ""}`}>{children.map((child, idx)=>{
        return(
          <div key={idx} onClick={() => getSelection({selection: child})} className="dropdown_option" >{child}</div>
        );
       })}</div>
    </div>
  );
}

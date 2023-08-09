import React, { useState } from "react";
import data from "../data/data";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id="dropdownNavbar"
        className={`z-10 ${
          isOpen ? "" : "hidden"
        }absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <ul
          aria-labelledby="dropdownLargeButton"
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
        >
          {data.dropdown.map((href, index) => {
            return (
              <li key={index}>
                <a
                  href={href.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {href.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;

"use client";

import { useState } from "react";

const MobileMenu = ({
  links,
}: {
  links: {
    name: string;
    href: string;
    megaMenu?: boolean;
  }[];
}) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="lg:hidden relative z-0">
      <button onClick={() => setIsToggle(!isToggle)} className="size-10">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {!isToggle ? (
            <>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </>
          ) : (
            <>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                  fill="#080341"
                ></path>{" "}
              </g>
            </>
          )}
        </svg>
      </button>
      <div
        className={`${
          isToggle ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out absolute top-16 right-0 w-max bg-[#004FFF] rounded-b-lg shadow-lg z-50 `} 
      >
        <ul className="flex flex-col gap-4 bg-white p-6">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-[#000000] text-[16px] font-medium relative z-0"
              >
                {link.name}
                {link.megaMenu && (
                  <span className="text-[16px] text-[#D12A24] "> ⯆</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

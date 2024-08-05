"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const navItems = [
    {
      title: "Installation",
      path: "/",
    },
    {
      title: "UnpopularButton",
      path: "/unpopular-button",
    },
    {
      title: "UnpopularSelect",
      path: "/unpopular-select",
    },
    {
      title: "UnpopularToast",
      path: "/unpopular-toast",
    },
  ];

  // active paath
  const activePath = usePathname();

  const isActive = (path) => {
    return activePath === path;
  };
  return (
    <ul className="mt-4">
      {navItems.map((item) => (
        <li
          className={`py-1 mb-2 text-[14px] font-bold hover:text-[#bec6c4] cursor-pointer ${
            isActive(item.path) ? "text-[#bec6c4]" : ""
          }`}
          key={item.path}
        >
          <Link href={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

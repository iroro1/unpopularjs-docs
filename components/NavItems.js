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
    {
      title: "UnpopularModal",
      path: "/unpopular-modal",
    },
    {
      title: "UnpopularTooltip",
      path: "/unpopular-tooltip",
    },
    {
      title: "UnpopularTable",
      path: "/unpopular-table",
    },
    {
      title: "UnpopularAccordion",
      path: "/unpopular-accordion",
    },
    {
      title: "UnpopularTabs",
      path: "/unpopular-tabs", //Stopped here
    },
    {
      title: "UnpopularCarousel",
      path: "/unpopular-carousel",
    },
    // {
    //   title: "UnpopularCalendar",
    //   path: "/unpopular-calendar",
    // },
    {
      title: "UnpopularDatePicker",
      path: "/unpopular-date-picker",
    },
  ];

  // active paath
  const activePath = usePathname();

  const isActive = (path) => {
    return activePath === path;
  };
  return (
    <ul className="mt-4 h-full overflow-y-auto">
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

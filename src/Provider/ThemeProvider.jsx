"use client";
import React, { useEffect, useState } from "react";
import context from "./context";
import { usePathname } from "next/navigation";

const ThemeProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [menuStatus, setMenuStatus] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const pathname = usePathname();

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      value === undefined
        ? !preMenuStatus
        : typeof value === "boolean"
          ? value
          : !!value
    );
  };
  const toggleMegaMenu = (value) => {
    setOpenMegaMenu((preMenuStatus) =>
      !preMenuStatus
    );
    document.body.classList.toggle("megamenu-popup-active", !openMegaMenu);
  };

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };
  const toggleSidebar = () => {
    setOpenSidebar((preState) => !preState);
    document.body.classList.toggle("locked", !openSidebar);

  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    document.body.classList.toggle("locked", !isExpanded);
  };
  useEffect(() => {
    toggleMenu(false);
    setIsExpanded(false);
  }, [pathname]);
  const value = {
    handleToggle,
    isExpanded,
    setIsExpanded,
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
    toggleMegaMenu,
    openMegaMenu,
    openSidebar, setOpenSidebar,
    toggleSidebar
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ThemeProvider;

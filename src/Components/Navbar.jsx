import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navlink = [
  { path: "/", dispaly: "Home" },
  { path: "/suspense", dispaly: "Suspense Method" },
  { path: "/loader", dispaly: "Loader Method" },
  { path: "/axios", dispaly: "Axios Method" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        h-[10vh]
        w-full
        bg-sky-950
        sticky top-0 left-0 z-50
        px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30
        flex items-center justify-between
      "
    >
      {/* Logo */}
      <Link to="/" className="text-[#a37000] text-xl sm:text-2xl font-bold">
        Logo
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5">
        {navlink.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#a37000] font-medium"
                  : "text-white hover:text-[#a37000] transition"
              }
            >
              {item.dispaly}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-[10vh] left-0 w-full bg-sky-950 flex flex-col items-center gap-4 py-6 md:hidden">
          {navlink.map((item, index) => (
            <li key={index} onClick={() => setOpen(false)}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-[#a37000] text-lg" : "text-white text-lg"
                }
              >
                {item.dispaly}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

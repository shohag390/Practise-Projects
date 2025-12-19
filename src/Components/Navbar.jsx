import React from "react";
import { Suspense } from "react";
import { Link, NavLink } from "react-router-dom";

const navlink = [
  {
    path: "/",
    dispaly: "Home",
  },
  {
    path: "/suspense",
    dispaly: "Suspense Method",
  },
  {
    path: "/loader",
    dispaly: "Loader Method",
  },
  {
    path: "/axios",
    dispaly: "Axios Method",
  },
];

const Navbar = () => {
  return (
    <nav className="h-[10vh] w-[full] flex items-center justify-between px-30 bg-sky-950 sticky top-0 left-0 z-50">
      <Link className="text-[#a37000] text-[25px] font-bold" to={"/"}>
        Logo
      </Link>
      <ul className="flex items-center gap-5">
        {navlink?.map((item, index) => (
          <li key={index}>
            <NavLink
              className={(className) =>
                className?.isActive ? "text-[#a37000]" : "text-[#ffff]"
              }
              to={item?.path}
            >
              {item?.dispaly}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

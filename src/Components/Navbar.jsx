import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { PiFileTextThin } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute">
      <div className="flex group">
        <div
          className={
            "flex flex-col h-screen bg-slate-600 m-0  left-0 text-white pt-12  shadow-2xl w-0 transition-all origin-left group-hover:w-52 "
          }
        >
          <NavContents
            title={"Course"}
            icon={<RiBook2Line size="28" />}
            menu={["one", "two", "three"]}
          />
          <NavContents
            title={"Grade"}
            icon={<PiFileTextThin size="28" />}
            menu={["five", "six"]}
          />
          <NavContents
            title={"Profile"}
            icon={<CgProfile size="28" />}
            menu={["aso", "hh"]}
          />
        </div>
        <div
          className="bg-slate-600 h-min p-2 rounded-r-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu size={"28"} />
        </div>
      </div>
    </div>
  );
};

const NavContents = ({ icon, title, menu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(true);
  const name = true;
  return (
    <>
      <div
        className="navbarElement flex transition-all cursor-pointer "
        onClick={() => setSubmenuOpen(!submenuOpen)}
      >
        <div className="pb-1 pt-1 pr-2">{icon}</div>

        {title}
      </div>
      <div
        className={
          "navbarSubmenuContainer cursor-pointer  " + (submenuOpen && "hidden")
        }
      >
        {menu.map((submenu) => (
          <div key={submenu} className="navbarSubmenu ">
            {submenu}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;

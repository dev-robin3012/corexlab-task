import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { AiFillPlusCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { CgMenuRound } from "react-icons/cg";

const AppLayout = ({ children }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <section className="flex min-h-screen font-poppins">
      <Sidebar />
      <main className="w-full">
        <nav className="p-3 flex items-center justify-between ">
          <CgMenuRound
            className="hidden sm:block h-10 w-10 text-blue"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
          <div className="flex items-center gap-3 w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Customer"
                tr
                className="w-80 md:w-64 h-10 md:h-8 rounded-3xl pl-9 pr-5 shadow-sm focus:outline-none focus:ring-2 focus:border-blue bg-lightGray "
              />
              <BiSearch className="absolute top-2.5 md:top-2 left-2 text-2xl md:text-xl" />
            </div>
            <AiFillPlusCircle className="text-4xl md:text-3xl text-blue" />
          </div>
          <div className="flex items-center gap-5 text-dark">
            <IoMdNotificationsOutline className="text-2xl xs:hidden" />
            <AiOutlineQuestionCircle className="text-2xl xs:hidden" />
            <div className="bg-blue text-light text-sm h-8 w-8 rounded-full flex items-center justify-center">
              <span>KP</span>
            </div>
          </div>
        </nav>
        {children}
      </main>
    </section>
  );
};

export default AppLayout;

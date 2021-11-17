import React from "react";
import Sidebar from "./Sidebar";
import { AiFillPlusCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const AppLayout = ({ children }) => {
  return (
    <section className="flex h-screen">
      <Sidebar />
      <main className="w-full">
        <nav className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-3 w-1/2">
            <input
              type="text"
              placeholder="Search Customer"
              tr
              className="w-80 h-10 rounded-3xl px-5 shadow-sm focus:outline-none focus:ring-2 focus:border-blue bg-lightGray "
            />
            <AiFillPlusCircle className="text-4xl text-blue" />
          </div>
          <div className="flex items-center gap-5 text-dark">
            <IoMdNotificationsOutline className="text-2xl" />
            <AiOutlineQuestionCircle className="text-2xl" />
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

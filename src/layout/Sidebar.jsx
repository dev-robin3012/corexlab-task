import React from "react";
import {
  MdOutlineDashboard,
  MdOutlinePayment,
  MdOutlineSubscriptions,
  MdOutlineSettings,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaFileInvoice } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsFillBagDashFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { GrChatOption } from "react-icons/gr";
import logo from "../assets/logo.png";

const SideBarItem = ({ icon, text }) => (
  <li
    className={`flex w-full justify-between px-8 md:px-5 py-3 md:py-2 text-dark hover:text-blue cursor-pointer items-center font-semibold ${
      text === "Customer" && "bg-lightGray text-blue"
    } md:text-xs`}
  >
    <div className="flex items-center">
      {icon}
      <span className="text-sm ml-2">{text}</span>
    </div>
  </li>
);

const SideBar = () => {
  return (
    <div className="">
      {/* Sidebar starts */}
      <div className="w-52 min-h-screen md:w-40 sm:hidden py-5 bg-light shadow-lg flex flex-col justify-between">
        <div className="">
          <img src={logo} alt="" className="h-12 mx-auto" />

          <ul className="mt-10 md:mt-5 flex flex-col">
            <SideBarItem icon={<MdOutlineDashboard />} text="Dashboard" />
            <SideBarItem icon={<FiUsers />} text="Customer" />
            <SideBarItem icon={<BsFillBagDashFill />} text="Product" />
            <SideBarItem icon={<CgNotes />} text="Estimate" />
            <SideBarItem icon={<FaFileInvoice />} text="Invoice" />
            <SideBarItem icon={<MdOutlinePayment />} text="Payment Plan" />
            <SideBarItem icon={<MdOutlineSubscriptions />} text="Subscription" />
            <SideBarItem icon={<HiOutlineDocumentReport />} text="Report" />
          </ul>
        </div>
        <div className="">
          <ul className="flex justify-center gap-4 text-2xl">
            <li>
              <IoIosNotifications />
            </li>
            <li>
              <GrChatOption />
            </li>
            <li>
              <MdOutlineSettings />
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;

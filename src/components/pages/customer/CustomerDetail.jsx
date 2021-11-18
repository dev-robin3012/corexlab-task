import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GrFormPrevious } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import MegaOption from "./MegaOption";
import mockData from "../../../customerData.json";

const CustomerDetail = ({ customerId, handleBack }) => {
  const { name, email, id } = mockData.find(customer => customer.id === customerId);

  return (
    <div className="flex gap-5 p-4 text-dark">
      <div style={{ lineHeight: 0 }} className="bg-light p-3 w-1/4 rounded">
        <div className="flex items-center font-semibold text-lg">
          <GrFormPrevious className="text-2xl cursor-pointer" onClick={() => handleBack()} />
          Customer
        </div>
        <div className="border border-lightGray my-2" />
        <div className="flex gap-3 text-base">
          <div className="bg-blue text-light rounded-full h-10 w-10 text-sm flex items-center justify-center">
            <span>MD</span>
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs">CUST-{id}</p>
            <div className="flex gap-5 text-center text-sm mt-3">
              <div>
                <IoCall className="bg-lightGray h-10 w-10 p-2.5 rounded-full border-dark" />
                Call
              </div>
              <div>
                <MdOutlineMail className="bg-lightGray h-10 w-10 p-2.5 rounded-full border-dark" />
                Email
              </div>
              <div>
                <FiEdit className="bg-lightGray h-10 w-10 p-2.5 rounded-full border-dark" />
                Notes
              </div>
            </div>
          </div>
        </div>
        <div className="border border-lightGray my-2" />
        <div className="text-base flex flex-col gap-3">
          <div className="flex items-center font-semibold text-sm gap-1">
            <IoIosArrowDown className="text-xl" />
            Profile Detail
          </div>
          <div>
            <p>Owner</p>
            <small>{name}</small>
          </div>
          <div>
            <p>Create Date</p>
            <small>18-Nov-2021</small>
          </div>
        </div>
        <div className="border border-lightGray my-2" />
      </div>
      <div className="bg-light w-3/4 p-4 rounded">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="bg-blue text-light px-4 py-1 rounded flex items-center gap-1">
              <AiOutlinePlus /> Create New
            </button>
            <button className="px-4 py-1 rounded flex items-center gap-1 shadow">
              Action <IoIosArrowDown />
            </button>
          </div>
          <div className="text-sm">
            <p>
              Total Amount: <span className="font-semibold ml-2">$149</span>
            </p>
            <p>
              Remaining: <span className="font-semibold ml-2">$130</span>
            </p>
          </div>
        </div>
        <div className="border border-lightGray my-2" />
        <MegaOption />
      </div>
    </div>
  );
};

export default CustomerDetail;

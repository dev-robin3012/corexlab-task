import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const PersonInfoCard = ({ icon }) => (
  <div className="shadow-sm rounded-md py-2 px-3 grid grid-cols-3 border-2 border-gray hover:border-blue">
    <div>
      <p className="font-semibold text-sm">Jhon Duo</p>
      <small className="text-xs">Due Date: 10 aug 2021</small>
    </div>
    <small className="mt-auto text-xs text-center">Owner: Jhon Duo</small>
    <div className="flex items-center gap-7 justify-center">
      <FaPhoneAlt className="bg-lightGray text-blue h-8 w-8 rounded-full p-2" /> <FiMoreVertical />
    </div>
  </div>
);

const Collection = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 text-sm">
        <a href> Activity</a>
        <div className="flex gap-3">
          <button className="flex items-center gap-1 rounded shadow px-4 py-1 bg-blue text-light">
            <AiOutlinePlus />
            Note
          </button>
          <button className="flex items-center gap-1 rounded shadow px-4 py-1">
            <AiOutlinePlus />
            Task
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <PersonInfoCard />
        <PersonInfoCard />
        <PersonInfoCard />
        <PersonInfoCard />
      </div>
    </div>
  );
};

export default Collection;

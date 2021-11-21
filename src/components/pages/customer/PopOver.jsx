import React from "react";
import { Popover } from "@headlessui/react";
import { FiMoreVertical } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const PopOver = () => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <FiMoreVertical />
      </Popover.Button>

      <Popover.Panel className="absolute z-10 -left-20 -top-10">
        <div className="bg-light py-2 shadow-md rounded-md">
          <button className="py-2 w-full flex items-center gap-3 px-8 hover:bg-gray">
            <FaRegEdit /> Edit
          </button>
          <button className="py-2 flex items-center gap-3 px-8 hover:bg-gray">
            <RiDeleteBin5Line /> Delete
          </button>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
};

export default PopOver;

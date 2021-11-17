import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { GrPrevious, GrNext } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import mockData from "../../../customerData.json";

const CustomerList = () => {
  const [customers, setCustomers] = useState(mockData);
  const [pageNum, setPageNum] = useState(0);

  const pageVisited = pageNum * 8;

  const displayCustomers = customers.slice(pageVisited, pageVisited + 8);

  const pageCount = Math.ceil(customers.length / 8);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <section className="mx-4">
      <div className="shadow-lg p-4 bg-light ">
        <table className="w-full">
          <thead className="bg-lightGray">
            <tr className="text-md text-left text-dark">
              <th className="px-3 py-1.5">ID</th>
              <th className="px-3 py-1.5">Name</th>
              <th className="px-3 py-1.5">Email Id</th>
              <th className="px-3 py-1.5">Mobile No</th>
              <th className="px-3 py-1.5">Address</th>
              <th className="px-3 py-1.5 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {displayCustomers.map(customer => (
              <tr className="text-dark shadow-sm" key={customer.id}>
                <td className="px-3 py-1.5">{customer.id}</td>
                <td className="px-3 py-1.5">{customer.name}</td>
                <td className="px-3 py-1.5">{customer.email}</td>
                <td className="px-3 py-1.5">{customer.mobile}</td>
                <td className="px-3 py-1.5">{customer.address}</td>
                <td className="flex py-2 justify-center">
                  <FiMoreVertical className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between pt-5">
          <p>Showing result 1 to 8 of {customers.length}</p>
          <ReactPaginate
            previousLabel={<GrPrevious />}
            nextLabel={<GrNext />}
            breakLabel="..."
            pageCount={pageCount}
            onPageChange={changePage}
            className="flex items-center gap-5"
            previousClassName="p-2 bg-lightGray rounded-full"
            nextClassName="p-2 bg-lightGray rounded-full"
            activeClassName="bg-blue h-6 w-6 rounded-full text-center text-light"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerList;

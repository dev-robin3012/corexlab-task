import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import mockData from "../../../customerData.json";
import PopOver from "./PopOver";

const CustomerList = ({ handleDetailPage }) => {
  const [pageNum, setPageNum] = useState(0);

  const pageVisited = pageNum * 8;

  const displayCustomers = mockData.slice(pageVisited, pageVisited + 8);

  const pageCount = Math.ceil(mockData.length / 8);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <section className="mx-4">
      <div className="shadow-lg p-4 bg-light rounded">
        <table className="w-full md:text-sm xs:text-xs">
          <thead className="bg-lightGray">
            <tr className="text-md xs:text-xs text-left text-dark">
              <th className="px-3 xs:p-1 md:p-1.5 py-1.5">ID</th>
              <th className="px-3 xs:p-1 md:p-1.5 py-1.5">Name</th>
              <th className="px-3 xs:p-1 md:p-1.5 py-1.5">Email Id</th>
              <th className="px-3 xs:p-1 md:p-1.5 py-1.5">Mobile No</th>
              <th className="px-3 xs:p-1 md:p-1.5 py-1.5">Address</th>
              <th className="px-3 xs:p-1 md:p-1.5 py-1.5 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {displayCustomers.map(customer => (
              <tr
                title="For More Info Click on Customer Name"
                className="text-dark shadow-sm hover:bg-gray"
                key={customer.id}
              >
                <td className="px-3 xs:text-xs md:p-1.5 py-2">{customer.id}</td>
                <td
                  className="px-3 xs:text-xs md:p-1.5 py-2"
                  onClick={() => handleDetailPage(customer.id)}
                >
                  <a href className="cursor-pointer">
                    {customer.name}
                  </a>
                </td>
                <td className="px-3 xs:text-xs md:p-1.5 py-2">{customer.email}</td>
                <td className="px-3 xs:text-xs md:p-1.5 py-2">{customer.mobile}</td>
                <td className="px-3 xs:text-xs md:p-1.5 py-2">{customer.address}</td>
                <td className="flex xs:text-xs md:p-1.5 py-2 justify-center">
                  <PopOver />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between pt-5">
          <small>Showing result 1 to 8 of {mockData.length}</small>

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

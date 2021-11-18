import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiFilter2Line } from "react-icons/ri";
import CustomerDetail from "./customer/CustomerDetail";
import CustomerList from "./customer/CustomerList";

const Customer = () => {
  const [detailById, setDetailById] = useState();

  return (
    <div className="bg-gray">
      {detailById ? (
        <CustomerDetail customerId={detailById} handleBack={setDetailById} />
      ) : (
        <>
          <div className="p-3 flex justify-between">
            <h1 className="font-semibold text-xl text-dark">Customer</h1>
            <ul className="flex gap-3 text-dark">
              <li className="bg-light px-5 rounded flex items-center gap-2">
                <RiFilter2Line />
                Filter
              </li>
              <li className="bg-light px-5 rounded flex items-center gap-2">
                <AiOutlinePlus />
                Import
              </li>
              <li className="bg-light px-5 rounded flex items-center gap-2">Export</li>
              <li className="bg-blue px-5 py-1.5 text-light rounded flex items-center gap-2">
                <AiOutlinePlus /> Add Customer
              </li>
            </ul>
          </div>
          <CustomerList handleDetailPage={setDetailById} />
        </>
      )}
    </div>
  );
};

export default Customer;

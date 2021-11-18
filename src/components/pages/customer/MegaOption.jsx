import React, { useState } from "react";
import Collection from "./Collection";

const MegaOption = () => {
  const [selectOption, setSelectOption] = useState("Collection");

  return (
    <div className="divide-y-2 divide-lightGray">
      <div>
        <button
          className={`p-3 border-blue font-semibold text-sm ${
            selectOption === "Account" && "border-b-2 text-blue"
          }`}
          onClick={() => setSelectOption("Account")}
        >
          Account
        </button>
        <button
          className={`p-3 border-blue font-semibold text-sm ${
            selectOption === "Collection" && "border-b-2 text-blue"
          }`}
          onClick={() => setSelectOption("Collection")}
        >
          Collection
        </button>
        <button
          className={`p-3 border-blue font-semibold text-sm ${
            selectOption === "Report" && "border-b-2 text-blue"
          }`}
          onClick={() => setSelectOption("Report")}
        >
          Report
        </button>
      </div>
      {selectOption === "Account" && <h1>Account info yet not ready</h1>}
      {selectOption === "Collection" && <Collection />}
      {selectOption === "Report" && <h1>Report info yet not ready</h1>}
    </div>
  );
};

export default MegaOption;

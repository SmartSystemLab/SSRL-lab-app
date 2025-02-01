import { useState } from "react";
import CustomLabel from "../../../components/CustomLabel";

const Equipment = ({
  eqpName,
  setEqpName,
  quantity,
  setQuantity,
  purpose,
  setPurpose,
}) => {
  if (quantity < 0) {
    quantity = 0;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center gap-10">
        <div className="w-32">
          <CustomLabel
            htmlFor="quantity"
            labelText="Quantity"
            inputType="number"
            inputValue={quantity || ""}
            onChange={(event) => setQuantity(event.target.value)}
            //   onBlur={() => {}}=[#
            required={true}
            labelCLassName="text-black inline-block font-medium text-lg  mb-1 "
            inputClassName="appearance-none relative block w-20 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none text-center"
            placeholder="Num"
          />
        </div>

        <div className="flex-1">
          <CustomLabel
            htmlFor="eqpName"
            labelText="Equipment Name:"
            inputType="text"
            inputValue={eqpName || ""}
            onChange={(event) => setEqpName(event.target.value)}
            //   onBlur={() => {}}
            required={true}
            labelCLassName="text-black inline-block font-medium text-lg  mb-1"
            inputClassName="appearance-none w-full relative block px-3 py-2 border border-gray-400 rounded-lg focus:outline-none grow"
          />
        </div>
      </div>
      <div className=" mt-2">
        <h2 className="font-semibold mb-1">Purpose</h2>
        <textarea
          id="purpose"
          value={purpose || ""}
          onChange={(event) => setPurpose(event.target.value)}
          className="appearance-none block w-full px-4 py-3 border border-black rounded-lg focus:outline-none resize-none h-32"
          rows={5}
          required
        />
      </div>
    </>
  );
};

export default Equipment;

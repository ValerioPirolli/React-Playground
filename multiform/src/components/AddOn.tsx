import { useState } from "react";
import { TAddOn } from "../models/TAddOn";
import { useFormStore } from "../stores/formStore";

function AddOn(data: TAddOn) {
  const { userPlan, setAddOns } = useFormStore();
  const [isChecked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!isChecked);
    setAddOns(data.id, !isChecked);
  };
  return (
    <label
      htmlFor={data.id}
      className={`flex align-middle justify-between w-11/12 mx-auto items-center border-2 rounded-md p-2 px-5 cursor-pointer mt-4 ${
        isChecked ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      <input
        type="checkbox"
        name={data.id}
        id={data.id}
        checked={isChecked}
        onChange={handleToggle}
        className="rounded-md border h-5 w-5 bg-blue-500 "
      />
      <div className="w-full ps-6">
        <p className="text-lg font-bold">{data.title}</p>
        <p className="text-sm text-gray-400">{data.subtitle}</p>
      </div>
      <div>{userPlan.periodicity == "montly" ? data.montly : data.yearly}</div>
    </label>
  );
}

export default AddOn;

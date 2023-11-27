import { TStep } from "../models/TStep";

function StepsGroup({ id, text, status }: TStep) {
  return (
    <div className="flex text-xs text-start mb-4">
      <div
        className={`w-8 h-8 border border-gray-200 flex items-center justify-center rounded-full${
          status ? " text-black text-sm font-bold bg-gray-200" : ""
        }`}
      >
        <span>{id + 1}</span>
      </div>
      <div className="ps-3 hidden lg:block">
        <h2>STEP {id + 1}</h2>
        <h2 className="font-bold">{text}</h2>
      </div>
    </div>
  );
}

export default StepsGroup;

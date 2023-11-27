import { useFormStore } from "../stores/formStore";

function FinishUpStep() {
  const { addons, userPlan, deleteCounter, addCounter, counterToOne } =
    useFormStore();
  const saldo = () => {
    let calc = 0;

    switch (userPlan.name) {
      case "arcade":
        calc = 9;
        break;
      case "advanced":
        calc = 12;
        break;
      case "pro":
        calc = 15;
        break;
      default:
        throw new Error("Invalid user plan name");
    }

    if (addons.piano1) {
      calc += 1;
    }
    if (addons.piano2) {
      calc += 2;
    }
    if (addons.piano3) {
      calc += 2;
    }

    if (userPlan.periodicity === "montly") {
      return `${calc} $/mo`;
    } else {
      return `${calc * 10} $/yr`;
    }
  };
  const oneIsTrue = Object.values(addons).some((data) => data == true);
  const rCounter: React.MouseEventHandler<HTMLButtonElement> = () => {
    deleteCounter();
  };
  const aCounter: React.MouseEventHandler<HTMLButtonElement> = () => {
    addCounter();
  };
  const counterTo: React.MouseEventHandler<HTMLButtonElement> = () => {
    counterToOne();
  };
  return (
    <div className="relative h-full flex flex-col">
      <h1 className="font-bold size text-2xl">Finishing Up</h1>
      <h3 className="text-gray-600 mb-6">
        Double-check everything look OK before confirming
      </h3>
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex align-middle items-center">
          <div className="flex-1">
            <h2 className="capitalize">
              {userPlan.name}({userPlan.periodicity})
            </h2>
            <button
              className="text-gray-400 underline text-sm"
              onClick={counterTo}
            >
              Change
            </button>
          </div>
          <p>$9/mo</p>
        </div>
        {oneIsTrue ? <hr className="my-4" /> : ""}
        <div>
          {addons.piano1 ? (
            <div className="flex">
              <p className="flex-1 text-gray-400 text-sm">Online Service</p>
              <p>+${userPlan.periodicity == "montly" ? "1/mo" : "10/yr"}</p>
            </div>
          ) : (
            ""
          )}
          {addons.piano2 ? (
            <div className="flex">
              <p className="flex-1 text-gray-400 text-sm">Larger Storage</p>
              <p>+${userPlan.periodicity == "montly" ? "2/mo" : "10/yr"}</p>
            </div>
          ) : (
            ""
          )}
          {addons.piano3 ? (
            <div className="flex">
              <p className="flex-1 text-gray-400 text-sm">
                Customizable profile
              </p>
              <p>+${userPlan.periodicity == "montly" ? "2/mo" : "10/yr"}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex p-4">
        <p className="flex-1 text-gray-400">
          Total (per {userPlan.periodicity == "yearly" ? "year" : "month"})
        </p>
        <p className="text-blue-700 text-lg font-bold">+${saldo()}</p>
      </div>
      <div className="absolute bottom-0 right-0 w-full">
        <button
          onClick={rCounter}
          type="button"
          className="absolute left-4 bottom-4 bg-transparent text-gray-400 p-2 rounded-lg ps-5 pe-5 font-bold"
        >
          Go Back
        </button>
        <button
          type="button"
          onClick={aCounter}
          className="absolute right-4 bottom-4 bg-blue-950 text-white p-2 rounded-lg ps-5 pe-5"
        >
          Next step
        </button>
      </div>
    </div>
  );
}

export default FinishUpStep;

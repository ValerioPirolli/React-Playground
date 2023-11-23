import { TAddOn } from "../models/TAddOn";
import { useFormStore } from "../stores/formStore";
import AddOn from "./AddOn";

function AddOnsStep() {
  const addons: TAddOn[] = [
    {
      id: "piano1",
      title: "Online service",
      subtitle: "access to multiplayer games",
      montly: "+$1/mo",
      yearly: "+$10/yr",
    },
    {
      id: "piano2",
      title: "Online service",
      subtitle: "access to multiplayer games",
      montly: "+$1/mo",
      yearly: "+$10/yr",
    },
    {
      id: "piano3",
      title: "Online service",
      subtitle: "access to multiplayer games",
      montly: "+$1/mo",
      yearly: "+$10/yr",
    },
  ];

  const { addCounter, counterToOne: removeCounter } = useFormStore();
  const rCounter: React.MouseEventHandler<HTMLButtonElement> = () => {
    removeCounter();
  };
  const aCounter: React.MouseEventHandler<HTMLButtonElement> = () => {
    addCounter();
  };
  return (
    <div className="relative h-full">
      <h1 className="font-bold size text-2xl">Pick add-ons</h1>
      <h3 className="text-gray-600 mb-6">
        Add-ons help enhance your gaming experience
      </h3>
      {addons.map((addOn) => (
        <AddOn
          id={addOn.id} // Assicurati di avere una chiave unica per ogni componente
          title={addOn.title}
          subtitle={addOn.subtitle}
          montly={addOn.montly}
          yearly={addOn.yearly}
        />
      ))}
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

export default AddOnsStep;

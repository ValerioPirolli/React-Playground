import { useFormStore } from "../stores/formStore";
import Step from "./Step";

function StepsGroup() {
  const { stepCounter } = useFormStore();

  const steps = [
    {
      id: 0,
      text: "Your Info",
      status: checkStatus(0),
    },
    {
      id: 1,
      text: "Your Info",
      status: checkStatus(1),
    },
    {
      id: 2,
      text: "Your Info",
      status: checkStatus(2),
    },
    {
      id: 3,
      text: "Your Info",
      status: checkStatus(3),
    },
  ];
  function checkStatus(id: number) {
    if (stepCounter >= 4 && id === 3) {
      return true;
    }
    return stepCounter === id;
  }

  return (
    <div className="left-sidebar p-8 lg:h-full mx-auto">
      <div className="flex lg:flex-col justify-between w-1/2">
        {steps.map((step) => (
          <Step
            key={step.id}
            id={step.id}
            text={step.text}
            status={step.status}
          />
        ))}
      </div>
    </div>
  );
}

export default StepsGroup;

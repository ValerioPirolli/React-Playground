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
    return stepCounter === id;
  }

  return (
    <div className="left-sidebar p-8 h-full flex flex-col">
      {steps.map((step) => (
        <Step
          key={step.id}
          id={step.id}
          text={step.text}
          status={step.status}
        />
      ))}
    </div>
  );
}

export default StepsGroup;

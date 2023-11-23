import "./App.css";
import UserFormStep from "./components/UserFormStep";
import BillingFormStep from "./components/BillingFormStep";
import StepsGroup from "./components/StepsGroup";
import { useFormStore } from "./stores/formStore";
import AddOnsStep from "./components/AddOnsStep";
import AddOn from "./components/AddOn";

function App() {
  const { stepCounter } = useFormStore();
  let currentStepComponent;
  switch (stepCounter) {
    case 0:
      currentStepComponent = <UserFormStep />;
      break;
    case 1:
      currentStepComponent = <BillingFormStep />;
      break;
    case 2:
      currentStepComponent = <AddOnsStep />;
      break;
    default:
      currentStepComponent = <UserFormStep />;
      break;
  }
  return (
    <div className=" bg-white m-5 p-3 rounded-lg flex max-w-[60%] mx-auto aspect-[1027/657]">
      <div className="h-full">
        <StepsGroup />
      </div>
      <div className="flex-1 text-black p-1 ps-10 pe-10">
        <AddOn></AddOn>
      </div>
    </div>
  );
}

export default App;

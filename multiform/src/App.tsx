import "./App.css";
import UserFormStep from "./components/UserFormStep";
import BillingFormStep from "./components/BillingFormStep";
import StepsGroup from "./components/StepsGroup";
import { useFormStore } from "./stores/formStore";
import AddOnsStep from "./components/AddOnsStep";
import FinishUpStep from "./components/FinishUpStep";
import ThankYouStep from "./components/ThankYouStep";

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
    case 3:
      currentStepComponent = <FinishUpStep />;
      break;
    case 4:
      currentStepComponent = <ThankYouStep />;
      break;
    default:
      currentStepComponent = <UserFormStep />;
      break;
  }
  return (
    <>
      <div className=" bg-white m-5 p-3 rounded-lg max-w-[60%] mx-auto aspect-[1027/657] hidden md:block">
        <div className="h-full">
          <StepsGroup />
        </div>
        <div className="flex-1 text-black p-1 ps-10 pe-10 h-full">
          {currentStepComponent}
        </div>
      </div>
      <div className="lg:hidden">
        <div className="w-full">
          <StepsGroup />
        </div>
      </div>
    </>
  );
}

export default App;

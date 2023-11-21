import "./App.css";
import Form from "./components/Form";
import Steps from "./components/Steps";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center ">
        Hello world!
      </h1>
      <div className=" bg-white m-5 p-3 rounded-lg h-[500px] flex w-[960px]">
        <Steps />
        <div className="flex-1 w-[85%] text-black p-5 ps-10 pe-10">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;

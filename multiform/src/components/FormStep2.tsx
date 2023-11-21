import { Controller, useForm } from "react-hook-form";
import { TFirstFormValues } from "../models/TFisrtFormValues";

function FormStep2() {
  const { control, handleSubmit, setValue, getValues } = useForm();

  const handleDivClick = (value) => {
    setValue("radioOption", value);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Esegui qui la logica del submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="radioOption"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div
              className={`option ${
                getValues("radioOption") === "option1" ? "selected" : ""
              }`}
              onClick={() => {
                handleDivClick("option1");
              }}
            >
              Opzione 1
            </div>
          )}
        />
        <Controller
          name="radioOption"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div
              className={`option ${
                getValues("radioOption") === "option2" ? "selected" : ""
              }`}
              onClick={() => {
                handleDivClick("option2");
              }}
            >
              Opzione 2
            </div>
          )}
        />
        <Controller
          name="radioOption"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div
              className={`option ${
                getValues("radioOption") === "option3" ? "selected" : ""
              }`}
              onClick={() => {
                handleDivClick("option3");
              }}
            >
              Opzione 3
            </div>
          )}
        />
      </div>

      <button type="submit">Invia</button>
    </form>
  );
}

export default FormStep2;

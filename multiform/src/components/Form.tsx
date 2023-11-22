import { useForm } from "react-hook-form";
import { TFirstFormValues } from "../models/TFisrtFormValues";
import { useFormStore } from "../stores/formStore";

function Form() {
  const form = useForm<TFirstFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const { firstForm, addCounter } = useFormStore();
  const { register, handleSubmit, formState } = form;

  return (
    <div className="relative h-full flex flex-col">
      <h1 className="font-bold size text-2xl">Personal info</h1>
      <h3 className="text-gray-600 mb-6">
        Please provide your name, email address, andphone number
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col mt-4">
          <label htmlFor="name" className="font-bold">
            Name{" "}
            <span className="font-normal ps-5 text-red-700 error">
              {errors.name?.message}
            </span>
          </label>
          <input
            placeholder="e.g Stephen King"
            className="w-50 bg-transparent border-[1px] rounded-md h-8 p-2 border-gray-300"
            type="text"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "name is required",
              },
            })}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="font-bold">
            E-Mail{" "}
            <span className="font-normal ps-5 text-red-700 error">
              {errors.email?.message}
            </span>
          </label>
          <input
            placeholder="e.g stephenking@lorem.com"
            className="w-50 bg-transparent border-[1px] rounded-md h-8 p-2 border-gray-300"
            type="text"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
            })}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="phone" className="font-bold">
            Phone{" "}
            <span className="font-normal ps-5 text-red-700 error">
              {errors.phone?.message}
            </span>
          </label>

          <input
            placeholder="e.g +1 234 567 890"
            className="w-50 bg-transparent border-[1px] rounded-md h-8 p-2 border-gray-300"
            type="text"
            id="name"
            {...register("phone", {
              required: {
                value: true,
                message: "phone is required",
              },
            })}
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="absolute right-[1em] bottom-[1em] bg-blue-950 text-white p-2 rounded-lg ps-5 pe-5"
        >
          Next step
        </button>
      </form>
    </div>
  );
}

export default Form;

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

function Form() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("for submitted", data);
  };

  return (
    <div>
      <h1 className="font-bold size text-2xl">Personal info</h1>
      <h3 className="text-gray-600 mb-6">
        Please provide your name, email address, andphone number
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col mt-4">
          <label htmlFor="name">Name</label>
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
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="email">E-Mail</label>
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
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="phone">Phone</label>
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
          <p className="error">{errors.phone?.message}</p>
        </div>
        <button className="bg-blue-600">Ok</button>
      </form>
    </div>
  );
}

export default Form;

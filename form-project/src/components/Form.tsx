import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  password: string;
  social: {
    facebook: string;
    instagram: string;
  };
  indirizzo: string[];
  phNumbers:{
    number: string;
  }[]
};

function Form() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "", //si possono usare per inserire dati nel input
      email: "",
      password: "",
      social: {
        facebook: "",
        instagram: "",
      },
      indirizzo:["",""],
      phNumbers:[{ number: ''}]
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control
  })

  const onSubmit = (data: FormValues) => {
    console.log("for submitted", data);
  };

  renderCount++;
  return (
    <div>
      <h1>Form({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                message: "Invalid Email",
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register("social.facebook")}/>
        </div>

        <div className="form-control">
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            {...register("social.instagram")}/>
        </div>

        <div className="form-control">
          <label htmlFor="indirizzo-primario">Indirizzo</label>
          <input
            type="text"
            id="indirizzo-primario"
            {...register("indirizzo.0")}/>
        </div>

        <div className="form-control">
          <label htmlFor="indirizzo-secondario">Secondo indirizzo</label>
          <input
            type="text"
            id="indirizzo-secondario"
            {...register("indirizzo.1")}/>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              pattern: {
                value: /^.{8,}$/,
                message: "La password deve essere lunga almeno 8 caratteri",
              },
            })}
          />
          <p className="error">{errors.password?.message}</p>
        </div>


        <div>
          <label>Lista numeri di telefono</label>
          <div>
            {fields.map((field, index) => {
              return(
                <div className="form-control" key={field.id}>
              <input type="text" {...register(`phNumbers.${index}.number` as const)}/>
              {
                index > 0 && (
                  <button type="button" onClick={() => remove(index)}>rimuovi numero di telefono</button>
                )
              }
          </div>
              );
              })}
              <button type="button" onClick={() => append({number:""})}>aggiungi numero di telefono</button>
        </div>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default Form;

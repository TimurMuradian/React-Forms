// 1) Creating standart structure of component
// 2) import useForm from "react-hook-form"
// 3) Create return of component JSX (без обработчиков)
// 4) Extract form controls
// 5) Adding a Function to Retrieve an Object with Data
// 6) Adding a link to the library to the imputs, as well as validation {...register("lastName", { required: true })}
// 7) Add a handleSubmit handler for form
// 8) Adding error handling


    //2
import { useForm } from "react-hook-form";

    //1
const UserData = () => {

    //4
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
    //5
  const onSubmit = (data) => {
    resetField("name");
    resetField("lastName");
    resetField("country");
    console.log(data)
  };


    //3
    return (
      //7
      <form onSubmit={handleSubmit(onSubmit)}>
        <lable>
          Name :{" "}
          <input type="text" {...register("name", { required: true })}></input>
          {errors.name && <span>This field is required!</span>}
        </lable>

        <lable>
          Last Name :{" "}
          <input
            type="text"
            {...register("lastName", { required: true })}
          ></input>
          {errors.lastName && <span>This field is required!</span>}
        </lable>

        <lable>
          Choose Country :{" "}
          <select {...register("country", { required: true })}>
            <option value=""></option>
            <option value="ukraine">Ukraine</option>
            <option value="poland">Poland</option>
            <option value="czech">Czech Republic</option>
          </select>
          {errors.country && <span>This field is required!</span>}
        </lable>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    );
}

export default UserData;
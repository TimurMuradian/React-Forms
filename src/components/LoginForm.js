import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("This field is required!"),
  password: yup.string().required().min(5, "Min lenghts is 5 symbols"),
}).required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    resetField("name");
    resetField("password");
    console.log(data);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <lable>
        Name: <input type="text" {...register("name")}></input>
        {errors.name && <span>{errors.name.message}</span>}
      </lable>
      <lable>
        Password: <input type="text" {...register("password")}></input>
        {errors.password && <span>{errors.password.message}</span>}
      </lable>

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default LoginForm;

import { useRef } from "react";

const UncontrolledUserForm = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    const result = {
      name,
      password
    }
    console.log(result);
    event.target.reset();

  };

  return (
    <form onSubmit={handleSubmit}>
      <lable>
        Name: <input type="text" name="name" ref={nameRef}></input>
      </lable>
      <lable>
        Password: <input type="text" name="password" ref={passwordRef}></input>
      </lable>

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default UncontrolledUserForm;

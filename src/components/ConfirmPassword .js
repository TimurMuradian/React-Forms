import { useState } from "react";

const ConfirmPassword = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = ({ target: { value, name } }) => {
    switch (name) {
      case "name": {
        setName(value);
        break;
      }

      case "password": {
        setPassword(value);
        break;
      }
      case "confirmPassword": {
        setConfirmPassword(value);
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length === 0) {
      setErrorMessage("This field is required!");
      return;
    } else if (password.trim().length<5) {
      setErrorMessage("Password length must be at least 5 characters");
      return;
    } else if (password !== confirmPassword) {
      setErrorMessage("Password don't match with field confirmPassword");
      return;
    }

    const data = {
      name,
      password
    };
    handleReset();
    return console.log(data);
    
  };
    const handleReset = () => {
      setName("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <lable>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleClick}
        ></input>
      </lable>

      <lable>
        Password:{" "}
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleClick}
        ></input>
      </lable>

      <lable>
        Confirm password:{" "}
        <input
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleClick}
        ></input>
      </lable>

      {errorMessage && <div>{errorMessage}</div>}

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default ConfirmPassword;

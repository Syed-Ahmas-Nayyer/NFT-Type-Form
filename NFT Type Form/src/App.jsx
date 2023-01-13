import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Complaint Number",
      type: "text",
      placeholder: "Enter Complaint Number",
      errorMessage:
        "Complaint Number should be 3-16 characters and shouldn't include any special character!",
      label: "Complaint Number",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Complaint Name",
      type: "Complaint Name",
      placeholder: "Complaint Name",
      errorMessage: "It should be a valid Complaint Name!",
      label: "Complaint Name",
      required: true,
    },
    {
      id: 3,
      name: "Complaint Address",
      type: "text",
      placeholder: "Complaint Address",
      label: "Complaint Address",
    },
    {
      id: 4,
      name: "Incident",
      type: "Incident",
      placeholder: "Incident",
      errorMessage:
        "Incident should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Incident",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "Time of Incident",
      type: "Time of Incident",
      placeholder: "Time of Incident",
      errorMessage: "Time of Incident don't match!",
      label: "Time of Incident",
      pattern: values.password,
      required: true,
    },
    {
      id: 6,
      name: "Invovled People",
      type: "Invovled People",
      placeholder: "Invovled People",
      errorMessage: "Invovled People don't match!",
      label: "Invovled People",

    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Police Complaint System</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <button>Connect Wallet</button>
      </form>
    </div>
  );
};

export default App;

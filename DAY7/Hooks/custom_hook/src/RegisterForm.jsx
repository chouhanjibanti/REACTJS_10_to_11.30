import React from "react";
import UseInput from "./UseInput";

function RegisterForm() {
  const email = UseInput();
  const password = UseInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email : ${email.value} , Password : ${password.value}`);
    email.reset();
    password.reset();
  };

  return (
    <>
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" {...email} />
          <input type="password" placeholder="Password" {...password} />
          <button type="submit">Register</button>
        </form>
      </>
    </>
  );
}

export default RegisterForm;

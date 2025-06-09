import React from "react";
import UseInput from "./UseInput";

function LoginForm() {
  const username = UseInput();
  const password = UseInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username : ${username.value} , Password : ${password.value}`);
    username.reset();
    password.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" {...username} />
        <input type="password" placeholder="Password" {...password} />
        <button type="submit">Submit</button>
        {/* <button type="reset">Reset</button> */}
      </form>
    </>
  );
}

export default LoginForm;

// ...rest   -> function argument     ...spread - copy data array object

//  function fruits(ar1 ,  ...rest)

//  fruits(kewn , wdejhfj , jehnwn , jfhdu ,nejfhwuj , ejfhjweb , ufheu)

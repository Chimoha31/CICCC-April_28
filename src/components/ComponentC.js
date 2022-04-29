import React, { useContext } from "react";
import { LoginContext } from "../context/Context";

const ComponentC= () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div
      style={{
        color: "red",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
      }}
    >
      This is ComponentC<button onClick={() => setLoggedIn(true)}>Click here to login</button>
      {loggedIn ? <h1>You are logged in </h1> : <h1>You are not Logged in</h1>}
    </div>
  );
};

export default ComponentC;

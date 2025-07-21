import React, { useState } from "react";

import LoginSection from "../../section/LoginSection";
import RegisterSection from "../../section/RegisterSection";
const Auth = () => {
  const [mode, setMode] = useState("login");
  return (
    <>
      {mode == "login" ? (
        <LoginSection setMode={setMode} />
      ) : (
        <RegisterSection setMode={setMode} />
      )}
    </>
  );
};

export default Auth;

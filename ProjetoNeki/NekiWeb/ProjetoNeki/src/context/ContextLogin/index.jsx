import React, { createContext, useEffect, useState } from "react";
export const ContextLoginUser = createContext(null);

export default function ContextLogin(props) {
    const [usuarioCON, setUsuarioCON] = useState("");

  return (
    <ContextLoginUser.Provider
      value={{
        usuarioCON,
        setUsuarioCON
      }}
    >
      {props.children}
    </ContextLoginUser.Provider>
  );
}
import React, { createContext, useContext, useState } from "react";
import { IData } from "./interfaces";

const MainContext = createContext<IData>({ data: { loginUser: "", setLoginUser: () => {} } });
export default function MainContextProvider({ children }:{children:React.ReactElement}) {
  const [loginUser, setLoginUser] = useState("");
  const data = {
    loginUser,
    setLoginUser,
  };
  return (<MainContext.Provider value={{ data }}>{children}</MainContext.Provider>);
}
export const useMainContext = () => useContext(MainContext);

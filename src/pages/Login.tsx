import React from "react";
import { useNavigate } from "react-router-dom";
import { useMainContext } from "../context";

export default function Login() {
  const context = useMainContext();
  const navigateTo = useNavigate();
  const { setLoginUser } = context.data;
  return (
    <div>
      <input
        placeholder="nickName"
        onChange={(e) => {
          setLoginUser(e.target.value);
        }}
      />
      <button type="submit" onClick={() => navigateTo("/main")}> Go! </button>
    </div>
  );
}

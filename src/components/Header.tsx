import React, { useEffect, useState } from "react";
import { useMainContext } from "../context";
import { getUser } from "../Service/User-Service";

export default function Header() {
  const [userInfo, setUserInfo] = useState([]);
  const context = useMainContext();
  const { loginUser } = context.data;
  const getUserInfo = async () => {
    const request = await getUser(loginUser);
    setUserInfo(request.data);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="header">
      {userInfo.name}
    </div>
  );
}

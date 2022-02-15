import React, { useEffect, useState } from "react";
import { useMainContext } from "../context";
import { getUserCharacterMasteries } from "../Service/User-Service";

export default function CharacterMasteries() {
  const context = useMainContext();
  const [masteries, setMasteries] = useState();
  const { loginUser } = context.data;

  const characterMasteries = async () => {
    const response = await getUserCharacterMasteries(loginUser);
    setMasteries(response.data);
  };
  useEffect(() => {
    characterMasteries();
  }, []);
  return (
    <div>
      {masteries}
    </div>
  );
}

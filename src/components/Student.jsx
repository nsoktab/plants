import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../App";

export default function Student() {
  const user = useContext(AuthUserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h2>{user.mood}</h2>
    </div>
  );
}

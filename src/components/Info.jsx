import { useContext } from "react";
import { AuthUserContext } from "../App";

export default function Info() {
  const user = useContext(AuthUserContext);

  return (
    <div
      style={{
        backgroundColor: "lightpink",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        alignItems: "bottom",
      }}
    >
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h2>{user.mood}</h2>
    </div>
  );
}

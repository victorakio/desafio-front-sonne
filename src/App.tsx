import { useEffect } from "react";
import { api } from "services/api";
import { makeServer } from "services/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  useEffect(() => {
    api.get("users").then((response) => console.log(response.data));
  }, []);

  return <h1>Hello</h1>;
}

export default App;

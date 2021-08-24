import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Tasks from "pages/Tasks";
import NotFound from "pages/NotFound";

import { api } from "services/api";
import { makeServer } from "services/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  useEffect(() => {
    api.get("users").then((response) => console.log(response.data));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

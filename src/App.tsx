import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "pages/Home";
import Tasks from "pages/Tasks";
import NotFound from "pages/NotFound";

import { api } from "services/api";
import { makeServer } from "services/server";
import { UsersProvider } from "hooks/useUsers";

import GlobalStyle from "styles/global";
import CreateUser from "pages/CreateUser";
import EditUser from "pages/EditUser";
import CreateTasks from "pages/CreateTasks";
import { TasksProvider } from "hooks/useTasks";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function App() {
  useEffect(() => {
    api.get("users").then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <UsersProvider>
        <TasksProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/users/create" component={CreateUser} />
              <Route path="/users/edit/:id" component={EditUser} />

              <Route path="/tasks" exact component={Tasks} />
              <Route path="/tasks/create" component={CreateTasks} />

              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </TasksProvider>
      </UsersProvider>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;

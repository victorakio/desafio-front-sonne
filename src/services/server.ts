import { createServer, Factory, Model, RestSerializer } from "miragejs";

type User = {
  id: string;
  name: string;
  email: string;
  tasks: [];
};

type Task = {
  id: string;
  title: string;
  description: string;
  userId: number;
  status: string;
};

export function makeServer() {
  return createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
      task: Model.extend<Partial<Task>>({}),
    },

    serializers: {
      application: RestSerializer,
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `Usuário ${i + 1}`;
        },
        email(i: number) {
          return `usuario${i + 1}@email.com`;
        },
      }),

      task: Factory.extend({
        title(i: number) {
          return `Tarefa ${i + 1}`;
        },
        description(i: number) {
          return `Descrição placeholder feita especialmente para a tarefa ${
            i + 1
          }`;
        },
        user() {
          return Math.floor(Math.random() * 10 + 1);
        },
        status() {
          return "inProgress";
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
      server.createList("task", 10);
    },

    routes() {
      this.namespace = "api";

      this.timing = 750;

      this.get("/users");

      this.get("/users/:id");

      this.post("/users", (schema, request) => {
        let newUser = JSON.parse(request.requestBody);

        return schema.create("user", newUser);
      });

      this.patch("/users/:id", (schema: any, request) => {
        let editedUser = JSON.parse(request.requestBody);
        let id = request.params.id;
        let user = schema.find("user", id);

        return user?.update(editedUser);
      });

      this.del("/users/:id");

      this.get("/tasks");

      this.post("/tasks", (schema, request) => {
        let newTask = JSON.parse(request.requestBody);

        return schema.create("task", newTask);
      });

      this.del("/tasks/:id");
    },
  });
}

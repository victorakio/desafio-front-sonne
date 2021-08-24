import { createServer } from "miragejs";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/users", () => {
        return [
          {
            id: 1,
            name: "User 1",
            email: "user1@email.com",
          },
        ];
      });
    },
  });
}

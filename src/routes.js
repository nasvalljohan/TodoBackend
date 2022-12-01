// create routes for GET POST DELETE
import * as controller from "./controllers.js";
import * as schema from "./schemas.js";

async function TodoRoutes(server) {
  server.route({
    method: "GET",
    url: "/todos",
    schema: schema.GetTodoSchema,
    handler: controller.GetTodosController,
  });

  server.route({
    method: "POST",
    url: "/todos",
    schema: schema.PostTodoSchema,
    handler: controller.PostTodosController,
  });

  server.route({
    method: "DELETE",
    url: "/todos",
    schema: schema.DeleteTodoSchema,
    handler: controller.DeleteTodosController,
  });
}

export default TodoRoutes;

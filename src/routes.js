// create routes for GET POST DELETE
import * as controller from "./controllers.js";
import * as schema from "./schemas.js";

async function TodoRoutes(server) {
  //get..
  server.route({
    method: "GET",
    url: "/todos",
    schema: schema.GetTodoSchema,
    handler: controller.GetTodosController,
  });

  server.route({
    //post new..
    method: "POST",
    url: "/todos",
    schema: schema.PostTodoSchema,
    handler: controller.PostTodosController,
  });

  server.route({
    //delete..
    method: "DELETE",
    url: "/todos",
    schema: schema.DeleteTodoSchema,
    handler: controller.DeleteTodosController,
  });

  server.route({
    //edit..
    method: "PUT",
    url: "/todos",
    handler: controller.EditTodosController,
    schema: schema.EditTodoSchema,
  });
}

export default TodoRoutes;

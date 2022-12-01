// Create handlers for methods GET POST DELETE todos.

export async function GetTodosController(request, response) {
  try {
    const { Todo } = request.db.models;
    const todos = await Todo.find({});
    return todos;
  } catch (error) {}
}

export async function PostTodosController(request, response) {
  try {
    const { Todo } = request.db.models;

    await Todo.create(request.body);

    response.status(201);

    return { success: true, message: "Todo created" };
  } catch (error) {
    response.log.error(error);
    await response.status(500).send("Error occurred!!");
  }
}

export async function DeleteTodosController(request, response) {
  try {
    const { Todo } = request.db.models;

    await Todo.deleteOne({
      title: request.body.title,
    });

    response.status(201);

    return { success: true, message: "Todo created" };
  } catch (error) {
    response.log.error(error);
    await response.status(500).send("Error occurred!!");
  }
}

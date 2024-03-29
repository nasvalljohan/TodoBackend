export const GetTodoSchema = {
  response: {
    200: {
      description: "List of all todos",
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { description: "Title of todo", type: "string" },
          content: { description: "Content of todo", type: "string" },
        },
      },
    },
  },
};

export const PostTodoSchema = {
  body: {
    type: "object",
    required: ["title", "content"],
    properties: {
      title: { description: "Title of todo", type: "string" },
      content: { description: "Content of todo", type: "string" },
    },
  },
  response: {
    201: {
      description: "Success response",
      type: "object",
      properties: {
        message: { type: "string" },
        success: { type: "boolean" },
      },
    },
  },
};

export const DeleteTodoSchema = {
  body: {
    type: "object",
    required: ["title"],
    properties: {
      title: { description: "Title of the todo to remove", type: "string" },
    },
  },
  response: {
    200: {
      description: "Delete status",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};

export const EditTodoSchema = {
  body: {
    type: "object",
    required: ["title"],
    properties: {
      title: { description: "Title of the todo to remove", type: "string" },
    },
  },
  response: {
    200: {
      description: "Delete status",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};

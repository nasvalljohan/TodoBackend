import mongoose from "mongoose";
import fp from "fastify-plugin";
import Todo from "../model/Todo.js";

//Fastify plugin, registrera detta i vår server, på samma sätt som routes.
async function database(server, options) {
  try {
    mongoose.connection.on("connected", () => {
      server.log.info({ actor: "MongoDB" }, "connected!!");
    });

    mongoose.connection.on("disconnected", () => {
      server.log.info({ actor: "MongoDB" }, "Disconnected!!");
    });

    await mongoose.connect(
      "mongodb+srv://johannasvall:qI0uYji8KY92qAdE@cluster0.uxxgfmh.mongodb.net/?retryWrites=true&w=majority"
    );

    const models = { Todo };

    //Detta är en middleware
    server.addHook("onRequest", async (request, response) => {
      request.db = { models };
    });
  } catch (error) {}
}

export default fp(database);

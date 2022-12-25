import Fastify from "fastify";
import TodoRoutes from "./routes.js";
import * as dontenv from "dotenv";
dontenv.config();
import environment from "./utils/environment.js";
import db from "./utils/db.js";

// create instance
const server = Fastify({
  logger: true,
  pluginTimeout: 20000,
});

async function start() {
  await server.register(TodoRoutes);
  await server.register(db);

  await server.listen({ port: environment.PORT, host: "0.0.0.0" });

  try {
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

start();

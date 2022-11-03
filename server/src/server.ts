import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import fastifyCors from "@fastify/cors";

const prisma = new PrismaClient({
  log: ["query"],
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(fastifyCors, {
    origin: true
  });

  fastify.get("/", (request, reply) => {
    reply.status(200).send("Hello world!");
  });

  fastify.get("/pools/count", async () => {
    const count = prisma.pool.count();

    return { count };
  });

  await fastify.listen({
    port: 3333,
    host: "0.0.0.0",
  });
}

bootstrap();

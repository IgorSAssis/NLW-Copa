"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
async function bootstrap() {
    const fastify = (0, fastify_1.default)({
        logger: true,
    });
    fastify.get("/", (request, reply) => {
        reply.status(200).send("Hello world!!");
    });
    await fastify.listen({
        port: 3333,
        host: "0.0.0.0"
    });
}
bootstrap();

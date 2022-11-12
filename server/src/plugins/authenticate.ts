import { FastifyRequest } from "fastify";

export async function authenticate(request: FastifyRequest) {
    console.log(request.headers);

    await request.jwtVerify();
}
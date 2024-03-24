import http from "http";
import { TodolistService } from "./todolist-service.mjs"


const service = new TodolistService();
const server = http.createServer((request, response) => {

    response.setHeader("Content-type", "application/json");

    // jika request adalah get
    if (request.method === 'GET') {
        service.getTodolist(request, response);
    }

    // response.write('TODOLIST API');
    // response.end();
})

server.listen(3000);
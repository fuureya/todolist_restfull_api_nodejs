export class TodolistService {


    todolist = ["belajar", "node", "js"];

    // ini untuk menampilkan atau GET HTTP
    getJsonTodolist() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })
    }

    // ini untuk menampilkan atau GET HTTP
    getTodolist(request, response) {
        response.write(this.getJsonTodolist());
        response.end();
    }

    // di sini untuk create todo
    createTodo(request, response) {
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            response.write(this.getJsonTodolist());
            response.end();
        })
    }
}
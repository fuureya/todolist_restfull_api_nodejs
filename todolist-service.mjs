export class TodolistService {


    todolist = ["belajar", "node", "js"];

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

    getTodolist(request, response) {
        response.write(this.getJsonTodolist());
        response.end();
    }
}
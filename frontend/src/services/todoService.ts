const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;

export const loadTodos = () => {
    return fetch(baseUrl).then((res) => res.json());
}

export const getTodos = (id: string ) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
}

export const createTodo = (todo: any) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed
        }),
    }).then((res) => res.json());
}

export const updateTodo = (todo: any) => {
    return fetch(`${baseUrl}/${todo.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }),
    }).then((res) => res.json());
}

export const deleteTodo = (id: string ) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    }).then((res) => res.json());
}
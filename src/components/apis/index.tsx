import {Ttodo} from "@/components/types";

export const fetchHashtags = async (): Promise<string[]> => {
    const response = await fetch("http://localhost:8080/1.0/todo/hashtags");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

export const fetchCategories = async (): Promise<string[]> => {
    const response = await fetch("http://localhost:8080/1.0/todo/categories");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

export const fetchTodos = async (): Promise<Ttodo[]> => {
    const response = await fetch("http://localhost:8080/1.0/todo/all");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    } else {
        console.log("Fetch data!");
    }
    return response.json();
};

export const updateTodo = async (todo: Ttodo): Promise<void> => {
    const response = await fetch(`http://localhost:8080/1.0/todo/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    if (!response.ok) {
        throw new Error("Failed to update todo");
    } else {
        console.log(response);
    }
    return;
};


export const addTodo = async (todo: Ttodo): Promise<void> => {
    const response = await fetch("http://localhost:8080/1.0/todo/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    if (!response.ok) {
        throw new Error("Failed to add todo");
    }
    return;
};
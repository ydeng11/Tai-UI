import TodoItem from "@/components/display/todoItem";
import useStore from "@/components/stores/todoStore";
import {useTodosQuery} from "@/components/hooks";
import {useEffect, useState} from "react";
import {Ttodo} from "@/components/types";

const TodoList = () => {
    const { data } = useTodosQuery()
    const [todos, setTodos] = useState<Ttodo[]>([]);
    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data]);

    const {categoryFilter, hashtagFilter} = useStore();
    const filteredTodos = todos
        .filter((todo) => (categoryFilter.category === 'All' || todo.category.toLowerCase() === categoryFilter.category.toLowerCase()))
        .filter((todo) => (hashtagFilter.hashtag === 'All' || todo.hashtags.includes(hashtagFilter.hashtag.toLowerCase())))
        .filter((todo) => todo.isDeleted === 0);

    return (
        <div className="p-4 w-full">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    );
};

export default TodoList;

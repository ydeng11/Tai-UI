import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Ttodo } from "@/components/types";
import { Button } from "@/components/ui/button.tsx";
import styles from "./index.module.css";
import { useTodoMutations } from "@/components/hooks/useTodoMutations.tsx";
import useStore from "@/components/stores/todoStore";

function handleDelete(todo: Ttodo, incrementCount: () => void, updateTodoMutation: (todo: Ttodo) => void) {
    incrementCount();
    updateTodoMutation({ ...todo, isDeleted: 1 });
}

export default function TodoItem(props: Ttodo) {
    const { incrementCount } = useStore();
    const { updateTodoMutation } = useTodoMutations();
    const [isMouseIn, setIsMouseIn] = useState(false);

    return (
        <li className="flex items-center p-2.5 bg-white rounded shadow-sm mb-2.5"
            onMouseEnter={() => setIsMouseIn(true)}
            onMouseLeave={() => setIsMouseIn(false)}>
            <Checkbox
                id="completed"
                checked={props.isDone === 1}
                onCheckedChange={() => {
                    incrementCount();
                    updateTodoMutation({ ...props, isDone: props.isDone === 1 ? 0 : 1 });
                }}
            />
            <span className={`${styles.text} ${props.isDone === 1 ? styles.completed : ''}`}>
        {props.content}
      </span>
            <Button
                variant="outline"
                onClick={() => {
                    handleDelete(props, incrementCount, updateTodoMutation);
                }}
                style={{ display: isMouseIn ? "block" : "none" }}>
                Delete
            </Button>
        </li>
    );
}

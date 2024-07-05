import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addTodo, updateTodo} from "@/components/apis";

export const useTodoMutations = () => {
    const queryClient = useQueryClient();

    const {mutate: addTodoMutation} = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            console.log("updateTodoMutation success");
            queryClient.invalidateQueries({queryKey : ['todos'],}).then(() => {return});
        },
        onMutate: () => {
            console.log("updateTodoMutation onMutate");
        },
        onError: (error) => {
            console.error("addTodoMutation onError", error);
        },
        onSettled: () => {
            console.log("updateTodoMutation onSettled");
        },
    });

    const {mutate: updateTodoMutation} = useMutation({
        mutationFn:updateTodo,
        onSuccess: () => {
            console.log("updateTodoMutation success");
            queryClient.invalidateQueries({queryKey : ['todos']}).then(() => {return});
        },
        onMutate: () => {
            console.log("updateTodoMutation onMutate");
        },
        onError: (error) => {
            console.error("addTodoMutation onError", error);
        },
        onSettled: () => {
            console.log("updateTodoMutation onSettled");
        },
    });

    return { addTodoMutation, updateTodoMutation };
};

import { useQuery } from "@tanstack/react-query";
import { Ttodo } from "@/components/types";
import {fetchCategories, fetchHashtags, fetchTodos} from "@/components/apis";

export const useHashtagsQuery = () => {
    return useQuery<string[]>({
        queryKey: ['todos', 'hashtags'],
        queryFn: fetchHashtags,
        initialData: [],
    });
};

export const useCategoriesQuery = () => {
    return useQuery<string[]>({
        queryKey: ['todos', 'categories'],
        queryFn: fetchCategories,
        initialData: [],
    });
};

export const useTodosQuery = () => {
    return useQuery<Ttodo[]>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        initialData: [],
    });
};

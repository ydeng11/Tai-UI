import {create} from "zustand";

export type CategoryFilter = {
    category: string;
}

export type HashtagFilter = {
    hashtag: string;
}

export type TodoState = {
    count: number
    incrementCount: () => void;
    categoryFilter: CategoryFilter;
    hashtagFilter: HashtagFilter;
    setCategoryFilter: (categoryFilter: CategoryFilter) => void;
    setHashtagFilter: (hashtagFilter: HashtagFilter) => void;
};

const useStore = create<TodoState>((set) => ({
    count: 0,
    incrementCount: () => set((state) => ({count: state.count + 1})),
    todos: [],
    categoryFilter: {category: 'All'},
    hashtagFilter: {hashtag: 'All'},
    setCategoryFilter: (categoryFilter: CategoryFilter) => set(() => ({categoryFilter})),
    setHashtagFilter: (hashtagFilter: HashtagFilter) => set(() => ({hashtagFilter})),
}));

export default useStore;
import { create } from "zustand";

export const useTodosStore = create((set) => ({
  newTodos: [],
  allTodos: [],
  setNewTodos: (todos) => set({ newTodos: todos }),
  clearNewTodos: () => set({ newTodos: [] }),
  addInAllTodos: (todos) =>
    set((state) => ({ allTodos: [...state.allTodos, ...todos] })),
  addNewTodo: (todo) =>
    set((state) => ({ newTodos: [...state.newTodos, todo] })),
}));

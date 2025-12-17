import { create } from 'zustand';
import axios from 'axios';

const BASE_URL = "https://dummyjson.com";

export const useTodoStore = create((set, get) => ({
  todos: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  limitPerPage: 10,
  searchTerm: "",

  setSearchTerm: (term) => set({ searchTerm: term }),

  fetchTodos: async () => {
    const { limitPerPage, currentPage } = get();
    set({ isLoading: true, error: null });
    try {
      const skip = (currentPage - 1) * limitPerPage;
      const res = await axios.get(`${BASE_URL}/todos?limit=${limitPerPage}&skip=${skip}`);
      const mapped = res.data.todos.map((t) => ({
        id: t.id, text: t.todo, completed: t.completed, isLocal: false,
      }));
      set({ todos: mapped, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  addTodo: (text) => {
    const newTodo = { id: Date.now(), text, completed: false, isLocal: true };
    set((state) => ({ todos: [newTodo, ...state.todos] }));
  },

  deleteTodo: (id) => {
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) }));
  },

  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)
    }));
  },

  goToNextPage: () => {
    const { currentPage } = get();
    set({ currentPage: currentPage + 1 });
    get().fetchTodos();
  },

  goToPrevPage: () => {
    const { currentPage } = get();
    if (currentPage > 1) {
      set({ currentPage: currentPage - 1 });
      get().fetchTodos();
    }
  }
}));
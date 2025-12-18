import { create } from 'zustand';
import axios from 'axios';

const BASE_URL = "https://dummyjson.com";

export const useTodoStore = create((set, get) => ({
  todos: [],
  localTodos: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  limitPerPage: 10,
  searchTerm: "",
  totalTodos: 0,

  setSearchTerm: (term) => set({ searchTerm: term }),

  fetchTodos: async () => {
    const { limitPerPage, currentPage, localTodos } = get();
    set({ isLoading: true, error: null });
    try {
      const skip = (currentPage - 1) * limitPerPage;
      const res = await axios.get(`${BASE_URL}/todos?limit=${limitPerPage}&skip=${skip}`);
      const mapped = res.data.todos.map((t) => ({
        id: t.id, text: t.todo, completed: t.completed, isLocal: false,
      }));
      set({
        todos: [...localTodos, ...mapped],
        totalTodos: res.data.total,
        isLoading: false
      });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  addTodo: (text) => {
    const newTodo = { id: Date.now(), text, completed: false, isLocal: true };
    set((state) => ({
      localTodos: [newTodo, ...state.localTodos],
      todos: [newTodo, ...state.todos]
    }));
  },

  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
      localTodos: state.localTodos.filter((t) => t.id !== id)
    }));
  },

  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
      localTodos: state.localTodos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    }));
  },

  updateTodo: (id, newText) => {
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      ),
      localTodos: state.localTodos.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    }));
  },

  goToNextPage: () => {
    const { currentPage, totalTodos, limitPerPage } = get();
    const maxPage = Math.ceil(totalTodos / limitPerPage);
    if (currentPage < maxPage) {
      set({ currentPage: currentPage + 1 });
      get().fetchTodos();
    }
  },

  goToPrevPage: () => {
    const { currentPage } = get();
    if (currentPage > 1) {
      set({ currentPage: currentPage - 1 });
      get().fetchTodos();
    }
  }
}));
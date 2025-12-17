# Student Portfolio

Веб-застосунок (SPA) портфоліо студента, що демонструє навички роботи з сучасним стеком React.

## Технологічний стек

- **React 18+** з Vite
- **React Router DOM v6** для маршрутизації
- **Chakra UI** для компонентів та темної теми
- **Zustand** для управління глобальним станом
- **Axios** для HTTP запитів
- **React Icons** для іконок

## Функціональність

### Сторінки

1. **Головна (Home)** - привітання та опис проєкту
2. **Лабораторні (Labs)** - список виконаних лабораторних робіт з посиланнями
3. **Todo App** - повнофункціональний список завдань

### Todo App функціонал

- Завантаження завдань з API (dummyjson.com/todos)
- Додавання локальних завдань
- Видалення завдань
- Редагування тексту завдань (клік на текст або кнопка редагування)
- Відмітка виконано/не виконано
- Пошук/фільтрація завдань
- Пагінація для API завдань
- Збереження стану при переході між сторінками (Zustand)

## Дизайн

- Неоново-зелений та ціановий кольори
- Підтримка світлої та темної теми
- Адаптивний дизайн
- Мінімізація ререндерингу через memo та useMemo

## Запуск проєкту

```bash
# Встановлення залежностей
npm install

# Запуск dev сервера
npm run dev

# Збірка для продакшн
npm run build
```

## Структура проєкту

```
src/
├── components/      # Перевикористовувані компоненти
│   ├── Navbar.jsx
│   ├── TodoItem.jsx
│   ├── TodoForm.jsx
│   ├── SearchBar.jsx
│   └── Pagination.jsx
├── pages/          # Сторінки застосунку
│   ├── Home.jsx
│   ├── Labs.jsx
│   └── TodoPage.jsx
├── store/          # Zustand store
│   └── useTodoStore.js
├── theme.js        # Кастомна тема Chakra UI
├── App.jsx
└── main.jsx
```

## Дерево компонентів

```mermaid
classDiagram
  class App {
    renders Navbar, Routes
    routes: Home, Labs, TodoPage
  }

  class Navbar {
    state: colorMode
    uses useLocation
    renders navigation buttons, theme toggle
  }

  class Home {
    state: colorMode
    renders welcome content
  }

  class Labs {
    state: activeTab, colorMode
    renders Tabs, iframes for labs
  }

  class TodoPage {
    uses useTodoStore
    renders SearchBar, TodoForm, TodoItem[], Pagination
  }

  class useTodoStore {
    state: todos[], localTodos[], isLoading, error
    state: currentPage, limitPerPage, totalTodos
    state: searchTerm
    methods: fetchTodos, addTodo, deleteTodo, toggleTodo, updateTodo
    methods: setSearchTerm, goToNextPage, goToPrevPage
  }

  class TodoForm {
    props: onSubmit
    renders form with input and submit button
  }

  class SearchBar {
    props: value, onChange, placeholder
    renders search input
  }

  class TodoItem {
    state: isEditing, editText
    props: todo, onToggle, onDelete, onUpdate
    renders checkbox, text/input, edit/delete buttons
  }

  class Pagination {
    props: currentPage, onPrev, onNext, hasNext
    renders prev/next buttons, page number
  }

  App --> Navbar
  App --> Home
  App --> Labs
  App --> TodoPage
  TodoPage --> useTodoStore : hook
  TodoPage --> SearchBar : value, onChange ↓
  TodoPage --> TodoForm : onSubmit ↓
  TodoPage --> TodoItem : todo, onToggle, onDelete, onUpdate ↓
  TodoPage --> Pagination : currentPage, onPrev, onNext, hasNext ↓
  TodoForm ..> TodoPage : onSubmit(text) ↑
  SearchBar ..> TodoPage : onChange(term) ↑
  TodoItem ..> TodoPage : onToggle(id), onDelete(id), onUpdate(id, newText) ↑
  Pagination ..> TodoPage : onPrev(), onNext() ↑
```

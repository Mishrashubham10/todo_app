import { TodoItem } from "./TodoItem";

export function TodoLists({ todos, toggleTodo, deleteTodo }) {
    
  return (
    <ul className="lists">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            { ...todo }
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

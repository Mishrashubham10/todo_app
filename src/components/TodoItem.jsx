export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li key={id}>
          <label htmlFor="checkbox">
            <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
            {title}
          </label>
          <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}
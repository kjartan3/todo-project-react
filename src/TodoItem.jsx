export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={e => toggleTodo(id, e.target.checked)} 
        />
        {title}
      </label>
      {/* call a function (deleteTodo) = () pass a function through like below */}
      <button 
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  )
}
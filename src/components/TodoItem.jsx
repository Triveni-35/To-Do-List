import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <div>
        <button className="complete" onClick={() => toggleComplete(index)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="remove" onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </li>
  );
}

export default TodoItem;

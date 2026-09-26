import { useState } from 'react';
import styles from '../styles/Todo.module.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue.trim(), completed: false }
    ]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const remainingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Todo Application</h2>
        <p className={styles.stats}>Remaining items: {remainingCount}</p>
      </div>
      
      <form onSubmit={handleAddTodo} className={styles.inputGroup}>
        <input
          type="text"
          className={styles.input}
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={styles.addBtn}>Add</button>
      </form>

      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                className={`${styles.todoText} ${todo.completed ? styles.completedText : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
            </div>
            <button className={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <li style={{ textAlign: 'center', color: '#888', padding: '1rem' }}>No todos yet!</li>
        )}
      </ul>
    </div>
  );
}

export default Todo;

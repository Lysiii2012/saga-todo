import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest, addTodo, clearTodos, removeTodo, toggleTodo } from '../../actions/todoActions';

const AddTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [task, setTask] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => { 
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (task.trim() && users.length > 0) { 
      const randomUser = users[Math.floor(Math.random() * users.length)];

      const newTodo = {
        id: Date.now(),
        name: `${randomUser.name}: ${task}`,  
        completed: false,
      };

      dispatch(addTodo(newTodo));
      setTask('');  
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Todos</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.name}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;

import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Title from './components/Title/Title';

function App() {
  // Ensure the path to the users array matches your reducer setup
  const users = useSelector((state) => state.users) || [];

  // Add a check to prevent mapping over undefined
  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Title text="Todo List" type="primary" />
      <AddTodo /> 
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
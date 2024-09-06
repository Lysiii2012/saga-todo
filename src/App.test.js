import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
      </div>
    </Provider>
  );
}

export default App;

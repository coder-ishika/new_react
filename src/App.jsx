import { useState } from 'react';
import "./App.css"
import AppName from './components/AppName';
import AppTodo from './components/AddTodo';
import TodoItem1 from './components/TodoItem1';
import TodoItem2 from './components/TodoItem2';

function App() {
  return (
    <>
    <center className="todo_container">
      <AppName/>
      <AppTodo/>
      <div className='items_container'>
      <TodoItem1/>
      <TodoItem2/>
      </div>
    </center>
    </>
  )
}

export default App;

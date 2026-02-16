import logo from './logo.svg';
import './App.css';

import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React from 'react';
import { useState } from 'react';
import Addtask from './MyComponents/Addtask';
import { json } from 'react-router-dom';

function App() {
  todos = JSON.parse(localStorage.getItem("tasks"));

  const onDelete = (todo) => {


    setTodos(todos.filter((e) => {
      return e !== todo;

    }))
  }

  const addTodo = (name, desc) => {
    let sl;
    if (todos.length === 0) {
      sl = 1;
    }
    else {

      sl = todos[todos.length - 1].sl + 1;
    }

    const mytodo = {
      sl: sl,
      task_name: name,
      desc: desc
    }

    


    setTodos([...todos, mytodo]);
    // console.log(mytodo);
    localStorage.setItem("tasks",JSON.stringify(todos));
  }

  

  const [todos, setTodos] = useState([
    

  ]);


  return (
    <>
      <Header title="To-Do-List" searchBar={true} />
      <Addtask addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>

  );
}

export default App;



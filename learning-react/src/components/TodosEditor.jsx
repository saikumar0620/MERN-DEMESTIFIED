import React, { useState } from 'react'
import useTodoStore from '../stores/useTodoStore';


const TodosEditor = () => {
  const [todoText,setTodos]=useState("");
const createTodo=  useTodoStore((state)=>(state.createTodos))

  const handleTodoTextChange=(event)=>{
    setTodos(event.target.value)
  }
  const handleTodoSubmission=(event)=>{
    // createTodo(todoText);
    // setTodos("") these lines or below code both same for this use case use only
    try {
      event.preventDefault();
      createTodo(todoText);
    } catch (error) {
      console.error(error)
    }finally{
      setTodos("")
    }
  }

  return (
      <form onSubmit={handleTodoSubmission}>
        <input value={todoText} onChange={handleTodoTextChange} type="text" />
        <button type="submit">Add Todos</button>
      </form>
  )
}

export default TodosEditor
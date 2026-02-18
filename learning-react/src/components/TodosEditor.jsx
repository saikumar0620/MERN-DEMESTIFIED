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
      <form className='flex ' onSubmit={handleTodoSubmission}>
        <input className='rounded-2xl  border border-red-300 bg-red-50 text-black p-3 ' value={todoText} onChange={handleTodoTextChange} type="text" />
        <button className='bg-red-500 rounded-2xl p-3 text-white' type="submit">Add Todos</button>
      </form>
  )
}

export default TodosEditor
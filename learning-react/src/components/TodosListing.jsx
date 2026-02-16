import { useEffect } from 'react'
import useTodoStore from '../stores/useTodoStore.js'

const TodosListing = () => {
  const todos=useTodoStore((state)=> state.todos)
  // console.log(todos)
  return (
    <div>
      {
        todos.map((todo,index)=>(
        <h1 key={index}>{todo}</h1>))
        }
       
      
    </div>
  )
}

export default TodosListing
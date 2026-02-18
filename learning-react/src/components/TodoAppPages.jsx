import React from 'react'
import TodosEditor from './TodosEditor'
import TodosListing from './TodosListing'

const TodoAppPages = () => {
  return (
    <div className='flex flex-col items-center justify-center p-6 gap-3'  >
    <TodosEditor/>
    <TodosListing/>
    </div>
  )
}

export default TodoAppPages
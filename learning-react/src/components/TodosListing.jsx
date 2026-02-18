import { useEffect, useState } from 'react'
import useTodoStore from '../stores/useTodoStore.js'
import AppWriteTablesDb from '../Appwrite-services/AppWriteTablesDb.js';


const TodosListing = () => {
  const appwriteTableDb=new AppWriteTablesDb();
  const [todos,setTodos]=useState([])
  const fetchAllTodos = async() => {
    try {
      const data= await appwriteTableDb.getAllRecords("6993e54e00086bd0968d","todos");
      console.log(data)
      setTodos(data)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(()=>{
    fetchAllTodos();
  },[])
  return (
    <div className='flex flex-col items-center gap-3'>
      {
        todos.map((todo)=>(
          <article key={todo?.$id} className='p-3 bg-amber-500 rounded-b-md shadow-md'>
            <h2 className='font-semibold text-2xl'>{todo.text_title}</h2>
            <p>{todo.decription}</p>
          </article>
      ))
        }
       
      
    </div>
  )
}

export default TodosListing
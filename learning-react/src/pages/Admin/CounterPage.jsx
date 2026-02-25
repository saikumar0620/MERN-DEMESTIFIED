import React, { useReducer } from 'react';

// 1. Initial State here we have a count property initialized to 0
const initialState = { count: 0 };


function reducer(state, action) {
  switch (action.type) {
    case 'increment': 
    return { count: state.count + 1 };
    case 'decrement': 
    return { count: state.count - 1 };
    case 'reset': 
    return { count: 0 };
    default: throw new Error("Unsupported action");
  }
}


 export default function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <p className='text-2xl font-bold'>Count: {state.count}</p>
      {/* Dispatch actions to update state */}
      <button className='bg-blue-400 text-2xl p-3 rounded-2xl' onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button className='bg-blue-400 text-2xl p-3 rounded-2xl' onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button className='bg-blue-400 text-2xl p-1 rounded-2xl' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

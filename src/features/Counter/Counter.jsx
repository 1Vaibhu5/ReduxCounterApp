import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button style={{color:"red",border:"2px solid black"}}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
        <span style={{margin:"10px",border:"2px solid black",fontSize:"1.5rem",width:"20px"}}>{count}</span>
        <button style={{color:"red",border:"2px solid black"}}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement -
        </button> 
        <button style={{margin:"10px",background:"red",border:"3px solid black"}}
          aria-label="Reset"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

import React from 'react'
import { useCount } from '../hooks/UseCount'

export const Page3 = () => {
  const {count,incrementar,decrementar} = useCount();

  return (
    <div><h1>Page3</h1>
    <h1>El contador  es {count}</h1>
    <button onClick ={()=> incrementar()}>Incrementar</button>
    <button onClick ={()=> decrementar()}>Decrementar</button>
    </div>
  )
}

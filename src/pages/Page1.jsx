import React from 'react'
import { useCount } from '../hooks/UseCount'
import { Test } from '../components/Test';

export const Page1 = () => {
  const {count,incrementar,decrementar} = useCount();
  
  return (
    <div><h1>Page1</h1>
    <h1>El contador  es {count}</h1>
    <button onClick ={()=> incrementar()}>Incrementar</button>
    <button onClick ={()=> decrementar()}>Decrementar</button>

    <Test title={"Soy el componente test llamado desde Page1 y el contador vale "} />
    </div>
  )
}

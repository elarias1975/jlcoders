import { createContext, useState } from "react";

export const CountContext = createContext();

export const CountProvider = (props) => {
    const [count,setCount]= useState(0);

    const incrementar =()=> {
        setCount(count+1);
    }

    const decrementar = () => {
        setCount (count -1);
    }

    const value = {
        count,
        setCount,
        incrementar,
        decrementar
    }

    return <CountContext.Provider value ={value} {...props}/>;

};
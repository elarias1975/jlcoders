import { useContext } from "react";
import { CountContext } from "../context/CountContext";

export function useCount (){
    const context = useContext(CountContext);

    if (!context) {
        throw new Error("useCount debe estar dentro del Proveedor");
        
    }
    return context;
};
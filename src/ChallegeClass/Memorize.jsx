import React,{useState} from "react";
import{ useCounter} from '../Hooks/useCounter'
import{ Small } from './Small';

export const Memorize = () =>{
const {counter,increment} = useCounter(10);
const [first, setFirst]= useState(10);

return(
    <>
    <h1>Memorize<Small value={counter} /></h1>
    <hr/>

    <button
       className="btn btn primary"
       onClick={()=> increment()}
    >
        +1
    </button>

    <button
    className="btn btn primary"
    onClick={()=> setFirst(20)}
    >
    +1
    </button>
    </>
)
}
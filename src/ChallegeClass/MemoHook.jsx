import React, { useState, useMemo } from "react";
import { useCounter } from "../";
import { Small } from "./Small";

const heavyStuff = ( iterations ) => {
    for( let i = 0; i < iterations; i++ ){
        console.log('Vamos en ', i);
    }

    return `${ iterations } realizadas` 
}

export const MemoHook = () => {
    const { counter, increment, decrement } = useCounter(10);

    const memo = useMemo(() => heavyStuff(counter), [ counter ])

    return (
        <>
            <h1>Memo Hook <Small value={counter} /> </h1>
            <hr />

            <h4> { memo } </h4>
            <h4> { memo } </h4>

            <button 
                className="btn btn-primary"
                onClick={() => increment() }
            >
                +1
            </button>

            <button 
                className="btn btn-primary"
                onClick={() => decrement() }
            >
                -1
            </button>
        </>
    )
}
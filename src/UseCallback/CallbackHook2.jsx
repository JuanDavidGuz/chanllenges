import { useState, useCallback } from "react";
import { ShowIncrement2 } from './ShowIncrement2';

export const CallbackHook2 = () => {

    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        ( c ) => {
            console.log('calling setcounter', c)
            setCounter( (value) => value + c )
        },
        [],
    )


    return (
    <>
        <div>Callback { counter }</div>

        <ShowIncrement incrementFather={incrementFather} />
    </>
    )
}
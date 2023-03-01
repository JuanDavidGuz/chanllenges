import { useState } from 'react';
import '../App.css'

export const Counter = ({value}) => {

    const [counter, setCounter] = useState( value )

    const handleAdd = () => {
        setCounter( counter + 1)
    }

    const handleSubsstract = () => {
      setCounter ( counter - 1)
    }

    const jandelRisit = () => {
      setCounter ( value )
    }

    return (
      <>
        <h1>Counter</h1>
        <h2> {counter} </h2>
        <div>
          <button onClick={() => handleAdd()}> +1 </button>
          <button onClick={() => handleSubsstract()}> -1 </button>
          <button onClick={() => jandelRisit()}> reset </button>
        </div>
      </>
    )
}

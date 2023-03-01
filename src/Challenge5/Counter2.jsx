import { useCounter } from '../Hooks/useCounter'
import '../App.css'

export const Counter2 = ({value}) => {

   const {counter, increment, decrement, reset} = useCounter( value )

    return (
      <>
        <h1>Counter</h1>
        <h2> {counter} </h2>
        <div>
          <button onClick={() => increment()}> +1 </button>
          <button onClick={() => decrement()}> -1 </button>
          <button onClick={() => reset()}> reset </button>
        </div>
      </>
    )
}


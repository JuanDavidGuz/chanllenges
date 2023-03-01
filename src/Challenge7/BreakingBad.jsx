import '../App.css'
import { useCounter, useFetch } from '../'

export const BreakingBad = () => {

    
    const {counter, increment, decrement} = useCounter(1)
    const {data, isLoading} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    
    //console.log(data[0].quote)

    return (
      <>
        <h1>BreakingBad</h1> 
        <div>
          <button onClick={counter > 1? decrement : null}> Anterior </button>
          <button onClick={increment}> Siguiente </button>
        </div>
        { isLoading === true ? <span>Loading...</span> : <blockquote>{data[0].quote}</blockquote>}
        
       
      </>
    )
}

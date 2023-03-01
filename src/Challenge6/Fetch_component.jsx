import '../App.css'
import { useFetch } from '../Hooks/useFetch'

export const Fetch_component = () => {

    const {data, error} = useFetch('https://api.giphy.com/v1/gifs/search?api_key=EecSreUBfvEeL5O6t4TZQwWAmLezIpej&q=$0limit=25&offset=play&rating=g&lang=en')

    //const [url, ]

    console.log(data)

    return (
      <>
        <h1>Fetch</h1>
      </>
    )
}

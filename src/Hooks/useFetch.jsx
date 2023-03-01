import { useState, useEffect } from "react";

export const useFetch = ( url ) => {

    const [data, setData ] = useState({})
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const getData = async() => {

        try{
            const resp = await fetch( url )
            const data = await resp.json()
         
            setData(data)

        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [url])

    return {
        data,
        isLoading,
        error

    }
}
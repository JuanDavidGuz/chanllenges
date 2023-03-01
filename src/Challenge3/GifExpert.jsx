import { useState } from 'react'
import '../App.css'

export const GifExpert = () => {
    
    const [categories, setCategories] = useState(['first category', 'second category'])

    const [text, setCategory] = useState( '' )

    const addCategory = () => {
        setCategories( [...categories, text])
        setCategory('')
        //console.log(categories)
    }

    return (
        <>
            <h1>GifExpert</h1>

            <input value={text} type="text" onChange={ e => setCategory(e.target.value) } />
            <button onClick={() => addCategory()}>Añadir</button>

            <ol>
                {
                    categories.map((category, key) => 
                    {
                        return <li key={key}> { category } </li>
                    })
                }
            </ol>
        </>
    )
}

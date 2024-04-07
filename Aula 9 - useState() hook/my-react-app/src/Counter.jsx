import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }


    return(
        <div className='counter-container'>
            <h1 className='counter-display'>{count}</h1>
            <button className='counter-button' onClick={decrement}>Subtrair</button>
            <button className='counter-button' onClick={reset}>Resetar</button>
            <button className='counter-button' onClick={increment}>Adicionar</button>
        </div>
    )
}

export default Counter
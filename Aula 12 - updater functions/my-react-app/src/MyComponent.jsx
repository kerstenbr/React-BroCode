// updater function = A function passed as an argument to setState() usually.
//                    ex. setYear(year + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions  
//                    Good practice to use updater functions

import React, {useState} from 'react'

function MyComponent(){
    const [count, setCount] = useState(0)

    const increment = () => {
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, react will call them in the same order
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)

    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
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

export default MyComponent
// useEffect() = React hook that tells react DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependecies])

// 1. useEffect(() => {})          // Runs after every re-render
// 2. useEffect(() => {}, [])      // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscription (real-time updates)
// #4 Fetching Data from API
// #5 Clean up when component unmounts

import React, {useState, useEffect} from 'react'

function MyComponent(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    // Runs after every re-render
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // })

    // Runs only on mount
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // }, [])

    // Runs on mount + when value changes
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // }, [count == 2])

    // Runs on mount + when value changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color])

    function addCount(){
        setCount(prevCount => prevCount + 1)
    }

    function subCount(){
        setCount(prevCount => prevCount - 1)
    }

    function changeColor(){
        setColor(prevChangeColor => prevChangeColor === "green" ? "red" : "green")
    }

    return(
        <>
            <p style={{color: color}}>Count {count}</p>
            <button onClick={addCount}>Add count</button>
            <button onClick={subCount}>Sub count</button><br />
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default MyComponent
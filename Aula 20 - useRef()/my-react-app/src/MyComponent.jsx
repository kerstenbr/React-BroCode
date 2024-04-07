// useState() = Re-renders the component when the state value changes

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//             When you want a component to "remember" some information
//             but you don't want that infromation to trigger new renders

//             1. Accessing/Interacting with DOM elements
//             2. Handling Focus, Animation and Transitions
//             3. Managing Timers and Intervals


import React, {useState, useEffect, useRef} from 'react'

function MyComponent(){

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
        console.log(inputRef1)
    })

    function handleClick1(){
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = 'Yellow'
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''
    }

    function handleClick2(){
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = 'Yellow'
        inputRef1.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''
    }

    function handleClick3(){
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = 'Yellow'
        inputRef2.current.style.backgroundColor = ''
        inputRef1.current.style.backgroundColor = ''
    }
    return(
        <>
            <button onClick={handleClick1}>Click me!</button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>Click me!</button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>Click me!</button>
            <input ref={inputRef3} />
        </>
    )
}

export default MyComponent
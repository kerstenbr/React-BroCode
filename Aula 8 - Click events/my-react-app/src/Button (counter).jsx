function Button(){
    let count = 0
    const handleClick = (name) => {
        if(count < 3){
            count++
            console.log(`${name} you click me ${count} times!`)
        } else {
            console.log(`${name} stop!`)
        }
    }

    return(
        <button onClick={() => handleClick("kerstenbr")}>Click me!</button>
    )
}

export default Button
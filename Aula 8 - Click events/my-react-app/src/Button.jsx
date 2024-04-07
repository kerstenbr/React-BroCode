function Button(){
    
    const handleClick = (evento) => evento.target.textContent = "Ouch!"

    return(
        <button onClick={(evento) => handleClick(evento)}>Click me!</button>
    )
}

export default Button
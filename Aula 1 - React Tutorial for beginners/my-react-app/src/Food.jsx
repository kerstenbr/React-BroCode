function Food(){
    const food1 = "Pizza"
    const food2 = "Strogonoff de Carne"

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food
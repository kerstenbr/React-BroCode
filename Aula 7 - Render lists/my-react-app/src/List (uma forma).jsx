// function List(){
//     const fruits = ["apple", "banana", "orange", "coconut", "pineapple"]
//     fruits.sort()
    
//     const listItem = fruits.map(fruit => <li>{fruit}</li>)
//     return(<ol>{listItem}</ol>)
// }

function List(){
    const fruits = [
        {id: 1,name: "apple", calories: 95}, 
        {id: 2,name: "banana", calories: 105}, 
        {id: 3,name: "orange", calories: 45}, 
        {id: 4,name: "coconut", calories: 159}, 
        {id: 5,name: "pineapple", calories: 37}]

    // Maneiras de arrumar a lista
    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories) // NUMERICAL
    // fruits.sort((a, b) => b.calories - a.calories) // REVERSE NUMERICAL

    // Maneira de renderizar com filtro
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    const listItem = fruits.map(fruit =>    <li key={fruit.id}>
                                                {fruit.name}: &nbsp; <b>{fruit.calories}</b>
                                            </li>)
    // ***
    // const listItem = lowCalFruits.map(lowCalFruit =>  <li key={lowCalFruit.id}>
    //                                                 {lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b>
    //                                             </li>)
    // ***
    // const listItem = highCalFruits.map(highCalFruit =>  <li key={highCalFruit.id}>
    //     {highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b>
    // </li>)

    return(<ol>{listItem}</ol>)
}


export default List
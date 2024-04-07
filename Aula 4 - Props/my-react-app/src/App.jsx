// props = read-only properties that are shared between components.
//         A parent component can send data to a child component
//         <Component key=value /:
import Student from "./Student"

function App() {
  return (
    <>
      <Student name="SpongeBob" age={30} isStudent={true}/>
      <Student name="Patrick" age={35} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={41} isStudent={true}/>
      <Student/>
    </>
  )
}

export default App

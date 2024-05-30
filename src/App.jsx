import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
// import Friend from './Friend'

function App() {
  function handleClick(){
    alert('button Clicked')
  }
  const handleClick2 = () =>{
    alert('button Click2')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      {/* <Friend></Friend> */}
      <Friends></Friends>
      <Users></Users>
      <Counter ></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={() => {alert('button clicked3')}}>Click me3</button>
      <button onClick={() => addToFive(5)}>Click me4</button>
      
    </>
  )
}

export default App

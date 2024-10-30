import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Counter from './counter'
import Friends from './friends'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
      <h1>React-core-concept</h1>
      <Friends></Friends>

      {/* <Counter></Counter> */}
      

      
     
    
    </>
  )
}

export default App

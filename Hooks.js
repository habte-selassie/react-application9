import React from 'react'
import { useState } from 'react'

function App() {

    // function IntialVal(){
    //     console.log('run')
    //     return 4
    // }


    // const [count, setCount] = useState(IntialVal)

     const [count, setCount] = useState(4)
     const [theme, setTheme] = useState('blue')

    //const [state, setState] = useState({ count:4, theme:'blue'})
    // const count = state.count
    // const theme = state.theme

    function Decrement(){
        // setState(
        //     prevState => {
        //         return {...prevState, count: prevState.count -1}
        //     }
        //)
        setCount(prevCount => prevCount-1)
        setTheme('red')
    } 

    function Increment(){
         setCount(prevCount => prevCount+1)
    } 
    
  return (
    <div>
        <button onClick={Decrement}>-</button>
          <span>{count}</span>
          <span>{theme}</span>
        <button onClick={Increment}>+</button>
    </div>
  )





}

export default App
 
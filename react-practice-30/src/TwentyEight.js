// work with multiple states in a single state object. The component should display the following information on the screen:
// 1. A count value, initially set 0.
// 2. A text value, initially set to 'Hello, World!'.
// 3. An "Active" status, initially set to true. 

import React, { useState } from 'react'

export default function TwentyEight() {

  const [state,setState] = useState({
    count:0,
    text:'Hello World',
    isActive:true
  })

  function increamentCount () {
    setState({...state,count:state.count+1})
  }

  function changeText(){
    setState({...state,text:'Updated Text'})
  }

  function toggleActive(){
    setState({...state,isActive:!state.isActive})
  }

  return (
    <div>
      <h1>Multiple State Example</h1>
      <p>Count:{state.count} </p>
      <p>Text:{state.text}</p>
      <p>Active:{state.isActive ? 'YES' :'NO'}</p>

      <button onClick={increamentCount}>Increment</button>
      <button onClick={changeText}>Change Text</button>
      <button onClick={toggleActive}>Toggle Active</button>
    </div>
  )
}

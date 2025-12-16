import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(() => {
    console.log("useEffect is running...");
  }, [num])


  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button onClick={() => setnum(num + 1)}>Increment num</button>
      <button onClick={() => setnum2(num2 + 10)}>Increment num2</button>
    </div>
  )
}

export default App
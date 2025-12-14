import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title,setTitle] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(event) => {
          setTitle(event.target.value)
          console.log(event.target.value);
        }}
        value={title}
         type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
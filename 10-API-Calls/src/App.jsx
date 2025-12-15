import React from 'react'
import axios from 'axios'

const App = () => {

  // you can use fetch or axios to make API calls

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   console.log(response);
  //   const data = await response.json()
  //   console.log(data);
  // }

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data);
  }
  

  return (
    <div>
      <button onClick={getData}>getData</button>
    </div>
  )
}

export default App
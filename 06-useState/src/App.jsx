import React from 'react'
import { useState } from 'react'

const App = () => {
  // useState hook works asynchronously 

  const [num, setNum] = useState(0)
  const [val, setval] = useState({name: "Vashu", age: 20})
  const [arr, setarr] = useState([1,2,3,4,5])

  function increment(){
    console.log(num);  // 0
    setNum(num + 1)
    console.log(num);  // 0
  }

  function decrement(){
    console.log(num); //
    setNum(num - 1)
    console.log(num);
  }

  function jumpByFive(){
    console.log(num);
    setNum(num + 5)
    console.log(num);
  }

  const btnclick = () => {
    // console.log(val);
    // setNum(prev=>{...prev , user:"shivi",age:22})  // incorrect way to update object in useState
    const newVal = {...val}   // creating a copy of val object --> destructuring
    newVal.age = 21
    newVal.name = "Vashu Chaudhary"
    setval(newVal)
    console.log(val);
  }

  const btn2click = () => {
    // confirm.log(arr);
    const newArr = [...arr]   // creating a copy of arr array --> destructuring
    newArr.push(6)
    setarr(newArr)
    console.log(arr);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={jumpByFive}>Jump by 5</button>
      <br />
      <h3>{val.name}, {val.age}</h3>
      <button onClick={btnclick}>click</button>
      <br />
      <h3>{arr}</h3>
      <button onClick={btn2click}>click</button>
    </div>
  )
}

export default App
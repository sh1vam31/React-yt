import React from 'react'

const App = () => {

  function inputChanging(val){
    console.log(val); 
  }
  function mouseMoving(valX, valY){
    console.log(`mouse moving in x direction ${valX} and in y direction ${valY}`);
  }
  return (
    <div>
      <input onChange={(e) => {inputChanging(e.target.value)}}
       type="text" placeholder='Enter name' />

       <div className='box' onMouseMove={(e) =>{
        mouseMoving(e.clientX, e.clientY);
       }}>

       </div>
    </div>
  )
}

export default App
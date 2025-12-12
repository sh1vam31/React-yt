import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user= 'Vashu' age = {19} img= "https://plus.unsplash.com/premium_photo-1764258888339-f973507c354d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjd8fHxlbnwwfHx8fHw%3D"/>
      <Card user= 'Shivam' age = {20} img= "https://images.unsplash.com/photo-1763713512972-58f361318408?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mjh8fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App
import React from 'react'

const App = () => {

  localStorage.clear();     // use to clear the localStorage
  sessionStorage.clear();   // use to clear the sessionStorage

  localStorage.setItem("name", "Vashu");  // setItem to store data in localStorag
  localStorage.setItem("age", 19);

  const name = localStorage.getItem("name"); // getItem to get data from localStorage
  const age = localStorage.getItem("age");
  console.log(name , age);

  localStorage.removeItem("age");  // removeItem to remove specific data from localStorage

  const user = {
    name: "Shivi",
    age: 20,
    city: "Kanpur"
  }

  localStorage.setItem("user", JSON.stringify(user)); // storing object in localStorage after converting to string because localStorage only store string

  const userData = JSON.parse(localStorage.getItem("user")); // retrieving object from localStorage and converting back to object
  console.log(userData);

  return (
    <div>App</div>
  )
}

export default App
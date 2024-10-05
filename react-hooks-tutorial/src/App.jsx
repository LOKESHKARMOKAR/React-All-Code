
//         React Hoocks Example - 1

{/*import './App.css'
import { useState } from 'react';

function App() {

const [colour,setColour] = useState("Red");



 const changeColour= ()=>{
  setColour("Blue");
  
 }
  return (
    
    <>
      <h1>My Favourite Colour is : {colour}</h1>
      <button onClick={changeColour}>Blue</button>
    </>
  )
}

export default App */}



//         React Hoocks Example - 2

{/* import './App.css'
import { useState } from 'react';

function App() {

const [car,setCar] = useState(
  {
    brand : "Ferari",
    model : "Roma",
    year : "2024",
    colour : "Red"
  }
);



 const changeColour= ()=>{
  setCar((previous)=>{
    return {...previous, colour:"Blue"};
  })
  
 }
  return (
    
    <>
      <h1>My Favourite brand is : {car.brand}</h1>
      <p>It is a {car.colour}, Model is {car.model} from {car.year}. </p>
      <button onClick={changeColour}>Blue</button>
    </>
  )
}

export default App */}


//         React Hoocks Example - 3


import './App.css'
import { useState } from 'react';

function App() {
const [count,setCount] = useState(0);

const increseCounter = ()=>{
  setCount((prev)=>{
    return prev +1
  });
}

  return (
    
    <>
      <h1>count : {count}</h1>
      <button onClick={increseCounter}>Click</button>
    </>
  )
}

export default App 

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


// import './App.css'
// import { useCallback, useEffect, useRef, useState } from 'react';
// import Header from './component/header';

// function App() {

// Useref

{/*const count = useRef(0);

useEffect(()=>{
  count.current = count.current+1; 
})


const increseCount =()=>{
   setValue((prev)=>{return  prev-1 })
}

const decreseCount = ()=>{
   setValue((prev)=>{return prev+1})
}*/}




  // useEffect Hooks

{/*useEffect(()=>{
setTimeout(()=>{
  setCount(count+1)
},2000)
},[count])*/}

  // UseState hooks

{ /*const increseCounter = ()=>{
  setCount((prev)=>{
    return prev +1
  });
}

}
  return (
    
    <>
      <h1>count : {count}</h1>
      <button onClick={increseCounter}>Click</button>
    </>
  )*/ }

  // UseEffect

{/*return(
  <h1>I have render {count} times</h1>
)
*/}

    // useRef

{/*return(
  <>
  <button onClick={decreseCount}>+1</button>
  <h1>{value}</h1>
  <button onClick={increseCount}>-1</button>

  <h1>Render Count : {count.current}</h1>
  </>
)*/}

// const [count, setCount] = useState(0);
// const newFu = useCallback((count)=>{
// console.log("New Function");

// },[count])

// return (
  <>
  {/* <Header newFunction = {newFu}/>
<h1>{count}</h1>
<button onClick={()=>setCount(prev =>(prev+1))}>Click Here</button> */}
  
  </>
// )

// }



import {Footer} from "./components/footer"
import {Profile} from "./components/profile"


function App() {
return (
  <>
 <Profile />
 <Footer />
  </>
)

}

export default App
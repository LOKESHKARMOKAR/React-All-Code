import { useState } from 'react'


function App() {
  const [color, setColor]= useState("grey");
  

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-2xl mt-96">
              <button 
              className="outline-none px-4 py-1 rounded-full text-black font-extrabold" style={{backgroundColor:"red"}} onClick={()=>{
                setColor("Red");
              }} >
                Red</button>

                <button 
              className="outline-none px-4 py-1 rounded-full text-white font-extrabold" style={{backgroundColor:"Green"}} onClick={()=>{
                setColor("Green");
              }} >
                Green</button>

                <button 
              className="outline-none px-4 py-1 rounded-full text-white font-extrabold" style={{backgroundColor:"blue"}} onClick={()=>{
                setColor("blue");
              }} >
                Blue</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default App

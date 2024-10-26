import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Movie from "./pages/movie";
import AppLayout from "./components/layout/AppLayout";
import { Children } from "react";

function App() {
 
  // setup of pages routing path 
const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    Children:[
      // home
  {
    path:"/",
    element:<Home />,
  },
  //about
  {
    path:"/about",
    element:<About />,
  },
  //contact
  {
    path:"/contact",
    element:<Contact />,
  }, 
  //movie
  {
    path:"/movie",
    element:<Movie />,
  }
  ]
  },
 
  
]);
  return (
    
      <RouterProvider router={router}/>
    
  )
}

export default App

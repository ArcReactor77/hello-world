import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import FunctionalComp from './Components/FunctionalComp'
import ClassComp from './Components/ClassComp'
import { NewComp1 } from './Components/NewComp'
import Click from './Components/Click'
import Counter from './Components/Counter'
import ParentComp from './Components/ParentComp'
import ClassProps from './ReactProps/ClassProps'
import FunctionProps from './Components/CompFunc'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Hello world</h1>
    <h1>I am worth it! </h1>
    <p>I am an amazing and professional programmer</p>
    <p>I know what I'm doing. I can do anything I put my mind to it! I believe in myself</p>
    <FunctionalComp/>
    <ClassComp/>
    {/* <NewComp/> */}
    <NewComp1/>
    <Click/>
    <Counter/>
    <ParentComp/>
    <ClassProps name = "Kajal" place = "office 1" />
    <ClassProps name = "Alexandra" place = "office 2" />
    <ClassProps name = "Puss" place = "office 3">
      <p>Child Component</p>
    </ClassProps> 
    <ClassProps name = "Kitty" place = "office 4">
      <button>Click</button>
    </ClassProps>
    <FunctionProps name = "Mulher" place = "Brazil"/>

    
    </div>
   
  )
}

export default App

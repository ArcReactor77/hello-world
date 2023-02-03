import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import FC from './Components/FunctionalComponent'
import { ClassComp1} from './Components/ClassComp'
import Click from './Components/Click'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Hello world</h1>
    <h1>this video is about components</h1>
    <FC />
    {/* <ClassComp/> */}
    <ClassComp1 />
    <Click /> 
    </div>
   
  )
}

export default App

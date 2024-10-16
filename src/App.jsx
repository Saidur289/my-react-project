import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent.jsx'
import WidthHeight from './WidthHeight.jsx'
import DisitalClock from './DisitalClock.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DisitalClock/>
    {/* <WidthHeight/> */}
    {/* <MyComponent/>   */}
    </>
  )
}

export default App

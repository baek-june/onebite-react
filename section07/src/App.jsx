import { useState } from 'react';
import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  }
  return (
    <>
      <div>
        <h1>Simple Counter</h1>
        <Viewer count={count} /> 
        <Controller handleSetCount={handleSetCount} />
      </div>
    </>
  )
}

export default App

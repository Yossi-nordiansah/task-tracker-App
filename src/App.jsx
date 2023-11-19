import { useState } from 'react'
import './App.css'
import Index from './page'
import Layout from './layout/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Index/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components/common'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default App

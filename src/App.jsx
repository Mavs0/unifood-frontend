import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bem-vindo ao Unifood 🍽️</h1>
      <p>Seu sistema de pedidos está quase pronto!</p>
      
      <button onClick={() => setCount((count) => count + 1)}>
        Clique aqui ({count})
      </button>
    </div>
  )
}

export default App

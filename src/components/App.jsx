// create your App component here
import { useState, useEffect } from 'react'

function App() {
  // State setup
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <div className="app">
      <h1>Dog Roulette</h1>
      {/* Placeholder to confirm API fetch where I will render actual data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
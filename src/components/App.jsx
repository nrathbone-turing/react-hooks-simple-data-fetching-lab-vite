// create your App component here
import { useState, useEffect } from 'react'
import DogDisplay from './dogDisplay' 
import FetchButton from './fetchButton'

function App() {
  // State setup
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

 // Fetch function (set up so it can be reused)
  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      if (!response.ok) throw new Error('Something went wrong')
      const json = await response.json()
      setData(json.message)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // useEffect with dependencies (run on mount)
  useEffect(() => {
    fetchData()

    // Cleanup on unmount
    return () => {
      console.log('unmounting')
    }
  }, []) // dependency array

  // Conditional rendering
  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>
  if (!data) return null // or placeholder

  return (
    <div className="app">
      <h1>Dog Roulette</h1>
      {/* Placeholder to confirm API fetch where I will render actual data */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <DogDisplay data={data} loading={loading} error={error}/>
      <FetchButton fetchData={fetchData}/>
    </div>
  )
}

export default App
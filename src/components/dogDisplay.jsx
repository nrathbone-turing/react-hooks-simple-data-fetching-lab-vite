// Component to accept `data` and `loading` and `error` as props

const DogDisplay = ({ data, loading, error }) => {
  return (
    <div className="dog-display">
      {/* If `loading` is true, display "Loading..." */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? ( 
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        // Otherwise, display the puppy
        <img src={data} alt="A Random Dog"></img>
      )}
    </div>
  )
}

export default DogDisplay

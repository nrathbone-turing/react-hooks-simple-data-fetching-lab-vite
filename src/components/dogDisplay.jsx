// Component to accept `data` and `loading` and `error` as props

const dogDisplay = ({ data, loading, error }) => {
  return (
    <div className="joke-container">
      {/* If `loading` is true, display "Loading..." */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? ( 
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        // Otherwise, display the puppy
        <img src={data.message} alt="A Random Dog"></img>
      )}
    </div>
  )
}

export default dogDisplay

// create new component for the button and to accept `fetchData` as a prop

const FetchButton = ({ fetchData }) => {
  return (
    // Add an onClick event that calls `fetchData`
    <button className="fetch-button" onClick={fetchData}>
      Click here for a new puppy</button>
  )
}

export default FetchButton

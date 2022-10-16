import "./NewSpirit.css"
// import useFetch from '../../App/useFetch'

const NewSpirit = ({ drinks, spirit, updateSpirit/*, setChoice */ }) => {
//TODO
//? FIX SPIRIT TO RENDER IN SENTENCE PROPERLY WHEN A SPIRIT IS SELECTED
//? KEEP SELECTION HIGHLIGHTED WHILE CURRENT
  // const {refetch} = useFetch('random')
  return (
    <>
      <div className="new-spirit-container">
        <div className="new-spirit-buttons">
          <p onClick={() => updateSpirit('vodka')} className="new-spirit-selector">Vodka</p>
          <p onClick={() => updateSpirit('gin')} className="new-spirit-selector">Gin</p>
          <p onClick={() => updateSpirit('Bourbon')} className="new-spirit-selector">Bourbon</p>
          <p onClick={() => updateSpirit('rum')} className="new-spirit-selector">Rum</p>
          <p onClick={() => updateSpirit('tequila')} className="new-spirit-selector">Tequila</p>
          <p onClick={() => updateSpirit('Scotch')} className="new-spirit-selector">Scotch</p>
          {/* <p onClick={() => {
            updateSpirit('random')
            setChoice('random')
            refetch('random')
        }} className="spirit-new">Random</p> */}
        </div>
        <h3 className="current">Currently viewing the {spirit} collection</h3>
      </div>
    </>
  )
}


export default NewSpirit;
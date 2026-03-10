import Loading from "./Loading"

const  Character = ({loading, character, error, name, img}) => {
 return (
  // Esto se llama cortocircuito. Si es loading, carga esto, si es error, lo otro, y así.
  <>
    {loading && <p><Loading /></p>}
    {error && <p>{error}</p>}
    {character && (
      <>
        <h2>{name}</h2>
        <img src={img} alt={name} />
      </>
    )}
  </>
 )
}

export default Character
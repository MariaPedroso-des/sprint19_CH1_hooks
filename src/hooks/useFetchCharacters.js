import { useEffect, useState } from 'react'

const useFetchCharacters = (url) => {
  const [character, setCharacter] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

    useEffect(() => {

    setCharacter(null)
    setError(null)
    setLoading(true)

    const fetchCharacter = async () => {
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const result = await response.json()
        setCharacter(result)
      } catch (err) {
        console.log(err)
        setError(err.message || 'Ha ocurrido un error')
      } finally {  // SIEMPRE se va a ejetuar. Siempre después del try-catch
        setLoading(false)
      }
    }
    if(url) fetchCharacter()

  }, [url]) // que se active, cuando la url se pase
  return { character, error, loading } //entre llaves se empaqueta
}

export default useFetchCharacters
import { useState, useContext } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'

export default function useFetchShipsList() {
  const [starShips, setStarShips] = useState(null)
  const { setError, setLoading } = useContext(ContextStarWars)

  const fetchStarShips = async page => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://swapi.dev/api/starships/?page=${page}`
      )
      const data = await response.json()
      setStarShips(data.results)
      setLoading(false)
    } catch (error) {
      console.log('error', error)
      setError(error)
      setLoading(false)
    }
  }

  return [starShips, fetchStarShips]
}

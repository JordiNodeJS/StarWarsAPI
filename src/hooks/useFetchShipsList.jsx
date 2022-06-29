import { useState } from 'react'
import useContextStarWars from './useContextStarWars'

export default function useFetchShipsList() {
  const [starShips, setStarShips] = useState(null)
  const { setError, setLoading } = useContextStarWars()

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

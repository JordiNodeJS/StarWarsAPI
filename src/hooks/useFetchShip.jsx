import { useState } from 'react'
import useContextStarWars from './useContextStarWars'

export default function useFetchShip() {
  const { setError, setLoading } = useContextStarWars()
  const [starShipID, setStarShipID] = useState(null)

  const fetchStarShipID = async url => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setStarShipID(data)
      setLoading(false)
    } catch (error) {
      console.log('error', error)
      setError(error)
      setLoading(false)
    }
  }
  return [starShipID, fetchStarShipID]
}

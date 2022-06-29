import { useContext, useState } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'

export default function useFetchShip() {
  const { setError, setLoading } = useContext(ContextStarWars)
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

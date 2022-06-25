import { useContext, useEffect, useState } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'
import { Link, useParams } from 'react-router-dom'

import { Button } from '@mantine/core'

const StarShip = () => {
  const { id } = useParams()
  const { url, page, setPage, error, setError, loading, setLoading } =
    useContext(ContextStarWars)

  const [starShipID, setStarShipID] = useState(null)
  // url starShip + id
  // url img + id
  // fetch urls

  const fetchStarShipID = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setStarShipID(data)
      setLoading(false)
    } catch (error) {
      console.log('error', error)
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStarShipID()
  }, [])

  const rows = () => {
    const keyStarShip = Object.keys(starShipID)
    return keyStarShip.map((e, i) => <li kye={'ship' + i}>{e}</li>)
  }

  const rowsForIn = () => {
    const row = []
    for (const item in starShipID) {
      const li = (
        <li>
          {item} ----- {starShipID[item]}
        </li>
      )

      row = [...li]
    }

    return row
  }

  const rowsObjectEntries = () => {
    return Object.entries(starShipID).map(([key, value], i) => (
      <li key={key + i}>
        {key}: {value}
      </li>
    ))
  }

  // testing
  // const hArray = [<h2>h2</h2>, <h3>h3</h3>]
  // const hObject = {h2: <h2>h2</h2>, h3: <h3>h3</h3>}

  return (
    <>
      <h1>StarShip {id}</h1>
      <p>{url}</p>

      <ul>{starShipID && rowsObjectEntries()}</ul>

      <Link onClick={_ => setPage(page)} to='/starships'>
        <Button variant='gradient' color='orange'>
          Back to the page
        </Button>
      </Link>

      {/* <ul>{ starShips && starShips.map(e => <li>{e}</li>)}</ul> */}
    </>
  )
}

export default StarShip

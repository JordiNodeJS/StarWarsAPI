import { useContext, useEffect } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'
import CardList from './CardList'
import { Link, useParams } from 'react-router-dom'
import useFetchShip from '../hooks/useFetchShip'

import { Button } from '@mantine/core'

const StarShip = () => {
  const { id } = useParams()
  const { url, page, setPage, error, loading } = useContext(ContextStarWars)
  const [starShipID, fetchStarShipID] = useFetchShip()


  useEffect(() => {
    fetchStarShipID(url)
  }, [])



  return (
    <>
      <h1>StarShip {id}</h1>
      <p>{url}</p>

      <ul>{!loading && !error && starShipID && <CardList {...starShipID} />}</ul>

      <Link onClick={_ => setPage(page)} to='/starships'>
        <Button variant='gradient' color='orange'>
          Back to the page
        </Button>
      </Link>

    </>
  )
}

export default StarShip

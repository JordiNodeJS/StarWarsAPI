import { useEffect } from 'react'
import CardShip from '../components/CardShip'
import { Link, useParams } from 'react-router-dom'
import useFetchShip from '../hooks/useFetchShip'

import { Button } from '@mantine/core'
import useContextStarWars from '../hooks/useContextStarWars'

const StarShip = () => {
  const { id } = useParams()
  const { url, page, setPage, error, loading } = useContextStarWars()
  const [starShipID, fetchStarShipID] = useFetchShip()


  useEffect(() => {
    fetchStarShipID(url)
  }, [])



  return (
    <>
      <h1>StarShip {id}</h1>
      <p>{url}</p>
      <Link onClick={_ => setPage(page)} to='/starships'>
        <Button variant='gradient' color='orange'>
          Back to the page
        </Button>
      </Link>

      <ul>{!loading && !error && starShipID && <CardShip {...starShipID} />}</ul>


    </>
  )
}

export default StarShip

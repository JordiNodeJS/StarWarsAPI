import { useContext } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'
import { Link, useParams } from 'react-router-dom'

import { Button } from '@mantine/core'

const StarShip = () => {
  const { id } = useParams()
  const { url, page, setPage } = useContext(ContextStarWars)
  // url starShip + id
  // url img + id
  // fetch urls

  return (
    // show  starShips.url
    <>
      <h1>StarShip {id}</h1>
      <p>{url}</p>
      <Link onClick={ _ => setPage(page)} to='/starships'>
        <Button variant='gradient' color='orange'>
          Back to the page
        </Button>
      </Link>

      {/* <ul>{ starShips && starShips.map(e => <li>{e}</li>)}</ul> */}
    </>
  )
}

export default StarShip

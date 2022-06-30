import { useEffect } from 'react'
import CardShip from '../components/CardShip'
import { Link, useParams } from 'react-router-dom'
import useFetchShip from '../hooks/useFetchShip'
import { Center } from '@mantine/core'
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

  <Center mt='lg'>
        <Link onClick={_ => setPage(page)} to='/starships'>
          <Button
            variant='gradient'
            gradient={{ from: 'gray', to: 'yellow', deg: 105 }}
            styles={theme => ({
              root: {
                backgroundColor: theme.fn.darken('#868e96', 0.75),
                border: '1px solid gray',
                height: 42,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 5,
    
                '&:hover': {
                  backgroundColor: theme.fn.darken('#868e96', 0.05),
                },
              },
            })}>
            Back to the page
          </Button>
        </Link>
  </Center>

      <ul>
        {!loading && !error && starShipID && <CardShip {...starShipID} />}
      </ul>
    </>
  )
}

export default StarShip

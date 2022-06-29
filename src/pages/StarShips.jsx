import { useEffect, useState, useContext } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'
import useFetchShipsList from '../hooks/useFetchShipsList'
import {
  createStyles,
  Table,
  ScrollArea,
  Text,
  Center,
  Paper,
  Pagination,
  Container,
} from '@mantine/core'
import { Link } from 'react-router-dom'

const useStyles = createStyles(theme => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',
    fontFamily: 'DIN',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },
  links: {
    textDecoration: 'none',
    color: theme.colorScheme === 'light' ? theme.colors.dark[7] : theme.colors.gray[6],
    '&:hover': {
      color:
        theme.colorScheme === 'light'
          ? theme.colors.orange[7]
          : theme.colors.orange[2],
    },
  },
  text: {
    // fontFamily: 'Star Bold',
    // fontFamily: 'DIN Next W01 Condensed Regular',
    // fontFamily: 'Star Bold',
    // fontFamily: 'DIN Medium',
    fontFamily: 'DIN Next W01 Bold',
    textTransform: 'uppercase',
  },
  model: {
    fontFamily: 'DIN Next W01 Medium',
  },
  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}))

const StarShips = () => {
  const { setUrl, page, setPage, error, loading } = useContext(ContextStarWars)

  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)
  const [starShips, fetchStarShips] = useFetchShipsList()

  useEffect(() => {
    fetchStarShips(page)
  }, [page])

  const row =
    !loading &&
    !error &&
    starShips &&
    starShips.map(({ name, model, url }) => {
      const starshipIDpage = url.match(/(\d+)/)[0]

      return (
        <tr key={name}>
          <td size='xs' weight={250} className={classes.name}>
            <Paper>
              <Link
                className={classes.links}
                onClick={_ => setUrl(url)}
                to={`/starships/${starshipIDpage}`}>
                <Text transform='uppercase' className={classes.text}>
                  {name}
                </Text>

                <Text className={classes.model} size='sm' mt='xs' color='dimmed'>
                  {model}
                </Text>
              </Link>
            </Paper>
          </td>
        </tr>
      )
    })

  return (
    <>
      <div>
        <Center mt='lg'>
          {<Pagination total={4} page={page} onChange={setPage} />}
        </Center>
        <Container>
          {loading && (
            <Text
              size='xs'
              sx={{ textTransform: 'uppercase' }}
              weight={700}
              color='dimmed'>
              Loading...
            </Text>
          )}
          {error && <p>Error: {error.message}</p>}
          <ScrollArea
            sx={{ height: 'calc(80vh - 30px)' }}
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table sx={{ minWidth: 400 }}>
              <thead
                className={cx(classes.header, {
                  [classes.scrolled]: scrolled,
                })}>
                <tr>
                  <th>Star Ship List </th>
                </tr>
              </thead>
              <tbody>{row}</tbody>
            </Table>
          </ScrollArea>
        </Container>
      </div>
    </>
  )
}

export default StarShips

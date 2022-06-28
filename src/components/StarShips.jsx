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
import { Eye } from 'tabler-icons-react'
import { Link } from 'react-router-dom'

const useStyles = createStyles(theme => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',
    fontFamily: 'DIN Bold',

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
    color: theme.colorScheme === 'light' ? theme.colors.dark[7] : theme.white,
    '&:hover': {
      color:
        theme.colorScheme === 'light'
          ? theme.colors.orange[7]
          : theme.colors.orange[2],
    },
  },
  text: {
    // fontFamily: 'DIN Black',
    fontFamily: 'Star Bold',
    textTransform: 'uppercase',
    fontSize: 34
  },
  model: {
    fontFamily: 'DIN Next W01 Condensed Regular',
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
                onClick={ _ => setUrl(url)}
                to={`/starships/${starshipIDpage}`}>
                <Text className={classes.text} mt='xs' color='dimmed'>
                  name
                </Text>
                <Text className={classes.text}>{name}</Text>
                <Text size='sm' mt='xs' color='dimmed'>
                  model
                </Text>
                <Text>{model}</Text>
              </Link>
            </Paper>
          </td>
          {/* <td>
            <Text color='dimmed' size='xs'>
              {url}
            </Text>

            <Link
              onClick={_ => setUrl(url)}
              to={`/starships/${starshipIDpage}`}>
              <Eye size={24} strokeWidth={2} color={'#407fbf'} />
            </Link>
          </td> */}
        </tr>
      )
    })

  return (
    <>
      <div>
        <Center mt='sm'>
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
            sx={{ height: '100vh' }}
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

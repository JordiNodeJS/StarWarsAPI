import { useEffect, useState } from 'react'
import useFetchShipsList from '../hooks/useFetchShipsList'
import {
  createStyles,
  Table,
  ScrollArea,
  Text,
  Center,
  Loader,
  Paper,
  Skeleton,
  Pagination,
  Container,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import useContextStarWars from '../hooks/useContextStarWars'
import Skeletron from '../components/Skeletron'
import Dots from '../components/Dots'

const HEADER_HEIGHT = 20
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
  wrapper: {
    position: 'relative',
    paddingTop: 30,
    paddingBottom: 80,

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  dots: {
    position: 'absolute',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  links: {
    textDecoration: 'none',
    color:
      theme.colorScheme === 'light'
        ? theme.colors.dark[7]
        : theme.colors.gray[6],
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
  const { setUrl, page, setPage, error, loading } = useContextStarWars()

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
            <Skeleton visible={loading}>
              <Paper>
                <Link
                  className={classes.links}
                  onClick={_ => setUrl(url)}
                  to={`/starships/${starshipIDpage}`}>
                  <Text transform='uppercase' className={classes.text}>
                    {name}
                  </Text>

                  <Text
                    className={classes.model}
                    size='sm'
                    mt='xs'
                    color='dimmed'>
                    {model}
                  </Text>
                </Link>
              </Paper>
            </Skeleton>
          </td>
        </tr>
      )
    })

  return (
    <>
      <div>
        <Container className={classes.wrapper} size='md'>
          <Center>
            {
              <Pagination
                color='yellow'
                total={4}
                page={page}
                onChange={setPage}
              />
            }
          </Center>
          <Dots className={classes.dots} style={{ left: 0, top: HEADER_HEIGHT }} />
          <Dots className={classes.dots} style={{ left: 60, top: HEADER_HEIGHT }} />
          <Dots className={classes.dots} style={{ left: 0, top: HEADER_HEIGHT +140 }} />
          <Dots className={classes.dots} style={{ right: 0, top: HEADER_HEIGHT + 60 }} />

          {error && <p>Error: {error.message}</p>}

          {loading ? (
            <>
              <Center mt='lg' mb='sm'>
                <Loader variant='bars' color='yellow' size='lg' />
              </Center>
              <Skeletron />
            </>
          ) : (
            <ScrollArea
              sx={{ height: 'calc(60vh - 30px)' }}
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
          )}
        </Container>
      </div>
    </>
  )
}

export default StarShips

import React from 'react'
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Center,
  useMantineTheme,
} from '@mantine/core'
import Dots from '../components/Dots'
import { Link } from 'react-router-dom'

const useStyles = createStyles(theme => ({
  wrapper: {
    position: 'relative',
    paddingTop: 120,
    paddingBottom: 80,

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
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

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },
  video: {
    width: 900,
    [theme.fn.smallerThan('xs')]: {
      width: 200,
    },
    [theme.fn.smallerThan('md')]: {
      width: 500,
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}))

export default function Welcome() {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Container className={classes.wrapper} size='md'>
          <Center mt={-140} mb='lg'>
            <video className={classes.video} autoPlay muted loop>
              <source
                src='https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2021/11/04/1636056809-star-wars.mp4'
                type='video/mp4'
              />
            </video>
          </Center>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className={classes.inner}>
        <Title className={classes.title}>
          SWAPI{' '}
          <Text component='span' color={theme.colors.red} inherit>
            The Star Wars API.
          </Text>{' '}
          All the Star Ships data you've ever wanted of the best dreams you've never got
        </Title>

        <Container p={0} size={600}>
          <Text size='lg' color='dimmed' className={classes.description}>
            Build more reliable software API data with us. Best team also trained by IT Academy
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size='lg'
            variant='default'
            color='gray'>
            <a href='https://swapi.dev/' target='new'><Text color={theme.colors.dark[2]}>SWAPI</Text></a> 
          </Button>
          <Button className={classes.control} color='red'  size='lg'>
            <Link to='/starships'><Text color={theme.colors.dark}>StarShips</Text> </Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}

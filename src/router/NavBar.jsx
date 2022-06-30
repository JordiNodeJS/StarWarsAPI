import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  createStyles,
  Header,
  Container,
  Center,
  Grid,
  Text,
  Anchor,
  Button,
  Space,
  Group,
  Burger,
  Paper,
  Transition,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import ButtonTheme from '../components/ButtonTheme'
import LogoSvg from '../components/LogoSvg'

const HEADER_HEIGHT = 230

const useStyles = createStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  // header: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   height: '100%',
  // },
  user: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.fn.darken('#868e96', 0.75): theme.fn.lighten('#e98902', 0.75) ,
    color: theme.colorScheme === 'light' ? theme.fn.darken('#868e96', 0.75): theme.fn.lighten('#e98902', 0.75) ,
    border: '1px solid gray',
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'light' ? theme.fn.darken('#e98902', 0.02): theme.fn.lighten('#e98902', 0.45)   ,
    },
  },

  header: {
    position: 'relative',
    height: HEADER_HEIGHT,
    paddingTop: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.yellow[6],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: 0,
  },

  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },

  login: {
    position: 'relative',
    top: 64,
    right: -150,
    display: 'flex',
    width: 200,
    justifyContent: 'flex-end',
    [theme.fn.smallerThan('sm')]: {
      position: 'relative',
      top: -20,
    },
  },
  buttonLogin: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },
  buttonTheme: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}))

const NavBar = ({ links }) => {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  const items = links.map(link => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={_ => {
        setActive(link.link)
        toggleOpened(false)
      }}>
      {link.label}
    </Link>
  ))

  return (
    <>
      <Header height={HEADER_HEIGHT} mb={0} className={classes.root}>
        <Container className={classes.header}>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size='sm'
          />
          <Container className={classes.inner}>
            <Container mb='sm' mt={-60} className={classes.logo}>
              <Grid>
                <Grid.Col span={3}></Grid.Col>
                <Grid.Col span={3}>
                  <LogoSvg />
                </Grid.Col>
                <Grid.Col span={3} offset={3}>
                  <Group className={classes.login} spacing={9}>
                    <Button
                      className={classes.user}>
                      LOGIN
                    </Button>
                    <Button className={classes.user}>
                      LOGOUT
                    </Button>
                  </Group>
                </Grid.Col>
              </Grid>
            </Container>

            <Container className={classes.menu}>
              <Container>
                <Group spacing={5} className={classes.links}>
                  {items}
                </Group>
              </Container>
            </Container>
          </Container>

          <Group className={classes.buttonTheme}>
            <ButtonTheme />
          </Group>

          <Transition
            transition='pop-top-right'
            duration={200}
            mounted={opened}>
            {styles => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </>
  )
}
export default NavBar

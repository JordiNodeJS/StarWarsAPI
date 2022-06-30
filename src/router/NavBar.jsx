import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  createStyles,
  Header,
  Container,
  Grid,
  Button,
  Menu,
  Text,
  UnstyledButton,
  Space,
  Group,
  Center,
  Burger,
  Paper,
  Transition,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import ButtonTheme from '../components/ButtonTheme'
// import LogoSvg from '../components/LogoSvg'
import Logo from '../components/Logo'
import { Logout, Login, Message, ChevronDown } from 'tabler-icons-react'
import useContextStarWars from '../hooks/useContextStarWars'
const HEADER_HEIGHT = 200

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
  // userMenu: {
  //   [theme.fn.smallerThan('xs')]: {
  //     display: 'none',
  //   },
  // },
  buttonTheme: {
    position: 'absolute',
    top: 10,
    right: 10,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
  },
  // header: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   height: '100%',
  // },
  user2: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.darken('#868e96', 0.75)
        : theme.fn.lighten('#e98902', 0.75),
    border: '1px solid gray',
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    fontSize: '0.8rem',
    color:
      theme.colorScheme === 'light'
        ? theme.fn.darken('#868e96', 0.75)
        : theme.fn.lighten('#e98902', 0.75),
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.fn.darken('#EBC52A', 0.02)
          : theme.fn.lighten('gray', 0.21),
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
    marginTop: theme.spacing.md,
  },

  logo_: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  login: {
    position: 'absolute',
    top: 64,
    right: 20,
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
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const [active, setActive] = useState(links[0].link)
  const {setAuth} = useContextStarWars()
  const { classes, theme, cx } = useStyles()

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
            <Container mb='sm'>
              <Grid gutter={40}>
                <Grid.Col span={4}></Grid.Col>
                <Grid.Col span={4}>
                  <Center>
                    <Logo />
                  </Center>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>
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
            <Menu
              size={260}
              placement='end'
              transition='pop-top-right'
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              control={
                <UnstyledButton
                  className={cx(classes.user, classes.user2, {
                    [classes.userActive]: userMenuOpened,
                  })}>
                  <Group spacing={7}>
                    <Text weight={500} size='sm' sx={{ lineHeight: 1 }} mr={3}>
                      USER
                    </Text>
                    <ChevronDown size={12} />
                  </Group>
                </UnstyledButton>
              }>
              <Menu.Item icon={<Login size={14} color={theme.colors.red[6]} />}>
               <Link to='login'>Login</Link> 
              </Menu.Item>
              <Menu.Item icon={<Logout size={14} />}>
                <Link to='/' onClick={ _ => setAuth(false)}>Logout</Link></Menu.Item>
              <Menu.Item
                icon={<Message size={14} color={theme.colors.blue[6]} />}>
               <Link to='/register'>Register</Link>
              </Menu.Item>
            </Menu>
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

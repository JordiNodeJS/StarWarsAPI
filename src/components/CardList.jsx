import { useContext } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'
import { createStyles, Card, Center, Image, Text, Group } from '@mantine/core'
import { useParams } from 'react-router-dom'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: 500,
    margin: 'auto',
  },

  imageSection: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  item: {
    '& + &': {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  },

  title: {
    lineHeight: 1,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}))

export default function CardList(starShipID) {
  const { url } = useContext(ContextStarWars)
  const image = `https://starwars-visualguide.com/assets/img/starships/${
    url.match(/(\d+)/)[0]
  }.jpg`

  const { classes } = useStyles()
  const { id } = useParams()

  const { name, manufacturer } = starShipID

  const items = Object.entries(starShipID).map(([key, value], i) => {
    return (
      <Group key={i} className={classes.card}>
        <Group position='center' mt='md'>
          <Center>
            <Text size='sm' color='dimmed' className={classes.title}>
              {key}🥫
            </Text>
            <Text weight={500} size='sm' className={classes.title}>
              {value}
            </Text>
          </Center>
          <Center></Center>
        </Group>
      </Group>
    )
  })

  return (
    <Card withBorder radius='md' className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} alt={name} height={300} />
      </Card.Section>
      <Card.Section className={classes.footer}>
        <Text size='lg' className={classes.title} weight={500}>
          StarShips nº {id} Features 
        </Text>

        <Text size='xs' color='dimmed' mt={3} mb='xl'>
          Manufactured by {manufacturer}
        </Text>
        {items}
      </Card.Section>
    </Card>
  )
}

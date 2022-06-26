import {
  createStyles,
  Card,
  Image,
  Text,
  Group,
  RingProgress,
} from '@mantine/core'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}))

const CardWithStatsProps = {
  image:
    'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  title: 'Running challenge',
  description:
    '56 km this month • 17% improvement compared to last month • 443 place in global scoreboard',
  stats: [
    {
      title: 'Distance',
      value: '27.4 km',
    },
    {
      title: 'Avg. speed',
      value: '9.6 km/h',
    },
    {
      title: 'Score',
      value: '88/100',
    },
  ],
}

const statsCardProps = {
  name: 'Star Destroyer',
  model: 'Imperial I-class Star Destroyer',
  manufacturer: 'Kuat Drive Yards',
  cost_in_credits: '150000000',
  length: '1,600',
  max_atmosphering_speed: '975',
  crew: '47,060',
  passengers: 'n/a',
  cargo_capacity: '36000000',
  consumables: '2 years',
  hyperdrive_rating: '2.0',
  MGLT: '60',
  starship_class: 'Star Destroyer',
  pilots: [],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
  ],
  created: '2014-12-10T15:08:19.848000Z',
  edited: '2014-12-20T21:23:49.870000Z',
  url: 'https://swapi.dev/api/starships/3/',
}

const image = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'

export default function CardList({ name, manufacturer, cost_in_credits, length }) {
  const { classes } = useStyles()

  return (
    <Card withBorder p='lg' className={classes.card}>
      <Card.Section>
        <Image src={image} alt={'image'} height={100} />
      </Card.Section>

      <Card.Section className={classes.footer}>
      <Group position="apart" mt="xl">
         <Text size='xs' color='dimmed'>
          Name
        </Text>
        <Text weight={500} size='sm'>
          {name}
        </Text>
                <Text size='xs' color='dimmed'>
        manufacturer
        </Text>
        <Text weight={500} size='sm'>
          {manufacturer}
        </Text>
      </Group>
       
      <Group position="apart" mt="xl">
         <Text size='xs' color='dimmed'>
         cost_in_credits
        </Text>
        <Text weight={500} size='sm'>
          {cost_in_credits}
        </Text>
        <Text size='xs' color='dimmed'>
        length
        </Text>
        <Text weight={500} size='sm'>
          {length}
        </Text>
      </Group>
       
      </Card.Section>
    </Card>
  )
}

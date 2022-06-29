import { useEffect} from 'react'
import { createStyles, Card, Center, Image, Text, Group } from '@mantine/core'
import { useParams } from 'react-router-dom'
import useFetchImg from '../hooks/useFetchImg'
import useContextStarWars from '../hooks/useContextStarWars'

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
    fontFamily: theme.fontFamily,
    textTransform: 'uppercase',
    fontWeight: 'bold',
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

export default function CardShip(starShipID) {
  const { url } = useContextStarWars()
  const { classes } = useStyles()
  const { id } = useParams()
  const { name, manufacturer } = starShipID

  const image = `https://starwars-visualguide.com/assets/img/starships/${
    url.match(/(\d+)/)[0]
  }.jpg`

  const [img, fetchImage, loadingImg] = useFetchImg()

  useEffect(() => {
    fetchImage(image)
  }, [])

const ImgShip = _ => img === null ? <Image src={img} alt={name} withPlaceholder height={300} /> : <Image src={img} alt={name} />



  const items = Object.entries(starShipID).map(([key, value], i) => {
    return (
      <Group key={i} className={classes.card}>
        <Group position='center' mt='md'>
          <Center>
            <Text size='sm' color='dimmed' className={classes.item}>
              🗝 {key}:
            </Text>
            <Text weight={500} size='sm' className={classes.item}>
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
        <ImgShip />
      </Card.Section>
      <Card.Section className={classes.footer}>
        <Text size='lg' className={classes.title} weight={500}>
          StarShips nº {id}
        </Text>
        <Text transform='uppercase' size='md' className={classes.title} weight={500}>
         Features
        </Text>

        <Text size='xs' color='dimmed' mt={3} mb='xl'>
          Manufactured by {manufacturer}
        </Text>
        {items}
      </Card.Section>
    </Card>
  )
}

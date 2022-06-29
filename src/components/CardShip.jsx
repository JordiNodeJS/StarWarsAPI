import { useContext, useEffect, useState } from 'react'
import { ContextStarWars } from '../router/ContextStarWarsProvider'
import { createStyles, Card, Center, Image, Text, Group } from '@mantine/core'
import { useParams } from 'react-router-dom'
import useFetchImg from '../hooks/useFetchImg'

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

export default function CardShip(starShipID) {
  const { url } = useContext(ContextStarWars)
  const { classes } = useStyles()
  const { id } = useParams()
  const { name, manufacturer } = starShipID

  // const [img, fetchImg] = useFetchImg()

  const image = `https://starwars-visualguide.com/assets/img/starships/${
    url.match(/(\d+)/)[0]
  }.jpg`

  const imageUrl = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'

  const [img, setImg] = useState()

  const fetchImage = async image => {
    const res = await fetch(image)
    if (res.status === 200) { 
      const imageBlob = await res.blob()
      const imageObjectURL = URL.createObjectURL(imageBlob)
      setImg(imageObjectURL)
    }
       else {
      setImg(imageUrl)}
    }
  

  useEffect(() => {
    fetchImage(image)
  }, [])

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
        <Image src={img} alt={name} height={300} />
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

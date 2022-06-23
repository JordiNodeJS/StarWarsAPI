import { useEffect, useState } from "react"
import { createStyles, Table, ScrollArea, Text, Center, Paper, Pagination, Container  } from '@mantine/core';
import {  Eye } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    header: {
      position: 'sticky',
      top: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      transition: 'box-shadow 150ms ease',
  
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
        }`,
      },
    },
  
    scrolled: {
      boxShadow: theme.shadows.sm,
    },
  }));


const StartShips = () => {
    const [starShips, setStarShips] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [page, setPage] = useState(1)
    const { classes, cx } = useStyles()
    const [scrolled, setScrolled] = useState(false)


    const fetchStarShips = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`)
            const data = await response.json()
            console.log(data.results);
            setStarShips(data.results)
            setLoading(false)
        
        } catch (error) {
            console.log('error', error);
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchStarShips()
    }
    , [page])   


    const row = !loading && !error && starShips &&
        starShips.map(starShip =>
            <tr key={starShip.name} ><td size="xs" weight={250} className={classes.name}>
                <Paper>
                <Text size='sm' mt='xs' color='dimmed'>
                       name 
                    </Text>
                    <Text transform='uppercase'>
                        {starShip.name}
                    </Text>
                    <Text size='sm' mt='xs' color='dimmed'>
                    model 
                    </Text>
                    <Text mb=''>
                        {starShip.model}                    
                    </Text>
                </Paper>
            </td>
            <td>
                <Eye
                size={24}
                strokeWidth={2}
                color={'#407fbf'}
                 />
            </td>
            </tr>
        )

    return (
        <div>
            <Center mt='sm'>
            {!loading && !error && <Pagination total={5} page={page} onChange={setPage} />}
            </Center>
            <Container>

                {loading && <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed" >Loading...</Text>}
                {error && <p>Error: {error.message}</p>}
                <ScrollArea sx={{ height: 400 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table sx={{ minWidth: 700 }}>
                    <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                    <tr>
                        <th>Star Ship List </th>
                    </tr>
                    </thead>
                    <tbody>{row}</tbody>
                </Table>
                </ScrollArea>
            </Container>
            <Center mt='sm'>
            {!loading && !error && <Pagination total={5} page={page} onChange={setPage} />}
            </Center>
  
        </div>
    )
}

export default StartShips
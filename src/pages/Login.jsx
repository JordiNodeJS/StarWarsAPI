import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  TextInput,
  PasswordInput,
  Tooltip,
  Center,
  Text,
  Container,
  Button,
  Group,
} from '@mantine/core'
import { InfoCircle } from 'tabler-icons-react'
import useContextStarWars from '../hooks/useContextStarWars'

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label='We store your data unsecurely. Be worried'
      placement='end'
      withArrow
      transition='pop-bottom-right'>
      <Text color='dimmed' sx={{ cursor: 'help' }}>
        <Center>
          <InfoCircle size={18} />
        </Center>
      </Text>
    </Tooltip>
  )

  return (
    <TextInput
      rightSection={rightSection}
      label='👇 Your nick'
      placeholder='nick here 👈'
    />
  )
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false)
  const [value, setValue] = useState('')
  const { setAuth } = useContextStarWars()

  const valid = value.trim().length >= 6

  return (
    <Tooltip
      label={
        valid ? 'All good! 🤣' : 'Password must include at least 6 characters, and a donative for this project too 😛'
      }
      position='bottom'
      placement='end'
      withArrow
      opened={opened}
      sx={{ display: 'block', width: '100%' }}
      color={valid ? 'teal' : 'gray'}>
      <PasswordInput
        label='🔑 Password required'
        required
        placeholder='🔐Your password '
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt='md'
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
      />
            <Group position='right' mt='lg'>
        { valid && <Button color='yellow' onClick={() => valid ? setAuth(true): setAuth(false)} >
          <Link to='/starships'>Login</Link>
        </Button>}
      </Group>
    </Tooltip>
  )
}

export default function Login() {

  return (
    <Container mt='lg' size='xs'>
      <Center mb='md'>Login</Center>
      <TooltipIcon />
      <TooltipFocus />

    </Container>
  )
}

import React, { useState } from 'react'
import {
  TextInput,
  PasswordInput,
  Tooltip,
  Center,
  Text,
  Container,
} from '@mantine/core'
import { InfoCircle } from 'tabler-icons-react'
import PasswordStrength from '../hooks/PasswordStrength'
import { ButtonProgress } from '../components/ButtonProgress'

function TooltipIcon() {
  const rightSection = (
    <Tooltip
      label='We store your data securely'
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
      label='Tooltip shown on icon hover'
      placeholder='Your email'
    />
  )
}

function TooltipFocus() {
  const [opened, setOpened] = useState(false)
  const [value, setValue] = useState('')
  const valid = value.trim().length >= 6
  return (
    <Tooltip
      label={
        valid ? 'All good!' : 'Password must include at least 6 characters'
      }
      position='bottom'
      placement='start'
      withArrow
      opened={opened}
      sx={{ display: 'block', width: '100%' }}
      color={valid ? 'teal' : 'gray'}>
      <PasswordInput
        label='Tooltip shown onFocus'
        required
        placeholder='Your password'
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt='md'
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  )
}



export default function Register() {
  return (
    <Container mt='lg' size='xs'>
      <Center mb='md'>Sign Up</Center>
      <TooltipIcon />
      <TooltipFocus />
      <PasswordStrength />
      <ButtonProgress />
    </Container>
  )
}

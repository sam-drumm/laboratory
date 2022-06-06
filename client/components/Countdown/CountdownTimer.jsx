import React from 'react'
import { HStack, Stack } from '@chakra-ui/react'
import { useCountdown } from './useCountdown'
import DateTimeDisplay from './DateTimeDisplay'

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Stack
      spacing={6}
      p={8}
      direction={['column', 'row']}
      borderWidth={2}
      borderRadius={8}
      justify={'left'}
    >

      <h2>Pitch ends in:</h2>

      <HStack>
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </HStack>

    </Stack>
  )
}

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)
  if (days + hours + minutes + seconds <= 0) {
    return (

      <ExpiredNotice />

    )
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />

    )
  }
}

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Project pitch ended!</span>
      <p>Checkout other great ideas here.</p>
    </div>
  )
}
export default CountdownTimer

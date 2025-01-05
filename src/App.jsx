import { useState } from 'react'
import './App.css'
import {  Container, Stack } from '@mui/material'
import Weather from './components/Weather'


function App() {
  return (
    <Stack height={'100vh'} justifyContent={'center'}  width={'100vw'}color={'primary.contrastText'} bgcolor={'primary.light'}>
      <Container>
      <Weather />
      </Container>
    </Stack>
  )
}

export default App

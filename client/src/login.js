import React from 'react'
import { Container } from 'react-bootstrap'
require('dotenv').config()

const AUTH_URL = process.env.AUTH_URL

export default function Login() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <a className='btn btn-success btn-lg' href={AUTH_URL}>
        Login with Spotify
      </a>
    </Container>
  )
}

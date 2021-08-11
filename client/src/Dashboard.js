import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
require('dotenv').config()

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_client_id:
})

export default function Dashboard({ code }) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  return (
    <Container className='d-flex flex-column py-2' style={{ height: '100vh' }}>
      <Form.Control
        type='search'
        placeholder='Search Songs/Artists'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='flex-grow-1 my-2' style={{ overflowY: 'auto' }}>
        Songs
      </div>
      <div>Bottom</div>
    </Container>
  )
}
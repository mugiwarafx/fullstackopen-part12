import { useEffect, useState } from 'react'

import logo from './logo.svg'
import gologo from './go-logo-white.svg'

import albumService from './services/albums'

import utilsGithub from './utils/github'

import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [albums, setAlbums] = useState({})
  useEffect(() => {
    const fetchAlbums = async () => {
      const res = await albumService.getAlbums()
      //console.log(res)
      setAlbums(res)
    }
    fetchAlbums()
    utilsGithub() // code to run after render goes here
  }, []) // <-- empty array means 'run once'
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-header-container'>
          <img src={logo} className='App-logo' alt='logo' />
          <img src={gologo} className='App-logo go' alt='logo' />
          <p
            style={{ maxWidth: '800px', margin: 'auto', paddingBottom: '10vh' }}
          >
            Someday, I'll become an API, meanwhile press F12 and console! Also
            you can HTTP POST a new album with the header application/json and
            the body {`{"title": string, "artist": string, "price": int}`} 🦄
          </p>
        </div>

        <div className='App-link-container'>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <code> && </code>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn Go
          </a>
        </div>
      </header>
    </div>
  )
}

export default App

import { useEffect } from 'react'

import logo from './logo.svg'
import gologo from './go-logo-white.svg'

import utilsGithub from './utils/github'
import './App.css'

function App() {
  useEffect(() => {
    utilsGithub() // code to run after render goes here
  }, []) // <-- empty array means 'run once'
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-header-container'>
          <img src={logo} className='App-logo' alt='logo' />
          <img src={gologo} className='App-logo go' alt='logo' />
          <p>So far, I am an API service test (almost).</p>
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

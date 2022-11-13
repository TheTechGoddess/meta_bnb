import React from 'react'
import Advert from './components/Advert'
import Home from './components/Home'
import Metabnb from './components/Metabnb'
import Navbar from './components/Navbar'
import Nfts from './components/Nfts'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Advert />
      <Nfts />
      <Metabnb />
    </div>
  )
}

export default App

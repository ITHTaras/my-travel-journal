import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import data from './data'

function App() {
  const cards = data.map((item) => {
    return(
      <Card 
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div className="cards">
      {cards}
      </div>
    </div>
  )
}

export default App

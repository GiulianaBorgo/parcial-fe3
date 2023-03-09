import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'



function App() {

  const [cards, setCards] = useState([])
  let id = 0
   
  function renderCard(card){
    
    const newCard = {
        id: id++,
        card,
      }

    setCards([...cards, newCard])
  }



  return(
    <div className='App'>
      <Form onSubmit={renderCard}/>
      {cards.map((card) => {
        return <Card key={card.id} card={card} /> 
      })}
    </div>
  )
}

export default App

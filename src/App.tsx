import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './types';
import TarotCard from './components/TarotCard/TarotCard';

const STEP_NUMBER_MAP = ['the querent', 'the block', 'the root', 'the recent past', 'possibilities', 'where you\'re headed', 'how you view yourself', 'your environment', 'hopes and fears', 'the outcome']

function App() {
  const [activeCardModal, setActiveCardModal] = React.useState(-1)
  const [data, setData] = React.useState([])
  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
          setData(data.map((instanceData: Card) => new Card(instanceData)));
        })
    );
  }, []);

  const cardData = data.map((card: Card, index: number) => {
    return (
      <div>
        <h2 className='stepTitle'>{STEP_NUMBER_MAP[index]}</h2>
        <TarotCard index={index} card={card} activeCardModal={activeCardModal} setActiveCardModal={setActiveCardModal}/>
      </div>
    )
  }
  )

  return (
    <div className="App">
      {cardData}
    </div>
  );
}

export default App;

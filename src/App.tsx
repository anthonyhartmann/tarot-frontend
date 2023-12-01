import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './types';
import TarotCard from './components/TarotCard/TarotCard';
import InfoDump from './components/InfoDump/InfoDump';
import { act } from 'react-dom/test-utils';

const STEP_NUMBER_MAP = ['the querent', 'the block', 'the root', 'the recent past', 'possibilities', 'where you\'re headed', 'how you view yourself', 'your environment', 'hopes and fears', 'the outcome', 'the end']

function App() {
  const [activeCardModal, setActiveCardModal] = React.useState(-1)
  const [step, setStep] = React.useState(0)
  const [data, setData] = React.useState([])
  const [layout, setLayout] = React.useState("celtic-cross")
  const textMap = new Map<Number, Card>()
  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
          setData(data.map((instanceData: Card) => new Card(instanceData)));
        })
    );
  }, []);

  const cardData = data.map((card: Card, index: number) => {
    textMap.set(index, card)
    return (
      <div>
        <TarotCard index={index} step={step} setStep={setStep} layout={layout} card={card} activeCardModal={activeCardModal} setActiveCardModal={setActiveCardModal}/>
      </div>
    )
  }
  )
  
  return (
    <div className="App">
        <header className="header">
          {"Step " + step + ":\n" +  STEP_NUMBER_MAP[step]}
        </header>
        {cardData}
        <div className="infoBox">
          {activeCardModal != -1 && <InfoDump card={textMap.get(activeCardModal)!!}/>}
        </div>
    </div>
  );
}

export default App;

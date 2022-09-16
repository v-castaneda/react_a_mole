import './App.css';
import { useState } from 'react'
import MoleContainer from './components/MoleContainer';
import EmptySlot from './components/EmptySlot';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 3; i++) {
      hills.push(
        <MoleContainer 
        key={i} 
        score={score}
        setScore={setScore} />
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
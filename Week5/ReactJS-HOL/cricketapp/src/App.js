import React from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import IndianPlayers from './components/IndianPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

const players = [
  { name: 'Jack', score: 50 },
  { name: 'Michael', score: 70 },
  { name: 'John', score: 40 },
  { name: 'Ann', score: 61 },
  { name: 'Elisabeth', score: 61 },
  { name: 'Sachin', score: 95 },
  { name: 'Dhoni', score: 100 },
  { name: 'Virat', score: 84 },
  { name: 'Jadeja', score: 64 },
  { name: 'Raina', score: 75 },
  { name: 'Rohit', score: 80 }
];

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
const IndianPlayersList = [...T20Players, ...RanjiPlayers];

function FlagView({ flag }) {
  return flag === true ? (
    <>
      <h1>List of Players</h1>
      <ListofPlayers />
      <hr />
      <h1>List of Players having Scores Less than 70</h1>
      <ScoreBelow70 players={players} />
    </>
  ) : (
    <>
      <h1>Odd Players</h1>
      <IndianPlayers />
      <hr />
      <h1>List of Indian Players Merged</h1>
      <ListofIndianPlayers players={IndianPlayersList} />
    </>
  );
}

function App() {
  return (
    <div>
      <h1>Example when flag = true</h1>
      <FlagView flag={true} />
      <hr />
      <h1>Example when flag = false</h1>
      <FlagView flag={false} />
    </div>
  );
}

export default App;

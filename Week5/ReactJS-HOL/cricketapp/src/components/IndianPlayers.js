import React from 'react';

const IndianPlayers = () => {
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];
  const [first, second, third, fourth, fifth, sixth] = IndianTeam;

  return (
    <>
      <ul>
        <li>{`First : ${first}`}</li>
        <li>{`Third : ${third}`}</li>
        <li>{`Fifth : ${fifth}`}</li>
      </ul>
      <h1>Even Players</h1>
      <ul>
        <li>{`Second : ${second}`}</li>
        <li>{`Fourth : ${fourth}`}</li>
        <li>{`Sixth : ${sixth}`}</li>
      </ul>
    </>
  );
};

export default IndianPlayers;

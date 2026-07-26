import React from 'react';

const ScoreBelow70 = ({ players }) => {
  const filteredPlayers = players.filter(({ score }) => score <= 70);

  return (
    <ul>
      {filteredPlayers.map(({ name, score }) => (
        <li key={name}>{`${name} ${score}`}</li>
      ))}
    </ul>
  );
};

export default ScoreBelow70;

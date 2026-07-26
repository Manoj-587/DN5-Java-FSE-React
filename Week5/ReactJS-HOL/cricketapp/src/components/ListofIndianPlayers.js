import React from 'react';

const ListofIndianPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>{`Mr. ${player}`}</li>
      ))}
    </ul>
  );
};

export default ListofIndianPlayers;

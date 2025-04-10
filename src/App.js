import React, { useState } from 'react';
import PollOption from './PollOption'; // Import PollOption component

function App() {
  
  const [votes, setVotes] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Rat', count: 0 },
  ]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index].count += 1;
    setVotes(newVotes);
  };

  const getLeader = () => {
    const leader = votes.reduce((prev, current) => (prev.count > current.count ? prev : current));
    return leader;
  };

  return (
    <div>
      <h1>Vote for Your Favorite Pet!</h1>
      {votes.map((vote, index) => (
        <PollOption
          key={index}
          label={vote.option}
          count={vote.count}
          onVote={() => handleVote(index)}
        />
      ))}
      <div style={{ marginTop: '20px' }}>
        <h2>Current Leader: {getLeader().option} with {getLeader().count} votes!</h2>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(6).fill(0));

  const handleVote = () => {
    const p = [...points];
    p[selected] += 1;
    setPoints(p);
    console.log(points);
  };

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * 6));
  };

  const mostVotedIndex = () => {
    if (points.length === 0) return -1;
    const maxValue = Math.max(...points);
    console.log(maxValue);
    return points.indexOf(maxValue);
  };

  return (
    <>
      <div className="container">
        <div className="btn-container">
          <button className="btn" onClick={handleClick}>
            New Anecdote
          </button>
          <button className="btn right" onClick={handleVote}>
            Vote
          </button>
        </div>
        <h2>Anecdote for the day</h2>
        <p>{anecdotes[selected]}</p>
        <p className="votes">Votes: {points[selected]}</p>
      </div>
      <div className="container">
        <h2>Most voted</h2>
        <p>{anecdotes[mostVotedIndex()]}</p>
        <p className="votes">
          <b>With {points[mostVotedIndex()]} votes</b>
        </p>
      </div>
    </>
  );
};

export default App;

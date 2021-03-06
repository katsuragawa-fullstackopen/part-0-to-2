import React, { useState } from "react";

const Header = () => <h1>Give Feedback</h1>;

const EachStats = ({ text, stat }) => {
  return (
    <tr>
      <td>{text} </td>
      <td> {stat}</td>
    </tr>
  );
};

const Stats = ({ goodValue, neutralValue, badValue }) => {
  if (goodValue === 0 && neutralValue === 0 && badValue === 0) {
    return (
      <div className="result">
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div className="result">
      <h2>Statistics</h2>
      <table>
        <tbody>
          <EachStats text="Good" stat={goodValue} />
          <EachStats text="Neutral" stat={neutralValue} />
          <EachStats text="Bad" stat={badValue} />
          <EachStats text="Avarage" stat={goodValue - badValue} />
          <EachStats
            text="Percentile"
            stat={`${((goodValue / (goodValue + neutralValue + badValue)) * 100).toFixed(1)} %`}
          />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const updateValue = (feedback, newValue) => {
    setFeedback({ ...allFeedback, [feedback]: newValue });
  };
  const [allFeedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  console.log(allFeedback);

  return (
    <div className="App">
      <Header />
      <Button
        handleClick={() => updateValue("good", allFeedback.good + 1)}
        text={"good"}
      />
      <Button
        handleClick={() => updateValue("neutral", allFeedback.neutral + 1)}
        text={"neutral"}
      />
      <Button
        handleClick={() => updateValue("bad", allFeedback.bad + 1)}
        text={"bad"}
      />
      <br />
      <Stats
        goodValue={allFeedback.good}
        neutralValue={allFeedback.neutral}
        badValue={allFeedback.bad}
      />
    </div>
  );
}

export default App;

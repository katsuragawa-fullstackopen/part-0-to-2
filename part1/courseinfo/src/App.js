const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
  <p>
    {props.part} {props.excercise}
  </p>
);

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} excercise={props.exercises1} />
      <Part part={props.part2} excercise={props.exercises2} />
      <Part part={props.part3} excercise={props.exercises3} />
    </>
  );
};

const Total = (props) => (
  <p>
    Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
  </p>
);

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div className="App">
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
}

export default App;

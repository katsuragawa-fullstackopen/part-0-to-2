// const Header = (props) => <h1>{props.course}</h1>;

// const Part = (props) => (
//   <p>
//     {props.part.name} {props.part.excercises}
//   </p>
// );

// const Content = (props) => {
//   return (
//     <>
//       <Part part={props.parts[0]} />
//       <Part part={props.parts[1]} />
//       <Part part={props.parts[2]} />
//     </>
//   );
// };

// const Total = (props) => (
//   <p>
//     Number of exercises{" "}
//     {props.parts[0].exercises +
//       props.parts[1].exercises +
//       props.parts[2].exercises}
//   </p>
// );

import React from "react";
import Course from "./components/Course";

function App() {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course courses={courses} />;
}

export default App;

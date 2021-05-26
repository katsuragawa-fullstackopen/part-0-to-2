import React from "react";

const Module = ({ course }) => {
  console.log("course");
  return (
    <div>
      <Header header={course.name} />
      <Content content={course.parts} />
    </div>
  );
};

const Header = ({ header }) => {
  console.log("header");
  return <h2>{header}</h2>;
};

const Content = ({ content }) => {
  const total = content.reduce((sum, p) => sum + p.exercises, 0);
  return (
    <div>
      <ul>
        {content.map((part) => (
          <Part key={part.id} name={part.name} ex={part.exercises} />
        ))}
      </ul>
      <Total total={total} />
    </div>
  );
};

const Part = ({ name, ex }) => {
  return (
    <li>
      {name}, {ex}
    </li>
  );
};

const Total = ({ total }) => {
  return <p className="total">{total} exercises</p>;
};

const Course = ({ courses }) => {
  console.log("First Child");
  console.log(courses[0].id, courses[1].id);
  return (
    <div className="content">
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Module key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Course;

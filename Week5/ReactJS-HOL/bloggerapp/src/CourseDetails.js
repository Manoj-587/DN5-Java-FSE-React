import React from "react";
import { courses } from "./Data";

function CourseDetails() {

  const coursedet = (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.cname}</h2>
          <h4>{course.date}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="column">
      <h1>Course Details</h1>
      {coursedet}
    </div>
  );
}

export default CourseDetails;
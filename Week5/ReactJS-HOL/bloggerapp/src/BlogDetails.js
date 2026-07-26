import React from "react";
import { blogs } from "./Data";

function BlogDetails() {

  const content = (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="column">
      <h1>Blog Details</h1>
      {content}
    </div>
  );
}

export default BlogDetails;
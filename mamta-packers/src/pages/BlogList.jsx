import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogService";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs().then(setBlogs);
  }, []);

  return (
    <div>
      <h2>📚 Blogs</h2>
      <ul>
        {blogs.map((blog, i) => (
          <li key={i}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

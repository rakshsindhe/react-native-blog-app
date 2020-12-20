import React, { useReducer, createContext } from "react";

const BlogContext = createContext();

const blogReducer = (state, action) => {
  const { type, payload } = action;
  const { title } = payload;
  switch (type) {
    case "ADD_BLOG":
      return [...state, { title }];

    default:
      state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = blogPost => {
    dispatch({ type: "ADD_BLOG", payload: blogPost });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

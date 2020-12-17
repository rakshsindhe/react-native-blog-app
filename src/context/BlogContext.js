import React, { Children, createContext } from "react";

const BlogContext = createContext();

const blogPosts = [{
    id:1,
    title:"Blog1"
},{
    id:2,
    title:"Blog2"
}, {
    id:3,
    title:"Blog3"
}]

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>;
};

export default BlogContext;

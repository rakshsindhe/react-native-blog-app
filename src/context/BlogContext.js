import createDataContext from "./createDataContext";
import { v4 as uuidv4 } from "uuid";

const ADD_BLOG = "ADD_BLOG";
const DELETE_BLOG = "DELETE_BLOG";

const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BLOG:
      return [...state, { ...payload }];

    case DELETE_BLOG:
      return state.filter(blogPost => blogPost.id !== payload);

    default:
      state;
  }
};

const addBlogPost = dispatch => {
  return newBlogPost => {
    dispatch({ type: ADD_BLOG, payload: newBlogPost });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: DELETE_BLOG, payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  [
    {
      id: uuidv4(),
      title: "Sample Post 1",
      content: "Sample Content of Blog 1"
    },
    {
      id: uuidv4(),
      title: "Sample Post 2",
      content: "Sample Content of Blog 2"
    }
  ]
);

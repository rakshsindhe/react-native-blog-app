import createDataContext from "./createDataContext";

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
      id: 1,
      title: "Sample Post 1"
    },
    {
      id: 2,
      title: "Sample Post 2"
    }
  ]
);

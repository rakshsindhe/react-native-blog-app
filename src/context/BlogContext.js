import createDataContext from "./createDataContext";

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

const addBlogPost = dispatch => {
  return blogPost => {
    dispatch({ type: "ADD_BLOG", payload: blogPost });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);

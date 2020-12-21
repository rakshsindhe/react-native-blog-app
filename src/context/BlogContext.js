import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const DELETE_BLOG = "DELETE_BLOG";
const EDIT_BLOG = "EDIT_BLOG";
const GET_BLOGS = "GET_BLOGS";
const GET_BLOG_BY_ID = "GET_BLOG_BY_ID";

const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BLOGS:
      return payload;
    case GET_BLOG_BY_ID:
      return payload;

    case DELETE_BLOG:
      return state.filter((blogPost) => blogPost.id !== payload);

    case EDIT_BLOG:
      return state;

    default:
      state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogPosts");
      dispatch({ type: GET_BLOGS, payload: response.data });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const getBlogPostById = (dispatch) => {
  return async (blogId) => {
    try {
      const response = await jsonServer.get(`/blogPosts/${blogId}`);
      dispatch({ type: GET_BLOG_BY_ID, payload: response.data });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const addBlogPost = (dispatch) => {
  return async (newBlogPost, callback) => {
    try {
      await jsonServer.post("/blogPosts", { ...newBlogPost });
      callback();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      const response = await jsonServer.delete(`/blogPosts/${id}`);
      dispatch({ type: DELETE_BLOG, payload: id });
    } catch (error) {
      console.log("ERR : ", error);
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (updatedBlogPost, callback) => {
    try {
      const { id, title, content } = updatedBlogPost;
      const response = await jsonServer.put(`/blogPosts/${id}`, {
        title,
        content,
      });
      dispatch({ type: EDIT_BLOG, payload: response.data });
      callback();
    } catch (error) {
      console.log("ERR : ", error);
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts, getBlogPostById },
  []
);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import ViewBlog from "./src/screens/ViewBlog";
import CreateBlog from "./src/screens/CreateBlog";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    ViewBlogScreen: ViewBlog,
    CreateBlogScreen: CreateBlog
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog List"
    }
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

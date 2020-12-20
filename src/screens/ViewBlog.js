import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { Context } from "../context/BlogContext";

const ViewBlog = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state = [] } = useContext(Context);

  const [blogPost = {}] = state.filter(blog => blog.id === id);
  const { title = "", content = "" } = blogPost;

  return (
    <View style={styles.viewScreenContainer}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </View>
  );
};

export default withNavigation(ViewBlog);

const styles = StyleSheet.create({
  viewScreenContainer: {
    marginHorizontal: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 35,
    borderWidth: 1,
    minHeight: 250
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 10
  },
  content: {
    fontSize: 16
  }
});

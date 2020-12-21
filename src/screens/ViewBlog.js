import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { Context } from "../context/BlogContext";
import { Entypo } from "@expo/vector-icons";

const ViewBlog = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state = {}, getBlogPostById } = useContext(Context);
  const { title = "", content = "" } = state;

  useEffect(() => {
    getBlogPostById(id);
    const viewScreenListener = navigation.addListener("didFocus", () => {
      getBlogPostById(id);
    });
    return () => {
      viewScreenListener.remove();
    };
  }, []);

  return (
    <View style={styles.viewScreenContainer}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </View>
  );
};

ViewBlog.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    title: "Blog Details",
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("EditBlogScreen", { id })}
      >
        <Entypo name="edit" size={28} color="black" style={styles.icon} />
      </TouchableOpacity>
    ),
  };
};

export default withNavigation(ViewBlog);

const styles = StyleSheet.create({
  viewScreenContainer: {
    marginHorizontal: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 35,
    borderWidth: 1,
    minHeight: 250,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
  icon: {
    marginRight: 15,
  },
});

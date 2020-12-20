import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context as BlogContext } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const IndexScreen = ({ navigation }) => {
  const { state = [], deleteBlogPost } = useContext(BlogContext);

  return (
    <View style={{ paddingVertical: 35 }}>
      <FlatList
        data={state}
        keyExtractor={blog => blog.id}
        renderItem={({ item }) => {
          const { title, id, content } = item;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewBlogScreen", { id })}
            >
              <View style={styles.blog}>
                <Text style={styles.text}>{title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(id)}>
                  <FontAwesome name="trash-o" size={24} color="#FF3031" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(IndexScreen);

const styles = StyleSheet.create({
  blog: {
    padding: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1
  },
  text: {
    fontSize: 17,
    fontWeight: "700"
  }
});

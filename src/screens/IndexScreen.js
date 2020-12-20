import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Context as BlogContext } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state = [], addBlogPost, deleteBlogPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");

  const handleBlogPostSubmit = () => {
    addBlogPost({ id: state.length + 1, title });
    setTitle("");
  };

  return (
    <View style={{ paddingVertical: 20 }}>
      <Text>Add Blog Post</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, fontSize: 17, marginBottom: 8 }}
        value={title}
        onChangeText={setTitle}
        onEndEditing={() => Keyboard.dismiss()}
      />
      <TouchableOpacity
        style={{
          padding: 12,
          backgroundColor: "#3498DB",
          borderWidth: 1.5,
          borderColor: "#3498DB",
          width: 150
        }}
        onPress={handleBlogPostSubmit}
      >
        <Text style={{ fontSize: 18, textAlign: "center" }}>Add Blog</Text>
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={blog => blog.title}
        renderItem={({ item }) => {
          const { title, id } = item;
          return (
            <View style={styles.blog}>
              <Text>{title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(id)}>
                <FontAwesome name="trash-o" size={24} color="#FF3031" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  blog: {
    padding: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1
  }
});

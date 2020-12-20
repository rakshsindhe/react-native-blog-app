import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data = [], addBlogPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");

  const handleBlogPostSubmit = () => {
    addBlogPost({ title });
    setTitle("");
  };

  return (
    <View style={{ padding: 20 }}>
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
        data={data}
        keyExtractor={blog => blog.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});

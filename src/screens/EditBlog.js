import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Context } from "../context/BlogContext";

const EditBlog = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state = {}, editBlogPost } = useContext(Context);

  const { title: blogTitle = "", content: blogContent = "" } = state;

  const [title, setTitle] = useState(blogTitle);
  const [content, setContent] = useState(blogContent);

  const handleOnBlogUpdate = () => {
    editBlogPost({ id, title, content }, () => {
      setTitle(""),
        setContent(""),
        navigation.navigate("ViewBlogScreen", { id });
    });
  };

  return (
    <View style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
      <Text style={{ marginBottom: 4 }}>Title</Text>
      <TextInput
        style={styles.titleTextInput}
        value={title}
        onChangeText={setTitle}
        onEndEditing={() => Keyboard.dismiss()}
        placeholder={"Enter blog title here"}
      />
      <Text style={{ marginBottom: 4 }}>Content</Text>
      <TextInput
        style={styles.contentTextInput}
        value={content}
        onChangeText={setContent}
        onEndEditing={() => Keyboard.dismiss()}
        multiline={true}
        placeholder={"Enter blog content here"}
      />
      <TouchableOpacity
        style={title === "" || content === "" ? styles.disabledBtn : styles.btn}
        onPress={handleOnBlogUpdate}
        disabled={title === "" || content === ""}
      >
        <Text style={{ fontSize: 18, textAlign: "center" }}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

EditBlog.navigationOptions = ({ navigation }) => {
  return {
    title: "Edit Blog",
  };
};

export default withNavigation(EditBlog);

const styles = StyleSheet.create({
  titleTextInput: {
    borderWidth: 1,
    padding: 10,
    fontSize: 17,
    marginBottom: 8,
  },
  contentTextInput: {
    borderWidth: 1,
    padding: 10,
    fontSize: 17,
    marginBottom: 8,
    minHeight: 150,
    textAlignVertical: "top",
    maxHeight: 250,
  },
  btn: {
    padding: 12,
    backgroundColor: "#3498DB",
    borderWidth: 1.5,
    borderColor: "#3498DB",
    width: 100,
  },
  disabledBtn: {
    backgroundColor: "#5d90b2",
    borderColor: "#5d90b2",
    padding: 12,
    borderWidth: 1.5,
    width: 100,
  },
});

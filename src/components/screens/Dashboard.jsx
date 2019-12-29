import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import PostsCard from "./../forms/posts/postsCard";
import { Subheading, Dialog } from "react-native-paper";

class DashboardView extends Component {
  componentDidMount() {
    this.props.getPostsInit();
  }
  render() {
    // console.log(this.props.post.posts);
    const { posts } = this.props.post;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Subheading style={styles.header}> Entries </Subheading>
        {posts &&
          posts.length > 0 &&
          posts.map((post, i) => (
            <PostsCard key={i} title={post.title} content={post.content} />
          ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    padding: 40,
    fontSize: 25,
    marginTop: 10
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});
export default DashboardView;

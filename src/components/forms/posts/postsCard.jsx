import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, View } from "react-native";
const PostsCard = props => (
  <View style={styles.container}>
    <Card style={styles.cardBox} key={props.key}>
      <Title>{props.title}</Title>
      <Paragraph style={styles.para}>{props.content}</Paragraph>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    overflow: "scroll"
  },
  cardBox: {
    padding: 20,
    textAlign: "left",
    minHeight: 100,
    width: 300
  },
  para: {
    lineHeight: 50
  },
  textField: {
    marginBottom: 5,
    borderTopColor: "#000"
  },
  postbtn: {
    marginTop: 20
  }
});

export default PostsCard;

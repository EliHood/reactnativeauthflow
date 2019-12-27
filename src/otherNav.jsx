import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ContentView from "./containers/addContent";
import Icon from "react-native-vector-icons/AntDesign";

const OtherNavigation = createStackNavigator(
  {
    Content: {
      screen: ContentView
    }
  },
  {
    headerMode: "none",
    activeColor: "#f0edf6",
    tabBarLabel: "Content",
    inactiveColor: "#333333",
    barStyle: {
      backgroundColor: "#B9D2B1",
      justifyContent: "center",
      alignItems: "center"
    }
  }
);
export default createAppContainer(OtherNavigation);

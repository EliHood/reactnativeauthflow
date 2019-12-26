import React from "react";
// import HomeView from "./components/screens/Home";
import AddPostView from "./containers/addPost";
import SettingsView from "./containers/settings";
import Icon from "react-native-vector-icons/AntDesign";
import { createAppContainer } from "react-navigation";
import DashboardView from "./components/screens/Dashboard";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: AddPostView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      }
    },

    Dashboard: {
      screen: DashboardView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="dashboard" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: SettingsView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={24} />
        )
      }
    }
  },

  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#333333",
    barStyle: {
      backgroundColor: "#B9D2B1",
      justifyContent: "center",
      alignItems: "center"
    }
  }
);

export default createAppContainer(AppNavigator);

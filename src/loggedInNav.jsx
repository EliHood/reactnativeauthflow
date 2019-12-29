import React from "react";
// import HomeView from "./components/screens/Home";
import AddTitleView from "./containers/addTitle";
import SettingsView from "./containers/settings";
import Icon from "react-native-vector-icons/AntDesign";
import { createAppContainer } from "react-navigation";
import DashboardView from "./containers/dashboard";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: AddTitleView,
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
    tabBarLabel: "Content",
    inactiveColor: "#333333",
    barStyle: {
      backgroundColor: "#B9D2B1",
      justifyContent: "center",
      alignItems: "center"
    }
  }
);

export default createAppContainer(AppNavigator);

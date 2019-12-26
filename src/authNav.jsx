import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import AuthLoadingScreen from "./AuthLoadingScreen";
import AuthNavigation from "./splashNav";
import AppNavigator from "./loggedInNav";
import { createStackNavigator } from "react-navigation-stack";
export default createAppContainer(
  createStackNavigator(
    {
      AuthLoading: {
        screen: AuthLoadingScreen,
      },
      App: AppNavigator,
      Auth: AuthNavigation,
    },
    {
      initialRouteName: "AuthLoading",
      headerMode: "none",
    },
  ),
);

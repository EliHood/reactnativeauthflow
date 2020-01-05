/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  DefaultTheme,
  Provider as PaperProvider,
  Appbar
} from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthNav from "./authNav";
// you can set your style right here, it'll be propagated to application

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#333",
    accent: "#B9D2B1"
  },
  underlineColor: "transparent"
};

class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <AuthNav />
        </Provider>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
